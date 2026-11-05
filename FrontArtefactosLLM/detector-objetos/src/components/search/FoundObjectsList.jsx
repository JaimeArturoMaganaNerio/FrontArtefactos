import { formatDateTime } from '../../utils/formatDate'

/**
 * Lista de los objetos que encontró el LLM.
 * Por ahora muestra el nombre y la hora de detección.
 * Para mostrar más datos (ubicación, imagen...), agrégalos en cada <li>.
 */
export default function FoundObjectsList({ objects }) {
  if (objects.length === 0) return null

  return (
    <div className="mt-2">
      <h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
        Objetos encontrados ({objects.length})
      </h2>
      <ul className="divide-y divide-gray-200 overflow-hidden rounded-md border border-gray-200">
        {objects.map((object) => (
          <li key={object.id} className="flex items-center justify-between gap-3 bg-gray-50 px-3 py-2">
            <span className="flex items-center gap-2 text-sm font-medium text-gray-800">
              <span className="size-2 shrink-0 rounded-full bg-success" aria-hidden="true" />
              {object.name}
            </span>
            <time dateTime={object.detectedAt} className="text-xs text-gray-500">
              {formatDateTime(object.detectedAt)}
            </time>
          </li>
        ))}
      </ul>
    </div>
  )
}
