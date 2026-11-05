import Card from '../components/ui/Card'
import ObjectTypeSelect from '../components/search/ObjectTypeSelect'
import SearchResult from '../components/search/SearchResult'
import FoundObjectsList from '../components/search/FoundObjectsList'
import SearchActions from '../components/search/SearchActions'
import { useObjectSearch } from '../hooks/useObjectSearch'
import { SEARCH_STATUS } from '../constants/searchStatus'

/**
 * CAPA DE PÁGINA
 * Solo une las piezas: toma el estado del hook y se lo pasa a cada componente.
 * No tiene estilos complicados ni lógica propia.
 */
export default function ObjectSearchPage() {
  const { selectedType, status, results, isLoading, selectType, search, reset } = useObjectSearch()

  const hasResults = status === SEARCH_STATUS.SUCCESS

  return (
    <main className="flex min-h-screen items-start justify-center bg-page px-4 py-16 sm:items-center sm:py-8">
      <Card title="Buscador de objetos">
        <div className="flex flex-col gap-6">
          <ObjectTypeSelect value={selectedType} onChange={selectType} disabled={isLoading} />

          <SearchResult status={status} />

          {hasResults && <FoundObjectsList objects={results} />}

          <SearchActions
            onSearch={search}
            onClear={reset}
            canSearch={Boolean(selectedType)}
            isLoading={isLoading}
            showClear={hasResults}
          />
        </div>
      </Card>
    </main>
  )
}
