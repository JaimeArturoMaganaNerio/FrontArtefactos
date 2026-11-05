import { CheckIcon, XCircleIcon } from '../ui/Icons'
import { SEARCH_STATUS } from '../../constants/searchStatus'

/**
 * Mensaje según el resultado de la búsqueda:
 *  - SUCCESS   -> check verde "Su objeto fue encontrado"
 *  - NOT_FOUND -> X roja "No se encontró el objeto"
 *  - ERROR     -> X roja con mensaje de error de conexión
 *
 * Para cambiar textos, colores o iconos de un estado, edita solo MESSAGES.
 */
const MESSAGES = {
  [SEARCH_STATUS.SUCCESS]: {
    text: 'Su objeto fue encontrado',
    Icon: CheckIcon,
    color: 'text-success',
  },
  [SEARCH_STATUS.NOT_FOUND]: {
    text: 'No se encontró el objeto',
    Icon: XCircleIcon,
    color: 'text-error',
  },
  [SEARCH_STATUS.ERROR]: {
    text: 'Ocurrió un error al buscar. Intente de nuevo.',
    Icon: XCircleIcon,
    color: 'text-error',
  },
}

export default function SearchResult({ status }) {
  const message = MESSAGES[status]

  // aria-live hace que los lectores de pantalla anuncien el resultado
  return (
    <div aria-live="polite" className="flex min-h-12 items-center justify-center">
      {message && (
        <p className={`flex items-center gap-2 text-sm font-medium ${message.color}`}>
          <message.Icon className="size-6 shrink-0" />
          {message.text}
        </p>
      )}
    </div>
  )
}
