import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Home from '@/pages/Home'
import Docusearch from '@/pages/Docusearch'
import ContextKit from '@/pages/ContextKit'
import Kanban from '@/pages/Kanban'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <div className="min-h-screen bg-background font-sans antialiased">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docusearch" element={<Docusearch />} />
              <Route path="/context-kit" element={<ContextKit />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
