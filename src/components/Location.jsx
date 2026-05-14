const Location = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        
        {/* Título */}
        <h2 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
          Ven a visitarnos
        </h2>

        {/* Dirección */}
        <p className="mt-6 text-lg font-medium text-neutral-700">
          C. del Camino Viejo de Leganés, 115, Carabanchel, 28019 Madrid
        </p>

        {/* Mapa */}
        <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(37,99,235,0.1)]">
          <iframe
            src="https://www.google.com/maps?q=C.%20del%20Camino%20Viejo%20de%20Legan%C3%A9s%20115%2C%20Carabanchel%2C%2028019%20Madrid&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Clínica Dental Marcos Martínez"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Location