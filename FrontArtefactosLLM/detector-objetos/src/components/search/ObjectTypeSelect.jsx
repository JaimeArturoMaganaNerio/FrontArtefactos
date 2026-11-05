import { useId } from 'react'
import Select from '../ui/Select'
import { OBJECT_TYPES } from '../../constants/objectTypes'

/**
 * Etiqueta "Seleccione el tipo de objeto" + dropdown con los tipos.
 * Une el Select genérico con los tipos de objeto de este proyecto.
 */
export default function ObjectTypeSelect({ value, onChange, disabled }) {
  const labelId = useId()

  return (
    <div className="flex flex-col gap-2">
      <span id={labelId} className="text-sm font-medium text-gray-900">
        Seleccione el tipo de objeto
      </span>
      <Select
        options={OBJECT_TYPES}
        value={value}
        onChange={onChange}
        disabled={disabled}
        labelId={labelId}
      />
    </div>
  )
}
