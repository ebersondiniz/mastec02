import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { Client } from '@/services/clients'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Plus, Trash2, Edit2, Loader2, Image as ImageIcon } from 'lucide-react'
import { toast } from 'sonner'

export default function ClientsAdmin() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [saving, setSaving] = useState(false)

  // Form state
  const [editingId, setEditingId] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoUrl, setLogoUrl] = useState('')

  useEffect(() => {
    fetchClients()
  }, [])

  async function fetchClients() {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      toast.error('Erro ao buscar clientes')
    } else {
      setClients(data || [])
    }
    setLoading(false)
  }

  const resetForm = () => {
    setEditingId(null)
    setName('')
    setIsActive(true)
    setLogoFile(null)
    setLogoUrl('')
  }

  const handleOpenAdd = () => {
    resetForm()
    setIsDialogOpen(true)
  }

  const handleOpenEdit = (client: Client) => {
    setEditingId(client.id)
    setName(client.name)
    setIsActive(client.is_active)
    setLogoUrl(client.logo_url)
    setLogoFile(null)
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este cliente?')) return

    const { error } = await supabase.from('clients').delete().eq('id', id)
    if (error) {
      toast.error('Erro ao excluir cliente')
    } else {
      toast.success('Cliente excluído com sucesso')
      fetchClients()
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || (!logoFile && !logoUrl)) {
      toast.error('Preencha os campos obrigatórios')
      return
    }

    setSaving(true)
    let finalLogoUrl = logoUrl

    if (logoFile) {
      const fileExt = logoFile.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('logos')
        .upload(fileName, logoFile, {
          cacheControl: '3600',
          upsert: false,
        })

      if (uploadError) {
        toast.error('Erro ao fazer upload da logo')
        setSaving(false)
        return
      }

      const { data } = supabase.storage.from('logos').getPublicUrl(fileName)
      finalLogoUrl = data.publicUrl
    }

    if (editingId) {
      const { error } = await supabase
        .from('clients')
        .update({ name, is_active: isActive, logo_url: finalLogoUrl })
        .eq('id', editingId)

      if (error) toast.error('Erro ao atualizar cliente')
      else toast.success('Cliente atualizado')
    } else {
      const { error } = await supabase
        .from('clients')
        .insert({ name, is_active: isActive, logo_url: finalLogoUrl })

      if (error) toast.error('Erro ao criar cliente')
      else toast.success('Cliente criado')
    }

    setSaving(false)
    setIsDialogOpen(false)
    fetchClients()
  }

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Gestão de Clientes</h1>
        <Button onClick={handleOpenAdd}>
          <Plus className="w-4 h-4 mr-2" /> Novo Cliente
        </Button>
      </div>

      <div className="bg-card rounded-md border shadow-sm overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">Logo</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-10">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
                </TableCell>
              </TableRow>
            ) : clients.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-10 text-muted-foreground">
                  Nenhum cliente cadastrado.
                </TableCell>
              </TableRow>
            ) : (
              clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>
                    {client.logo_url ? (
                      <img
                        src={client.logo_url}
                        alt={client.name}
                        className="h-10 w-full max-w-[80px] object-contain bg-white rounded border p-1"
                      />
                    ) : (
                      <div className="h-10 w-full max-w-[80px] bg-muted flex items-center justify-center rounded border">
                        <ImageIcon className="w-4 h-4 text-muted-foreground" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${client.is_active ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}
                    >
                      {client.is_active ? 'Ativo' : 'Inativo'}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleOpenEdit(client)}>
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50"
                      onClick={() => handleDelete(client.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingId ? 'Editar Cliente' : 'Novo Cliente'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome do Cliente</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Empresa S/A"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="logo">Logo (Imagem)</Label>
              <Input
                id="logo"
                type="file"
                accept="image/*"
                onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
                required={!editingId && !logoUrl}
              />
              {logoUrl && !logoFile && (
                <div className="mt-2">
                  <p className="text-xs text-muted-foreground mb-1">Logo atual:</p>
                  <img
                    src={logoUrl}
                    alt="Preview"
                    className="h-12 w-auto object-contain bg-white rounded border p-1"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Switch id="active" checked={isActive} onCheckedChange={setIsActive} />
              <Label htmlFor="active">Ativo (Exibir no site)</Label>
            </div>

            <div className="flex justify-end pt-4 gap-2">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Plus className="w-4 h-4 mr-2" />
                )}
                Salvar
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
