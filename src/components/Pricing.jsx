const plans = [
  {
    title: 'Empaste dental',
    price: '80€',
    subtitle: 'Tratamiento conservador para reparar caries o pequeñas fracturas.',
    badge: 'Precio orientativo',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Endodoncia',
    price: '220€',
    subtitle: 'Tratamiento para salvar dientes dañados o con infección.',
    badge: 'Desde',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Funda de porcelana',
    price: '270€',
    subtitle: 'Solución estética y resistente para proteger y mejorar el diente.',
    badge: 'Desde',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Funda de zirconio',
    price: '420€',
    subtitle: 'Opción funcional y estética adaptada a las necesidades de cada paciente.',
    badge: 'Desde',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
]

const conditions = [
  'Estos son solo algunos de nuestros precios más habituales.',
  'Cada tratamiento requiere una valoración previa personalizada.',
  'El presupuesto final puede variar según las necesidades de cada paciente.',
  'Antes de comenzar, te explicaremos el tratamiento, las opciones disponibles y el precio final.',
  'Consulta con Clínica Dental Marcos Martínez para conocer más tratamientos y tarifas.',
]

const Pricing = () => {
  return (
    <section id="tarifas" className="scroll-mt-28 bg-[#f4f8ff] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-700 px-5 py-2 text-sm font-bold text-white">
            Tarifas orientativas
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-blue-700 sm:text-4xl">
            Algunos de nuestros precios
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            En Clínica Dental Marcos Martínez queremos que tengas una referencia
            clara antes de venir. Estos precios son orientativos y pueden variar
            según cada caso.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <article
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white text-center shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,99,235,0.12)]"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={plan.image}
                  alt={`${plan.title} en Clínica Dental Marcos Martínez`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="relative px-6 py-8">
                {plan.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    {plan.badge}
                  </span>
                )}

                <h3 className="mt-6 text-xl font-extrabold text-blue-700">
                  {plan.title}
                </h3>

                <p className="mt-5 text-5xl font-extrabold tracking-tight text-blue-700">
                  {plan.price}
                </p>

                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {plan.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white px-8 py-8 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
          <h3 className="text-center text-2xl font-extrabold text-blue-700">
            Información importante
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                  ✓
                </span>

                <p className="text-base leading-7 text-neutral-700">
                  {condition}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/tratamientos"
              className="inline-flex rounded-xl bg-blue-700 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-blue-800"
            >
              Consultar más precios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing