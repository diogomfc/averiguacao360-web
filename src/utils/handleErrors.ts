// handleErrors.ts
import { AxiosError } from 'axios'

export interface ErrorMessage {
  status?: string
  input?: string
  message: string
}

export function handleAxiosError(error: unknown) {
  let errorObject: ErrorMessage = {
    status: '',
    input: '',
    message: '',
  }

  if (error instanceof AxiosError) {
    const data = error.response?.data
    if (typeof data === 'object' && 'message' in data) {
      errorObject = data as ErrorMessage
    } else {
      errorObject.message = error.message
    }
  } else if (error instanceof Error) {
    errorObject.message = error.message
  }
  return errorObject
}
