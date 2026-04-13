import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, MessageSquare } from 'lucide-react'

export default function Dashboard() {
  const [clientsCount, setClientsCount] = useState(0)
  const [messagesCount, setMessagesCount] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const { count: clients } = await supabase
        .from('clients')
        .select('*', { count: 'exact', head: true })

      const { count: messages } = await supabase
        .from('contact_messages')
        .select('*', { count: 'exact', head: true })

      setClientsCount(clients || 0)
      setMessagesCount(messages || 0)
    }
    fetchData()
  }, [])

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Clientes Cadastrados</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clientsCount}</div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Mensagens Recebidas</CardTitle>
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{messagesCount}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
