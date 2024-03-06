import { useEffect, useState } from 'react'

import { Progress } from '@/components/ui/progress'

interface ProgressDemoProps {
  initialValue?: number
  finalValue?: number
  delay?: number
}

export function ProgressStatus({
  initialValue = 0,
  finalValue = 100,
  delay = 500,
}: ProgressDemoProps) {
  const [progress, setProgress] = useState<number>(initialValue)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(finalValue), delay)
    return () => clearTimeout(timer)
  }, [delay, finalValue])

  return <Progress value={progress} className="h-2 bg-blue-50" />
}
