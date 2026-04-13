import { Outlet, Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, LogOut } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'

export function AdminLayout() {
  const { signOut } = useAuth()
  const location = useLocation()

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar Desktop */}
      <aside className="w-64 bg-background border-r flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b">
          <span className="font-bold text-lg">Admin Panel</span>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-2 px-4">
          <Link
            to="/admin"
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              location.pathname === '/admin'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            to="/admin/clients"
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              location.pathname === '/admin/clients'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            <Users className="h-5 w-5" />
            Clientes
          </Link>
        </nav>
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={signOut}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen max-w-full overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b bg-background">
          <span className="font-bold">Admin Panel</span>
          <Button variant="ghost" size="icon" onClick={signOut}>
            <LogOut className="h-5 w-5 text-red-500" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex gap-2 p-4 bg-background border-b overflow-x-auto">
          <Link
            to="/admin"
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              location.pathname === '/admin'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/clients"
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              location.pathname === '/admin/clients'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            Clientes
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
