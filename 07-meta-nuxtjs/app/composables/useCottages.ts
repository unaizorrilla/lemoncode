// Tipos del cliente - representan lo que devuelve la API
export interface CountryCottageClient {
  id: string
  name: string
  address: string
  country: string
  price: number
  imageUrl: string
}

export function useCottages() {
  /**
   * Obtiene todos los cottages
   */
  const getAll = () => {
    return useFetch<CountryCottageClient[]>('/api/cottages')
  }

  /**
   * Obtiene un cottage por su ID
   */
  const getById = (id: string) => {
    return useFetch<CountryCottageClient>(`/api/cottages/${id}`)
  }

  return {
    getAll,
    getById
  }
}