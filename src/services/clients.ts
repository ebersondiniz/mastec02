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
    return []
  }

  return data as Client[]
}
