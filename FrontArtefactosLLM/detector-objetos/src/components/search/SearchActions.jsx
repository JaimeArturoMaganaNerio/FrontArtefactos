import Button from '../ui/Button'

/**
 * Botones de la tarjeta:
 *  - Buscar: deshabilitado hasta elegir un tipo; muestra "Buscando..." mientras carga
 *  - Borrar: aparece solo cuando hay objetos encontrados y listados
 */
export default function SearchActions({ onSearch, onClear, canSearch, isLoading, showClear }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button onClick={onSearch} disabled={!canSearch} loading={isLoading}>
        Buscar
      </Button>
      {showClear && (
        <Button variant="dark" onClick={onClear}>
          Borrar
        </Button>
      )}
    </div>
  )
}
