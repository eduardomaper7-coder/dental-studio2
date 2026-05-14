const FeaturedBox = () => {
  return (
    <section className="bg-[#f4f8ff] py-16 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] bg-blue-50 min-h-[auto] lg:min-h-[520px]">
          
          {/* Imagen */}
          <div className="h-[260px] w-full lg:h-[520px] lg:w-[62%]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
              alt="Clínica Dental Marcos Martínez en Carabanchel"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Caja texto */}
          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2">
            <div className="m-4 rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(37,99,235,0.14)] sm:p-8 md:p-10">
              
              <h2 className="text-2xl font-extrabold leading-tight text-blue-700 sm:text-4xl">
                Cuida tu sonrisa con una atención{' '}
                <span className="text-blue-700">personalizada</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-lg">
                En Clínica Dental Marcos Martínez estudiamos tu caso de forma
                individual para ofrecerte tratamientos dentales adaptados a tus
                necesidades, cuidando tu salud bucodental y la estética de tu
                sonrisa en Carabanchel, Madrid.
              </p>

              <div className="mt-6">
                <a
                  href="tel:915608109"
                  className="inline-flex rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800 sm:px-7 sm:py-4 sm:text-base"
                >
                  Pide cita llamando al 915 60 81 09
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBox