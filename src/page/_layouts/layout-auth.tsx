import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import averiguacao360 from '../../assets/banner/logo-averiguacao360.svg'
import cargasafe from '../../assets/banner/logo-cargasafe.svg'
import cargoguardian from '../../assets/banner/logo-cargoguardian.svg'
import clientbase from '../../assets/banner/logo-clientbase.svg'
import maplink from '../../assets/banner/logo-maplink.svg'
import safelogix from '../../assets/banner/logo-safelogix.svg'
import searchpro from '../../assets/banner/logo-seachpro.svg'

interface Banner {
  image: string
  title: string
  description: string
}

const banners: Banner[] = [
  {
    image: averiguacao360,
    title: 'Averiguação360',
    description: 'Relatórios personalizados para decisões eficientes.',
  },
  {
    image: cargasafe,
    title: 'CargaSafe',
    description:
      'Transformando dados em rotas seguras. Sua aliada contra roubos de carga.',
  },
  {
    image: cargoguardian,
    title: 'CargoGuardian',
    description:
      'Inteligência artificial a serviço da recuperação eficiente de cargas.',
  },
  {
    image: clientbase,
    title: 'ClientBase',
    description: 'Informações vitais sobre seus clientes.',
  },
  {
    image: maplink,
    title: 'MapLink',
    description:
      'A integração que mapeia o caminho para decisões estratégicas.',
  },
  {
    image: safelogix,
    title: 'SafeLogix',
    description: 'Cadastro de motorista com históricos detalhados.',
  },
  {
    image: searchpro,
    title: 'SearchPro',
    description: 'O seu atalho para informações inteligentes e rápidas.',
  },
]

export function AuthLayout() {
  const [currentBanner, setCurrentBanner] = useState<number>(0)

  const goToNextBanner = () => {
    setCurrentBanner((prevBanner) =>
      prevBanner === banners.length - 1 ? 0 : prevBanner + 1,
    )
  }

  useEffect(() => {
    const interval = setInterval(goToNextBanner, 5000) // 5000ms = 5 segundos

    return () => {
      clearInterval(interval) // Limpa o intervalo quando o componente é desmontado
    }
  }, [currentBanner])

  return (
    <div className="grid min-h-screen grid-cols-2">
      <section className=" flex justify-center border-r border-foreground/5 bg-white bg-hero-pattern bg-cover p-10 ">
        <div className=" flex h-full flex-col justify-center gap-4   py-4 text-center 2xl:max-w-[550px]">
          <h1 className="text-3xl text-primary 2xl:text-4xl">
            Desvende a eficiência com nossa plataforma{' '}
            <span className="font-semibold text-blue-950 ">Inteligente!</span>
          </h1>

          <div className=" flex flex-col gap-4">
            <img
              src={banners[currentBanner].image}
              alt={banners[currentBanner].title}
              className="mx-auto h-80 w-80"
            />
            <h2 className="text-2xl font-bold text-blue-950 2xl:text-3xl">
              {banners[currentBanner].title}
            </h2>
            <p className="text-sm text-muted-foreground 2xl:text-base">
              {banners[currentBanner].description}
            </p>
          </div>
          {/* Botões dinâmicos */}
          <div className="flex justify-center ">
            {banners.map((banner, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`mx-2 h-3 w-3 rounded-full ${
                  index === currentBanner
                    ? 'bg-primary/50'
                    : 'bg-slate-100 hover:bg-primary/70'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
      <main className="relative flex items-center justify-center bg-linear-color-form-login">
        <Outlet />
        <div className="absolute bottom-0 left-0 h-1/2 w-full bg-footer-texture bg-cover" />
      </main>
    </div>
  )
}
