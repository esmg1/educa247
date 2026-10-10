import type { ContactDetail, NavLink } from '../../data/landingContent'
import { BrandLogo } from '../ui/BrandLogo'
export function SiteFooter({
  navLinks,
  contactDetails,
}: {
  navLinks: NavLink[]
  contactDetails: ContactDetail[]
}) {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <a className="footer-brand" href="#inicio">
            <BrandLogo variant="full" />
          </a>
          <p>
            Asesoría y formación en seguridad y salud ocupacional, educación y
            sostenibilidad. Conocimiento que acompaña el desarrollo de personas
            y organizaciones.
          </p>
        </div>
        <div>
          <p className="footer-label">Explora</p>
          <nav aria-label="Pie de página">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="footer-label">Conecta con nosotros</p>
          {contactDetails.map((d) => (
            <a
              className="footer-contact"
              href={d.href}
              key={d.label}
              target="_blank"
              rel="noreferrer"
            >
              <span>{d.label}</span>
              {d.value}
            </a>
          ))}
        </div>
      </div>
      <div className="site-container footer-bottom">
        <p>
          © {new Date().getFullYear()} EDUCA 24/7. Todos los derechos
          reservados.
        </p>
        <span>Seguridad · Educación · Sostenibilidad</span>
      </div>
    </footer>
  )
}
