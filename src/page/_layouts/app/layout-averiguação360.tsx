import { Link, Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function Averiguacao360Layout() {
  return (
    <div className="grid min-h-screen bg-hero-pattern bg-contain antialiased">
      <Header />

      <main className="mx-auto mb-10 mt-14 w-full max-w-[1600px] flex-1 overflow-y-auto px-4 text-blue-950">
        <Outlet />
      </main>

      <footer className="fixed bottom-0 z-10 mt-8 w-full bg-white px-4 ">
        <div className="flex items-center justify-between text-xs text-[#042F6C] opacity-50">
          <div className="mb-2 flex gap-1">
            <strong>SmartHub</strong>
            <span className="mx-1">•</span>
            <Link
              to="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] transition-colors duration-300 hover:text-[#10bed5]"
            >
              © 2024 GPS Pamcary
            </Link>
          </div>

          <div>
            <Link
              to="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] transition-colors duration-300 hover:text-[#10bed5]"
            >
              Sobre
            </Link>
            <span className="mx-1">•</span>
            <Link
              to="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] transition-colors duration-300 hover:text-[#10bed5]"
            >
              Contato
            </Link>
            <span className="mx-1">•</span>
            <Link
              to="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] transition-colors duration-300 hover:text-[#10bed5]"
            >
              Termos de uso
            </Link>
            <span className="mx-1">•</span>
            <Link
              to="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] transition-colors duration-300 hover:text-[#10bed5]"
            >
              Política de privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
