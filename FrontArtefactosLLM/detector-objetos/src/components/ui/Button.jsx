/**
 * Botón reutilizable del Buscador de objetos.
 *
 * Variantes:
 *  - "primary": azul normal, se aclara con hover y se oscurece al presionar (Buscar)
 *  - "dark":    azul oscuro fijo (Borrar)
 *
 * Props:
 *  - variant:   "primary" | "dark"   (por defecto "primary")
 *  - loading:   muestra loadingText y bloquea el botón
 *  - loadingText: texto mientras carga (por defecto "Buscando...")
 *  - disabled, onClick, type, className y cualquier otra prop de <button>
 */
const VARIANTS = {
  primary: 'bg-primary hover:bg-primary-light active:bg-primary-dark',
  dark: 'bg-primary-dark hover:brightness-110 active:brightness-90',
}

export default function Button({
  children,
  variant = 'primary',
  loading = false,
  loadingText = 'Buscando...',
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) {
  const isBlocked = disabled || loading

  return (
    <button
      type={type}
      disabled={isBlocked}
      aria-busy={loading}
      className={[
        // Forma y texto (pastilla, texto blanco en negrita)
        'inline-flex min-w-28 items-center justify-center gap-2 rounded-full px-6 py-2.5',
        'text-sm font-bold text-white shadow-sm',
        'transition-colors duration-150 cursor-pointer',
        // Accesibilidad: anillo visible al navegar con teclado
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        // Color: en loading se queda en azul oscuro, como en el diseño
        loading ? 'bg-primary-dark' : VARIANTS[variant],
        // Deshabilitado (sin estar cargando)
        disabled && !loading ? 'opacity-50 pointer-events-none' : '',
        loading ? 'cursor-wait' : '',
        className,
      ].join(' ')}
      {...props}
    >
      {loading && (
        <span
          className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          aria-hidden="true"
        />
      )}
      {loading ? loadingText : children}
    </button>
  )
}
