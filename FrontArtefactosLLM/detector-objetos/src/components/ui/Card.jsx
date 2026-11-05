/**
 * Tarjeta con encabezado negro, como "Buscador de objetos" en el diseño.
 * Es genérica: sirve para cualquier otra sección futura de la página.
 */
export default function Card({ title, children, className = '' }) {
  return (
    <section className={`w-full max-w-md rounded-xl bg-white shadow-lg ${className}`}>
      <header className="rounded-t-xl bg-black px-5 py-3">
        <h1 className="text-sm font-bold text-white">{title}</h1>
      </header>
      <div className="px-6 py-6 sm:px-9">{children}</div>
    </section>
  )
}
