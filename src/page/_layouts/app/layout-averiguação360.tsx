import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function Averiguacao360Layout() {
  return (
    <div className="grid-rows-app grid min-h-screen bg-hero-pattern bg-cover antialiased">
      <header className="fixed top-0 z-50 w-full">
        <Header />
      </header>
      <main className="mx-auto mb-10 mt-14 w-full max-w-[1600px] overflow-y-auto px-4">
        <Outlet />
      </main>

      <footer className="fixed bottom-0 z-10 mt-8 w-full bg-white px-4 ">
        <div className="flex items-center justify-between text-xs text-[#042F6C] opacity-50">
          <div className="mb-2 flex gap-1">
            <strong>SmartHub</strong>
            <span className="mx-1">•</span>
            <a
              href="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] transition-colors duration-300 hover:text-[#10bed5]"
            >
              © 2024 GPS Pamcary
            </a>
          </div>

          <div>
            <a
              href="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] transition-colors duration-300 hover:text-[#10bed5]"
            >
              Sobre
            </a>
            <span className="mx-1">•</span>
            <a
              href="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] transition-colors duration-300 hover:text-[#10bed5]"
            >
              Contato
            </a>
            <span className="mx-1">•</span>
            <a
              href="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] transition-colors duration-300 hover:text-[#10bed5]"
            >
              Termos de uso
            </a>
            <span className="mx-1">•</span>
            <a
              href="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] transition-colors duration-300 hover:text-[#10bed5]"
            >
              Política de privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
