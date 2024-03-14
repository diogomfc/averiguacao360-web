import { AlertCircle, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface Step {
  label: string
  Component: React.ReactNode
  hasError: boolean
}

type StepsNewReportProps = {
  formsSteps: Step[]
}

export function NewReportDialog({ formsSteps }: StepsNewReportProps) {
  const [activeStep, setActiveStep] = useState(0)

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const isLastStep = activeStep === formsSteps.length - 1

  return (
    <div className="bg-white antialiased">
      <header className="flex items-center justify-between gap-2 bg-blue-50 px-8 py-4">
        <div className="flex items-center gap-2">
          <img
            src="averiguacao360/icons/icon-relatorio.svg"
            width={20}
            height={20}
            alt=""
          />
          <h1 className="text-lg text-blue-950">
            Novo relatório de averiguação
          </h1>
        </div>
      </header>
      <Separator className="h-1 bg-gradient-to-r from-white via-blue-200 to-white" />
      {/* Stepper */}
      <section className="flex cursor-pointer items-center justify-center gap-8 pb-2 pt-4">
        {formsSteps.map(({ label, hasError }, index) => (
          <div key={label} className="group flex items-center gap-4">
            {hasError ? (
              <AlertCircle
                onClick={() => setActiveStep(index)}
                className="mx-auto h-8 w-8  text-destructive"
              />
            ) : (
              <div
                onClick={() => setActiveStep(index)}
                className={`flex h-8 w-8  items-center justify-center rounded-full   focus:outline-none focus:ring-2  focus:ring-opacity-50 focus:ring-offset-2 ${
                  activeStep === index
                    ? 'border-primary bg-primary text-white hover:bg-opacity-70 hover:shadow-input-form-login'
                    : 'border-primary/25 bg-muted text-primary/25 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-input-form-login'
                } `}
              >
                <span>{index + 1}</span>
              </div>
            )}
            {hasError ? (
              <span className="text-sm text-destructive">{label}</span>
            ) : (
              <span
                className={`text-sm ${
                  activeStep === index
                    ? 'text-primary'
                    : 'text-primary/25 group-hover:text-primary'
                }`}
              >
                {label}
              </span>
            )}
          </div>
        ))}
      </section>
      {/* Component form inputs */}
      <main className="px-8 py-2">{formsSteps[activeStep].Component}</main>
      {/* Footer Buttons */}
      <footer className="flex flex-col ">
        <div className="flex h-[50px] items-center justify-end gap-2 bg-blue-50 px-8">
          <Button
            variant="ghost"
            disabled={activeStep === 0}
            onClick={handleBack}
            className="flex items-center gap-1 text-sm text-primary hover:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4 " />
            <span>Voltar</span>
          </Button>

          {isLastStep ? (
            <Button
              type="submit"
              key="enviar"
              className="rounded border px-2 py-1 text-white hover:bg-opacity-70 hover:shadow-input-form-login "
            >
              Gerar relatório
            </Button>
          ) : (
            <Button
              type="button"
              key="proximo"
              onClick={handleNext}
              className="rounded border px-2 py-1 text-white hover:bg-opacity-70 hover:shadow-input-form-login "
            >
              Continuar
            </Button>
          )}
        </div>
      </footer>
    </div>
  )
}
