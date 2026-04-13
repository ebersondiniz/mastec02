CREATE TABLE IF NOT EXISTS public.clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    logo_url TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Enable read access for all users" ON public.clients;
CREATE POLICY "Enable read access for all users" ON public.clients
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Enable insert for authenticated" ON public.clients;
CREATE POLICY "Enable insert for authenticated" ON public.clients
    FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Enable update for authenticated" ON public.clients;
CREATE POLICY "Enable update for authenticated" ON public.clients
    FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Enable delete for authenticated" ON public.clients;
CREATE POLICY "Enable delete for authenticated" ON public.clients
    FOR DELETE TO authenticated USING (true);

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM public.clients WHERE name = 'MRV') THEN
        INSERT INTO public.clients (name, logo_url) VALUES
        ('MRV', 'https://img.usecurling.com/i?q=building&shape=fill&color=green');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM public.clients WHERE name = 'Gerresheimer') THEN
        INSERT INTO public.clients (name, logo_url) VALUES
        ('Gerresheimer', 'https://img.usecurling.com/i?q=medical&shape=lineal-color&color=cyan');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM public.clients WHERE name = 'BAAN') THEN
        INSERT INTO public.clients (name, logo_url) VALUES
        ('BAAN', 'https://img.usecurling.com/i?q=airplane&shape=fill&color=yellow');
    END IF;
END $$;
