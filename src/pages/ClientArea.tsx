import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { supabase } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Loader2, LogOut, User as UserIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ClientArea() {
  const { user, signOut } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()

        if (error) throw error

        if (data) {
          setProfile({
            name: data.name || '',
            email: data.email || user.email || '',
            phone: data.phone || '',
            address: data.address || '',
          })
        }
      } catch (error: any) {
        console.error('Error fetching profile:', error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setIsSaving(true)
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          name: profile.name,
          phone: profile.phone,
          address: profile.address,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id)

      if (error) throw error

      toast({
        title: 'Perfil atualizado',
        description: 'Seus dados foram salvos com sucesso.',
      })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Erro ao salvar',
        description: error.message,
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="container max-w-5xl py-12 animate-fade-in-up">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-72 flex-shrink-0 space-y-4">
          <Card className="border-muted shadow-sm">
            <CardContent className="p-6 flex flex-col items-center space-y-4">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <UserIcon className="w-12 h-12 text-primary" />
              </div>
              <div className="text-center w-full">
                <h3 className="font-semibold text-lg truncate">{profile.name || 'Cliente'}</h3>
                <p className="text-sm text-muted-foreground truncate">{profile.email}</p>
              </div>
              <div className="pt-4 w-full border-t">
                <Button variant="outline" className="w-full justify-center" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sair da conta
                </Button>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Área do Cliente</h1>
            <p className="text-muted-foreground">
              Gerencie seus dados pessoais e informações de contato.
            </p>
          </div>

          <Card className="border-muted shadow-sm">
            <CardHeader>
              <CardTitle>Meu Perfil</CardTitle>
              <CardDescription>
                Atualize suas informações para futuros pedidos em nosso e-commerce.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" name="name" value={profile.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail (apenas leitura)</Label>
                    <Input
                      id="email"
                      name="email"
                      value={profile.email}
                      disabled
                      className="bg-muted/50 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" name="phone" value={profile.phone} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço completo</Label>
                  <Textarea
                    id="address"
                    name="address"
                    rows={4}
                    placeholder="Rua, número, complemento, bairro, cidade - UF, CEP"
                    value={profile.address}
                    onChange={handleChange}
                    className="resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" disabled={isSaving} className="w-full sm:w-auto">
                    {isSaving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                    Salvar Alterações
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
