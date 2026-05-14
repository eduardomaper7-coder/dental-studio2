import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const treatments = [
  {
    name: 'Implantes + corona',
    price: '1.500 €',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Endodoncia',
    price: '220 €',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Fundas porcelana',
    price: '240 €',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Fundas zirconio',
    price: '420 €',
    image: '/fundas-zirconio-usera.jpg',
  },
  {
    name: 'Frenillo de lengua',
    price: '400 €',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tratamiento encías',
    price: '400 €',
    image: '/tratamiento-encias-usera.jpg',
    note: 'Raspajes',
  },
  {
    name: 'Blanqueamiento',
    price: '350 €',
    image: '/blanqueamiento-dental-usera.jpg',
  },
  {
    name: 'Prótesis total',
    price: '950 €',
    image: '/protesis-total-usera.jpg',
  },
  {
    name: 'Limpieza',
    price: '70 €',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Empastes',
    price: '80 €',
    image: '/empastes-usera.jfif',
  },
  {
    name: 'Cirugía',
    price: '180 €',
    image: '/cirugia-dental-usera.jpg',
    note: 'Injerto incluido',
  },
  {
    name: 'Exodoncia',
    price: '70 €',
    image: '/exodoncia-usera.webp',
  },
]

const AllTreatments = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [location])

  return (
    <main className="bg-[#f4f8ff] pt-32 pb-20">
      <section className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-blue-700 px-5 py-2 text-sm font-bold text-white">
            Tratamientos personalizados
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-blue-700 sm:text-5xl">
            Tratamientos dentales y precios orientativos
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Consulta algunos de los tratamientos más habituales de Clínica
            Dental Marcos Martínez. Para recibir una valoración personalizada,
            contacta con nuestra clínica dental en Carabanchel.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(37,99,235,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(37,99,235,0.16)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={`${treatment.name} en Carabanchel - Clínica Dental Marcos Martínez`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-blue-700">
                      {treatment.name}
                    </h2>

                    {treatment.note && (
                      <p className="mt-1 text-sm font-semibold text-neutral-500">
                        {treatment.note}
                      </p>
                    )}
                  </div>

                  <p className="shrink-0 rounded-xl bg-blue-100 px-4 py-2 text-xl font-extrabold text-blue-700">
                    {treatment.price}
                  </p>
                </div>

                <a
                  href="/#contacto"
                  className="mt-6 inline-flex font-bold text-blue-700 transition hover:text-blue-900"
                >
                  Más información →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AllTreatments