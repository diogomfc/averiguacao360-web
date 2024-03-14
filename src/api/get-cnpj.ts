import axios from 'axios'

const api = axios.create({
  baseURL: 'https://brasilapi.com.br/api/cnpj/v1/',
})

interface CNPJData {
  cnpj: string
}

export const getCNPJData = async ({ cnpj }: CNPJData) => {
  const cnpjNumber = cnpj.replace(/\D/g, '')
  try {
    const response = await api.get(`/${cnpjNumber}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
