/**
 * Convierte una fecha ISO en texto legible, por ejemplo "4 nov 2026, 6:42 p. m."
 */
export function formatDateTime(isoDate) {
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return ''

  return new Intl.DateTimeFormat('es-SV', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(date)
}
