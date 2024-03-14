import { Controls, Player } from '@lottiefiles/react-lottie-player'

import { Separator } from '@/components/ui/separator'

import animationData from '../../animation-lottie-files/animation-submitting-new-report.json'

export function NewReportSubmitting() {
  return (
    <>
      <div className="bg-white">
        <header>
          <div className="flex items-center justify-between gap-2 bg-blue-50 px-8 py-4">
            <div className="flex items-center gap-2">
              <img
                src="averiguacao360/icons/icon-relatorio.svg"
                width={20}
                height={20}
                alt=""
              />
              <h1 className="text-lg text-primary">
                Novo relatório de averiguação
              </h1>
            </div>
          </div>
          <Separator className="h-1 bg-gradient-to-r from-white via-blue-200 to-white" />
        </header>

        <main className="px-8 py-1">
          <div className="flex flex-col items-center ">
            <div className="">
              <Player
                autoplay
                loop
                src={animationData}
                style={{ height: '300px', width: '300px' }}
              >
                <Controls
                  visible={false}
                  buttons={['play', 'repeat', 'frame', 'debug']}
                />
              </Player>
            </div>

            <h1 className="relative bottom-8 animate-pulse text-xl font-bold opacity-70">
              Preparando o relatório, por favor aguarde…
            </h1>
          </div>
        </main>

        {/* Footer Buttons */}
        <footer className="flex flex-col ">
          <div className="flex h-[50px] items-center justify-between gap-2 bg-blue-50 px-8"></div>
        </footer>
      </div>
    </>
  )
}
