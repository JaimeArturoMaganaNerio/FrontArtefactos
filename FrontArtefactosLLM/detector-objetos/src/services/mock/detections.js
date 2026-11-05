/**
 * Datos de ejemplo mientras el backend no está listo.
 * Simulan lo que el LLM habría detectado en el espacio escaneado.
 *
 * Forma de cada objeto (el backend debería devolver lo mismo):
 * {
 *   id: string,          // identificador único
 *   type: string,        // uno de los "value" de OBJECT_TYPES
 *   name: string,        // nombre o descripción del objeto detectado
 *   detectedAt: string,  // fecha y hora en formato ISO
 * }
 *
 * "dinero" no tiene registros a propósito, para probar el estado "No se encontró".
 */
export const MOCK_DETECTIONS = [
  { id: '1', type: 'llaves', name: 'Llavero rojo', detectedAt: '2026-11-04T18:42:00' },
  { id: '2', type: 'llaves', name: 'Llave pequeña', detectedAt: '2026-11-04T19:05:00' },
  { id: '3', type: 'botellas', name: 'Botella de agua', detectedAt: '2026-11-04T17:30:00' },
  { id: '4', type: 'anillos', name: 'Anillo plateado', detectedAt: '2026-11-04T20:10:00' },
]
