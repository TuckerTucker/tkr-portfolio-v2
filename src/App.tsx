import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Home from '@/pages/Home'
import Docusearch from '@/pages/Docusearch'
import ContextKit from '@/pages/ContextKit'
import Kanban from '@/pages/Kanban'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docusearch" element={<Docusearch />} />
              <Route path="/context-kit" element={<ContextKit />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
