-- Insert bucket if not exists
INSERT INTO storage.buckets (id, name, public)
VALUES ('logos', 'logos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'logos');

-- Allow authenticated users to upload
DROP POLICY IF EXISTS "Auth Insert" ON storage.objects;
CREATE POLICY "Auth Insert" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'logos');

-- Allow authenticated users to update
DROP POLICY IF EXISTS "Auth Update" ON storage.objects;
CREATE POLICY "Auth Update" ON storage.objects
  FOR UPDATE TO authenticated USING (bucket_id = 'logos');

-- Allow authenticated users to delete
DROP POLICY IF EXISTS "Auth Delete" ON storage.objects;
CREATE POLICY "Auth Delete" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'logos');

-- Ensure authenticated users have full access to clients table
DROP POLICY IF EXISTS "Enable insert for authenticated" ON public.clients;
CREATE POLICY "Enable insert for authenticated" ON public.clients
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Enable update for authenticated" ON public.clients;
CREATE POLICY "Enable update for authenticated" ON public.clients
  FOR UPDATE TO authenticated USING (true);

DROP POLICY IF EXISTS "Enable delete for authenticated" ON public.clients;
CREATE POLICY "Enable delete for authenticated" ON public.clients
  FOR DELETE TO authenticated USING (true);
