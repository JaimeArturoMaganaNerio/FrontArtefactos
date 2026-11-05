import { MOCK_DETECTIONS } from './mock/detections'

/**
 * CAPA DE SERVICIOS
 * Es el único archivo que sabe de dónde vienen los datos.
 * Los componentes nunca llaman al backend directamente: siempre pasan por aquí.
 *
 * Cuando el backend esté listo, solo hay que cambiar el cuerpo de
 * getDetectedObjects(). El resto de la página no se toca.
 */

const SIMULATED_DELAY_MS = 1500

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Devuelve los objetos detectados por el LLM para un tipo dado.
 * @param {string} type - uno de los "value" de OBJECT_TYPES
 * @returns {Promise<Array<{id: string, type: string, name: string, detectedAt: string}>>}
 */
export async function getDetectedObjects(type) {
  // --- Versión real (para el encargado del backend) ---
  // const response = await fetch(`${import.meta.env.VITE_API_URL}/objetos?tipo=${type}`)
  // if (!response.ok) throw new Error('No se pudo consultar el servidor')
  // return response.json()

  // --- Versión simulada (temporal) ---
  await wait(SIMULATED_DELAY_MS)
  return MOCK_DETECTIONS.filter((object) => object.type === type)
}
