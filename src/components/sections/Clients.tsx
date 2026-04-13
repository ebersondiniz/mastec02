import { useEffect, useState } from 'react'
import { getClients, Client } from '@/services/clients'
import { Skeleton } from '@/components/ui/skeleton'

export function Clients() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    async function fetchClients() {
      const data = await getClients()
      if (mounted) {
        setClients(data)
        setLoading(false)
      }
    }

    fetchClients()

    return () => {
      mounted = false
    }
  }, [])

  if (!loading && clients.length === 0) {
    return null
  }

  return (
    <section id="clientes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
            Nossos Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas que confiam em nossa expertise e qualidade para a execução de seus projetos.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-20 w-32 rounded-md" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 md:gap-8 items-center justify-items-center">
            {clients.map((client) => (
              <div
                key={client.id}
                className="w-full max-w-[180px] h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer"
                title={client.name}
              >
                <img
                  src={client.logo_url}
                  alt={`Logo ${client.name}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
