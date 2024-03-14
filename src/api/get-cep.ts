import axios from 'axios'

const api = axios.create({
  baseURL: 'https://brasilapi.com.br/api/cep/v2/',
})

interface CEPData {
  cep: string
}

export type CEPDataResponse = {
  cep: string
  state: string
  number?: string
  city: string
  neighborhood: string
  street: string
}

// Com hífen
export const getCEPData = async ({ cep }: CEPData) => {
  try {
    const response = await api.get(`${cep}`)
    const data = response.data as CEPDataResponse
    data.cep = data.cep.slice(0, 5) + '-' + data.cep.slice(5)
    return data
  } catch (error) {
    console.error(error)
  }
}
