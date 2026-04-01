export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-800 text-cream-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl text-cream-50 font-bold">Kolhair</span>
            <p className="mt-3 text-sm leading-relaxed">
              El shampoo que cubre tus canas naturalmente mientras te bañas.
              Sin químicos, sin manchas, con total libertad.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cream-50 font-semibold mb-4 text-sm tracking-wider uppercase">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Cómo funciona", href: "#como-funciona" },
                { label: "Colores", href: "#colores" },
                { label: "Beneficios", href: "#beneficios" },
                { label: "Comprar", href: "#comprar" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream-50 font-semibold mb-4 text-sm tracking-wider uppercase">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hola@kolhair.com"
                  className="flex items-center gap-2 hover:text-cream-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  hola@kolhair.com
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="flex items-center gap-2 hover:text-cream-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                  Formulario de contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-600/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Kolhair. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream-50 transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-cream-50 transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
