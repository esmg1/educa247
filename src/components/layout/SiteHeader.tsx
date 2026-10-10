import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { NavLink } from '../../data/landingContent'
import { BrandLogo } from '../ui/BrandLogo'

export function SiteHeader({ navLinks }: { navLinks: NavLink[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])
  return (
    <>
      <div className="utility-bar">
        <div className="site-container">
          <span>Asesoría y formación para personas y empresas · Ecuador</span>
          <a href="https://wa.me/593993432822" target="_blank" rel="noreferrer">
            Hablemos por WhatsApp <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container header-inner">
          <a
            href="#inicio"
            aria-label="EDUCA 24/7 — Inicio"
            onClick={() => setIsMenuOpen(false)}
          >
            <BrandLogo />
          </a>
          <nav
            aria-label="Principal"
            data-testid="desktop-nav"
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="menu-toggle"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Menú móvil"
            data-testid="mobile-panel"
            className="mobile-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  )
}
