import { useState } from 'react'
import { getDetectedObjects } from '../services/objectService'
import { SEARCH_STATUS } from '../constants/searchStatus'

/**
 * CAPA DE LÓGICA
 * Maneja el estado de la búsqueda: qué tipo está seleccionado,
 * en qué estado va la búsqueda y qué objetos se encontraron.
 *
 * No dibuja nada: los componentes solo leen estos valores y llaman a estas funciones.
 */
export function useObjectSearch() {
  const [selectedType, setSelectedType] = useState(null)
  const [status, setStatus] = useState(SEARCH_STATUS.IDLE)
  const [results, setResults] = useState([])

  // Al cambiar de tipo se limpia el resultado anterior
  const selectType = (type) => {
    setSelectedType(type)
    setStatus(SEARCH_STATUS.IDLE)
    setResults([])
  }

  const search = async () => {
    if (!selectedType) return

    setStatus(SEARCH_STATUS.LOADING)
    try {
      const objects = await getDetectedObjects(selectedType)
      setResults(objects)
      setStatus(objects.length > 0 ? SEARCH_STATUS.SUCCESS : SEARCH_STATUS.NOT_FOUND)
    } catch {
      setResults([])
      setStatus(SEARCH_STATUS.ERROR)
    }
  }

  // Botón "Borrar": deja todo como al inicio
  const reset = () => {
    setSelectedType(null)
    setStatus(SEARCH_STATUS.IDLE)
    setResults([])
  }

  return {
    selectedType,
    status,
    results,
    isLoading: status === SEARCH_STATUS.LOADING,
    selectType,
    search,
    reset,
  }
}
