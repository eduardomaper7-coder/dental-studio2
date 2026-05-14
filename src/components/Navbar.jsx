const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-blue-700 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-1 text-center text-[11px] sm:text-sm">
          <a
            href="https://www.google.com/maps/search/?api=1&query=C.+del+Camino+Viejo+de+Legan%C3%A9s+115+Carabanchel+28019+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:underline"
          >
            📍 C. del Camino Viejo de Leganés, 115, Carabanchel, 28019 Madrid
          </a>
        </div>
      </div>

      <header className="fixed left-0 top-[24px] z-40 w-full border-b border-black/10 bg-white/95 backdrop-blur-md sm:top-[28px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#inicio" className="flex min-w-0 items-center">
            <div className="max-w-[220px] leading-tight">
              <span className="block text-xs font-extrabold text-blue-700 md:hidden">
                Clínica Dental
              </span>
              <span className="block text-[11px] font-semibold text-blue-600 md:hidden">
                Marcos Martínez
              </span>

              <span className="hidden text-sm font-extrabold text-blue-700 md:block md:text-xl">
                CLÍNICA DENTAL
              </span>
              <span className="hidden text-sm font-semibold text-blue-600 md:block">
                Marcos Martínez
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="/#inicio"
              className="text-base font-semibold text-black hover:text-blue-600"
            >
              Inicio
            </a>

            <a
              href="/#servicios"
              className="text-base font-semibold text-black hover:text-blue-600"
            >
              Tratamientos
            </a>

            <a
              href="/#tarifas"
              className="text-base font-semibold text-black hover:text-blue-600"
            >
              Precios
            </a>

            <a
              href="/#contacto"
              className="text-base font-semibold text-black hover:text-blue-600"
            >
              Contacto
            </a>
          </nav>

          <a
            href="tel:915608109"
            className="whitespace-nowrap rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-blue-700 md:px-5 md:py-2.5 md:text-sm"
          >
            📞 <span className="hidden md:inline">Llama al</span> 915 60 81 09
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar