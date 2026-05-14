import { FaStethoscope, FaMagic, FaAward, FaUsers } from 'react-icons/fa'

const features = [
  {
    icon: <FaStethoscope />,
    title: 'Valoración y diagnóstico personalizado',
    text: 'Analizamos tu salud bucodental en detalle para ofrecerte el tratamiento más adecuado en nuestra clínica dental de Carabanchel.',
  },
  {
    icon: <FaMagic />,
    title: 'Tecnología avanzada',
    text: 'Utilizamos equipos modernos para realizar tratamientos más precisos, cómodos y eficaces.',
  },
  {
    icon: <FaAward />,
    title: 'Profesionales cualificados',
    text: 'En Clínica Dental Marcos Martínez contamos con profesionales preparados para cuidar tu salud y estética dental.',
  },
  {
    icon: <FaUsers />,
    title: 'Atención cercana',
    text: 'Te acompañamos en todo el proceso para que te sientas cómodo y seguro en cada visita.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-[#f4f8ff] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
            ¿Cómo trabajamos?
          </h2>

          <p className="mt-4 text-neutral-600">
            En Clínica Dental Marcos Martínez cuidamos tu salud bucodental desde
            el primer momento
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xl text-white">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-blue-700">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork