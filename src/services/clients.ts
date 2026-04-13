import { supabase } from '@/lib/supabase/client'

export interface Client {
  id: string
  name: string
  logo_url: string
  is_active: boolean
  created_at: string
}

export async function getClients() {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching clients:', error)
    // Return fallback data so the section doesn't appear empty while migrations are fixed
    return [
      {
        id: 'fallback-1',
        name: 'MRV',
        logo_url: '/mrv.png',
        is_active: true,
        created_at: new Date().toISOString(),
      },
      {
        id: 'fallback-2',
        name: 'Gerresheimer',
        logo_url: '/gerresheimer.png',
        is_active: true,
        created_at: new Date().toISOString(),
      },
      {
        id: 'fallback-3',
        name: 'BAAN',
        logo_url: '/baan.png',
        is_active: true,
        created_at: new Date().toISOString(),
      },
    ]
  }

  return data as Client[]
}
