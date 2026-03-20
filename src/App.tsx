import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import Index from '@/pages/Index'
import NotFound from '@/pages/NotFound'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
      <Sonner />
    </Router>
  )
}

export default App
