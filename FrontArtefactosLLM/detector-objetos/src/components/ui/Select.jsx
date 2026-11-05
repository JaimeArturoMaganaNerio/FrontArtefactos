import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDownIcon } from './Icons'

/**
 * Dropdown personalizado, reutilizable para cualquier lista de opciones.
 *
 * Props:
 *  - options:     [{ value, label }]
 *  - value:       value de la opción seleccionada (o null)
 *  - onChange:    función que recibe el value elegido
 *  - placeholder: texto cuando no hay selección (por defecto "---")
 *  - disabled:    bloquea el dropdown
 *  - labelId:     id del <label> externo, para lectores de pantalla
 *
 * Se cierra al elegir una opción, al hacer clic afuera o con la tecla Escape.
 */
export default function Select({
  options,
  value,
  onChange,
  placeholder = '---',
  disabled = false,
  labelId,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const listId = useId()
  const valueId = useId()

  const selectedOption = options.find((option) => option.value === value)

  // Cerrar al hacer clic afuera o al presionar Escape
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSelect = (optionValue) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Botón que abre/cierra la lista */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-labelledby={[labelId, valueId].filter(Boolean).join(' ')}
        className={[
          'flex w-full items-center justify-between px-3 py-2 text-sm text-gray-600',
          'transition-colors cursor-pointer',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          isOpen
            ? 'rounded-t-md bg-select-open border-b border-gray-500/60'
            : 'rounded-md bg-select hover:bg-select-hover',
          disabled ? 'opacity-60 pointer-events-none' : '',
        ].join(' ')}
      >
        <span id={valueId} className={selectedOption ? 'text-gray-700' : 'text-gray-500'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDownIcon
          className={`size-4 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Lista de opciones */}
      {isOpen && (
        <ul
          id={listId}
          role="listbox"
          className="absolute inset-x-0 top-full z-10 overflow-hidden rounded-b-md bg-select shadow-md"
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className="border-b border-gray-400/60 last:border-b-0"
            >
              <button
                type="button"
                onClick={() => handleSelect(option.value)}
                className={[
                  'w-full px-3 py-2 text-left text-sm text-gray-600 cursor-pointer',
                  'hover:bg-select-hover focus-visible:bg-select-hover focus-visible:outline-none',
                  option.value === value ? 'font-medium text-gray-800' : '',
                ].join(' ')}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
