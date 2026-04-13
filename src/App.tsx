import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import Index from '@/pages/Index'
import NotFound from '@/pages/NotFound'
import Login from '@/pages/Login'
import Dashboard from '@/pages/admin/Dashboard'
import ClientsAdmin from '@/pages/admin/Clients'
import { AdminLayout } from '@/components/AdminLayout'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { AuthProvider } from '@/hooks/use-auth'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="admin">
              <Route path="login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="clients" element={<ClientsAdmin />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Toaster />
        <Sonner />
      </Router>
    </AuthProvider>
  )
}

export default App
