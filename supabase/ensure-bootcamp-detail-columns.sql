BEGIN;

ALTER TABLE public.bootcamps
  ADD COLUMN IF NOT EXISTS curriculum jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS benefits jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS requirements jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS projects jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS faqs jsonb DEFAULT '[]'::jsonb;

COMMENT ON COLUMN public.bootcamps.curriculum IS 'Course curriculum outline as a JSON array of strings or objects';
COMMENT ON COLUMN public.bootcamps.benefits IS 'Bootcamp benefits as a JSON array of strings or objects';
COMMENT ON COLUMN public.bootcamps.requirements IS 'Bootcamp requirements as a JSON array of strings or objects';
COMMENT ON COLUMN public.bootcamps.projects IS 'Projects students will ship as a JSON array of strings or objects';
COMMENT ON COLUMN public.bootcamps.faqs IS 'Frequently asked questions as a JSON array of objects with q and a fields';

COMMIT;
