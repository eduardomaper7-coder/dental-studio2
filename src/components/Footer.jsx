import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          
          {/* Info */}
          <div>
            <div className="mb-6 leading-tight">
              <span className="block text-2xl font-extrabold text-white">
                CLÍNICA DENTAL
              </span>
              <span className="block text-lg font-semibold text-blue-600">
                Marcos Martínez
              </span>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-white/90">
              Clínica dental en Carabanchel, Madrid. Especialistas en
              tratamientos personalizados para cuidar tu salud bucodental y
              mejorar tu sonrisa con atención cercana y profesional.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-2xl text-blue-600 transition hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-2xl text-blue-600 transition hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-2xl text-blue-600 transition hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-left md:text-right">
            <h3 className="text-3xl font-bold text-blue-600">
              Contacto
            </h3>

            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>
                C. del Camino Viejo de Leganés, 115
                <br />
                Carabanchel, 28019 Madrid
              </p>

              <p>
                <a
                  href="tel:915608109"
                  className="whitespace-nowrap font-bold text-white transition hover:text-blue-600"
                >
                  915 60 81 09
                </a>
              </p>

              <p>
                <a
                  href="https://wa.me/34662671383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 transition hover:text-white"
                >
                  Pedir cita por WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg text-white/90">
            ¿Necesitas pedir cita o más información?
          </p>

          <Link
            to="/#contacto"
            className="rounded-xl bg-blue-600 px-8 py-3 text-lg font-bold text-white transition hover:bg-blue-700"
          >
            Solicitar cita
          </Link>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-white/15 pt-8 text-center">
          <p className="text-base text-white/80">
            © 2026 Clínica Dental Marcos Martínez. Todos los derechos reservados.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-blue-600">
            <Link to="/legal" className="transition hover:text-white">
              Aviso legal · Privacidad · Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer