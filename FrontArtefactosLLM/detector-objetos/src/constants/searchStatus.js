/**
 * Estados posibles de una búsqueda.
 * Se usan en el hook y en los componentes para decidir qué mostrar.
 */
export const SEARCH_STATUS = {
  IDLE: 'idle',           // Aún no se ha buscado
  LOADING: 'loading',     // Buscando...
  SUCCESS: 'success',     // Se encontraron objetos
  NOT_FOUND: 'not_found', // La búsqueda terminó sin resultados
  ERROR: 'error',         // Falló la comunicación con el servidor
}
