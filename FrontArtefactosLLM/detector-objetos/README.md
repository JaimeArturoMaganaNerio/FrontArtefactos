# Buscador de objetos

Interfaz web en **React + Tailwind CSS v4** que muestra los objetos detectados por el LLM del artefacto.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Arquitectura por capas

Cada capa tiene una sola responsabilidad. Una capa solo usa a las que están debajo de ella:

```
Página        pages/ObjectSearchPage.jsx      → une las piezas
   ↓
Componentes   components/search/*             → piezas propias del buscador
              components/ui/*                 → piezas genéricas reutilizables
   ↓
Lógica        hooks/useObjectSearch.js        → estado de la búsqueda
   ↓
Servicios     services/objectService.js       → de dónde vienen los datos
   ↓
Config        constants/*  ·  utils/*         → valores fijos y funciones de ayuda
```

```
src/
├── App.jsx
├── main.jsx
├── index.css                       # Tailwind + colores del diseño (@theme)
├── pages/
│   └── ObjectSearchPage.jsx        # Página principal
├── components/
│   ├── ui/                         # Genéricos (no saben nada de "objetos")
│   │   ├── Button.jsx
│   │   ├── Select.jsx
│   │   ├── Card.jsx
│   │   └── Icons.jsx
│   └── search/                     # Específicos del buscador
│       ├── ObjectTypeSelect.jsx    # Etiqueta + dropdown de tipos
│       ├── SearchResult.jsx        # Mensaje de éxito / no encontrado / error
│       ├── FoundObjectsList.jsx    # Lista de objetos encontrados
│       └── SearchActions.jsx       # Botones Buscar y Borrar
├── hooks/
│   └── useObjectSearch.js          # Estado: tipo elegido, status, resultados
├── services/
│   ├── objectService.js            # Llamada al backend (hoy simulada)
│   └── mock/detections.js          # Datos de ejemplo
├── constants/
│   ├── objectTypes.js              # Llaves, Botellas, Dinero, Anillos
│   └── searchStatus.js             # idle, loading, success, not_found, error
└── utils/
    └── formatDate.js               # Formato de fecha y hora
```

## ¿Dónde toco si quiero...?

| Quiero...                                   | Archivo                                  |
|---------------------------------------------|------------------------------------------|
| Cambiar un color de toda la página          | `src/index.css` (bloque `@theme`)        |
| Agregar un tipo de objeto                   | `src/constants/objectTypes.js`           |
| Cambiar el texto de éxito o de error        | `src/components/search/SearchResult.jsx` |
| Mostrar más datos de cada objeto encontrado | `src/components/search/FoundObjectsList.jsx` |
| Cambiar el estilo de los botones            | `src/components/ui/Button.jsx`           |
| Cambiar el estilo del dropdown              | `src/components/ui/Select.jsx`           |
| Cambiar qué pasa al buscar o al borrar      | `src/hooks/useObjectSearch.js`           |
| Conectar el backend real                    | `src/services/objectService.js`          |

## Para el encargado del backend

La página espera que `getDetectedObjects(tipo)` devuelva una lista con esta forma:

```json
[
  { "id": "1", "type": "llaves", "name": "Llavero rojo", "detectedAt": "2026-11-04T18:42:00" }
]
```

- Lista vacía → la página muestra "No se encontró el objeto".
- Si la petición falla → la página muestra un mensaje de error.

Dentro de `services/objectService.js` ya está comentado un ejemplo con `fetch`. La URL se define en un archivo `.env`:

```
VITE_API_URL=http://localhost:3000
```

## Datos de prueba

Mientras no haya backend, `services/mock/detections.js` simula las detecciones:

- **Llaves, Botellas y Anillos** → muestran el mensaje de éxito y la lista.
- **Dinero** → no tiene registros, así que muestra "No se encontró el objeto".
