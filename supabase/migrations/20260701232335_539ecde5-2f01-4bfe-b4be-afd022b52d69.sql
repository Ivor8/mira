
-- Roles
CREATE TYPE public.app_role AS ENUM ('super_admin','admin','student');

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  avatar_url text,
  phone text,
  bio text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE OR REPLACE FUNCTION public.is_admin(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role IN ('admin','super_admin'));
$$;

-- Auto-create profile + student role on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, phone)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.raw_user_meta_data->>'phone'
  )
  ON CONFLICT (id) DO NOTHING;
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'student')
  ON CONFLICT DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER profiles_updated BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Profiles policies
CREATE POLICY "profiles_self_read" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_admin_read" ON public.profiles FOR SELECT USING (public.is_admin(auth.uid()));
CREATE POLICY "profiles_self_update" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "profiles_admin_update" ON public.profiles FOR UPDATE USING (public.is_admin(auth.uid()));

-- Roles policies
CREATE POLICY "roles_self_read" ON public.user_roles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "roles_admin_read" ON public.user_roles FOR SELECT USING (public.is_admin(auth.uid()));

-- Bootcamps
CREATE TABLE public.bootcamps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  short_description text,
  description text,
  cover_image_url text,
  curriculum jsonb DEFAULT '[]'::jsonb,
  benefits jsonb DEFAULT '[]'::jsonb,
  requirements jsonb DEFAULT '[]'::jsonb,
  projects jsonb DEFAULT '[]'::jsonb,
  faqs jsonb DEFAULT '[]'::jsonb,
  instructor jsonb DEFAULT '{}'::jsonb,
  price numeric(12,2) NOT NULL DEFAULT 0,
  currency text NOT NULL DEFAULT 'XAF',
  duration_weeks int DEFAULT 8,
  max_seats int NOT NULL DEFAULT 30,
  seats_taken int NOT NULL DEFAULT 0,
  start_date date,
  end_date date,
  registration_deadline date,
  status text NOT NULL DEFAULT 'draft',
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT bootcamp_status_chk CHECK (status IN ('draft','published','closed','archived'))
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.bootcamps TO authenticated;
GRANT SELECT ON public.bootcamps TO anon;
GRANT ALL ON public.bootcamps TO service_role;
ALTER TABLE public.bootcamps ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER bootcamps_updated BEFORE UPDATE ON public.bootcamps FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE POLICY "bootcamps_public_read" ON public.bootcamps FOR SELECT
  USING (status IN ('published','closed'));
CREATE POLICY "bootcamps_admin_all" ON public.bootcamps FOR ALL
  USING (public.is_admin(auth.uid()))
  WITH CHECK (public.is_admin(auth.uid()));

-- Registrations
CREATE TABLE public.registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bootcamp_id uuid NOT NULL REFERENCES public.bootcamps(id) ON DELETE CASCADE,
  student_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'reserved',
  payment_status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (bootcamp_id, student_id),
  CONSTRAINT reg_status_chk CHECK (status IN ('reserved','confirmed','cancelled','completed')),
  CONSTRAINT reg_pay_chk CHECK (payment_status IN ('pending','successful','failed','refunded'))
);
GRANT SELECT, INSERT, UPDATE ON public.registrations TO authenticated;
GRANT ALL ON public.registrations TO service_role;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER registrations_updated BEFORE UPDATE ON public.registrations FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE POLICY "reg_student_read" ON public.registrations FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "reg_student_insert" ON public.registrations FOR INSERT WITH CHECK (auth.uid() = student_id);
CREATE POLICY "reg_admin_all" ON public.registrations FOR ALL
  USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

CREATE INDEX ON public.registrations (student_id);
CREATE INDEX ON public.registrations (bootcamp_id);

-- Enforce seat cap
CREATE OR REPLACE FUNCTION public.enforce_seat_cap()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE bc RECORD;
BEGIN
  SELECT max_seats, seats_taken, status, registration_deadline INTO bc FROM public.bootcamps WHERE id = NEW.bootcamp_id FOR UPDATE;
  IF bc.status <> 'published' THEN RAISE EXCEPTION 'Registration is closed for this bootcamp'; END IF;
  IF bc.registration_deadline IS NOT NULL AND bc.registration_deadline < CURRENT_DATE THEN RAISE EXCEPTION 'Registration deadline has passed'; END IF;
  IF bc.seats_taken >= bc.max_seats THEN RAISE EXCEPTION 'No seats remaining'; END IF;
  UPDATE public.bootcamps SET seats_taken = seats_taken + 1 WHERE id = NEW.bootcamp_id;
  RETURN NEW;
END; $$;
CREATE TRIGGER reg_enforce_cap BEFORE INSERT ON public.registrations FOR EACH ROW EXECUTE FUNCTION public.enforce_seat_cap();

-- Sessions
CREATE TABLE public.sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bootcamp_id uuid NOT NULL REFERENCES public.bootcamps(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  meet_provider text NOT NULL DEFAULT 'google_meet',
  meet_url text NOT NULL,
  session_date date NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  learning_objectives text,
  homework text,
  notes text,
  resources jsonb DEFAULT '[]'::jsonb,
  visibility text NOT NULL DEFAULT 'enrolled',
  status text NOT NULL DEFAULT 'scheduled',
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT session_status_chk CHECK (status IN ('scheduled','live','completed','cancelled'))
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.sessions TO authenticated;
GRANT ALL ON public.sessions TO service_role;
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER sessions_updated BEFORE UPDATE ON public.sessions FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE OR REPLACE FUNCTION public.is_enrolled(_user uuid, _bootcamp uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.registrations WHERE student_id = _user AND bootcamp_id = _bootcamp AND status IN ('reserved','confirmed','completed'));
$$;

CREATE POLICY "sessions_enrolled_read" ON public.sessions FOR SELECT USING (public.is_enrolled(auth.uid(), bootcamp_id));
CREATE POLICY "sessions_admin_all" ON public.sessions FOR ALL USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

-- Attendance
CREATE TABLE public.attendance (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES public.sessions(id) ON DELETE CASCADE,
  student_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  bootcamp_id uuid NOT NULL REFERENCES public.bootcamps(id) ON DELETE CASCADE,
  joined_at timestamptz NOT NULL DEFAULT now(),
  browser text,
  ip_address text,
  UNIQUE (session_id, student_id)
);
GRANT SELECT, INSERT ON public.attendance TO authenticated;
GRANT ALL ON public.attendance TO service_role;
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;
CREATE POLICY "att_student_insert" ON public.attendance FOR INSERT WITH CHECK (auth.uid() = student_id);
CREATE POLICY "att_student_read" ON public.attendance FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "att_admin_all" ON public.attendance FOR ALL USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

-- Payments
CREATE TABLE public.payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_id uuid REFERENCES public.registrations(id) ON DELETE SET NULL,
  student_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  bootcamp_id uuid REFERENCES public.bootcamps(id) ON DELETE SET NULL,
  amount numeric(12,2) NOT NULL,
  currency text NOT NULL DEFAULT 'XAF',
  provider text NOT NULL,
  phone_number text,
  transaction_ref text,
  status text NOT NULL DEFAULT 'pending',
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT pay_status_chk CHECK (status IN ('pending','successful','failed','refunded')),
  CONSTRAINT pay_provider_chk CHECK (provider IN ('mtn_momo','orange_money','manual','other'))
);
GRANT SELECT, INSERT, UPDATE ON public.payments TO authenticated;
GRANT ALL ON public.payments TO service_role;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER payments_updated BEFORE UPDATE ON public.payments FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE POLICY "pay_student_read" ON public.payments FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "pay_student_insert" ON public.payments FOR INSERT WITH CHECK (auth.uid() = student_id);
CREATE POLICY "pay_admin_all" ON public.payments FOR ALL USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

-- Notifications
CREATE TABLE public.notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  body text,
  type text DEFAULT 'info',
  link text,
  read_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.notifications TO authenticated;
GRANT ALL ON public.notifications TO service_role;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "notif_self_read" ON public.notifications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "notif_self_update" ON public.notifications FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "notif_admin_all" ON public.notifications FOR ALL USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

-- Resources
CREATE TABLE public.resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bootcamp_id uuid NOT NULL REFERENCES public.bootcamps(id) ON DELETE CASCADE,
  session_id uuid REFERENCES public.sessions(id) ON DELETE SET NULL,
  title text NOT NULL,
  description text,
  file_url text NOT NULL,
  file_type text,
  uploaded_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.resources TO authenticated;
GRANT ALL ON public.resources TO service_role;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "res_enrolled_read" ON public.resources FOR SELECT USING (public.is_enrolled(auth.uid(), bootcamp_id));
CREATE POLICY "res_admin_all" ON public.resources FOR ALL USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

-- Support tickets
CREATE TABLE public.support_tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'open',
  response text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT ticket_status_chk CHECK (status IN ('open','pending','resolved','closed'))
);
GRANT SELECT, INSERT, UPDATE ON public.support_tickets TO authenticated;
GRANT ALL ON public.support_tickets TO service_role;
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER tickets_updated BEFORE UPDATE ON public.support_tickets FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE POLICY "tick_self_read" ON public.support_tickets FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "tick_self_insert" ON public.support_tickets FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "tick_admin_all" ON public.support_tickets FOR ALL USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

-- Certificates
CREATE TABLE public.certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  bootcamp_id uuid NOT NULL REFERENCES public.bootcamps(id) ON DELETE CASCADE,
  certificate_code text UNIQUE NOT NULL DEFAULT ('MEA-' || upper(substr(gen_random_uuid()::text,1,8))),
  issued_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (student_id, bootcamp_id)
);
GRANT SELECT, INSERT ON public.certificates TO authenticated;
GRANT SELECT ON public.certificates TO anon;
GRANT ALL ON public.certificates TO service_role;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "cert_student_read" ON public.certificates FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "cert_public_verify" ON public.certificates FOR SELECT USING (true);
CREATE POLICY "cert_admin_all" ON public.certificates FOR ALL USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

-- Audit logs
CREATE TABLE public.audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  action text NOT NULL,
  entity text,
  entity_id uuid,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.audit_logs TO authenticated;
GRANT ALL ON public.audit_logs TO service_role;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "audit_admin_read" ON public.audit_logs FOR SELECT USING (public.is_admin(auth.uid()));
CREATE POLICY "audit_self_insert" ON public.audit_logs FOR INSERT WITH CHECK (auth.uid() = actor_id);

-- Settings
CREATE TABLE public.settings (
  key text PRIMARY KEY,
  value jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.settings TO anon, authenticated;
GRANT ALL ON public.settings TO service_role;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "settings_public_read" ON public.settings FOR SELECT USING (true);
CREATE POLICY "settings_admin_write" ON public.settings FOR ALL USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

INSERT INTO public.settings (key, value) VALUES
  ('brand', '{"name":"Mira Edge Academy","tagline":"Learn. Build. Innovate. Lead.","poweredBy":"Mira Edge Technologies","website":"https://www.miraedge.tech","whatsapp":"+237676514428","email":"info@miraedge.tech"}'::jsonb);
