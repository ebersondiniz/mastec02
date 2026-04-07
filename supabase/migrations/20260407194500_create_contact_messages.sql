CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon or authenticated) to insert new messages
DROP POLICY IF EXISTS "Enable insert for anyone" ON public.contact_messages;
CREATE POLICY "Enable insert for anyone" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- Allow only authenticated users to read messages
DROP POLICY IF EXISTS "Enable read for authenticated" ON public.contact_messages;
CREATE POLICY "Enable read for authenticated" ON public.contact_messages
  FOR SELECT TO authenticated USING (true);
