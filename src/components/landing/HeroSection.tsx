import { ArrowRight, ShieldCheck, BookOpen, Leaf } from 'lucide-react'
import type { HeroBanner } from '../../data/landingContent'
import { Button } from '../ui/Button'

export function HeroSection({ banner }: { banner: HeroBanner }) {
  return (
    <section id="inicio" className="hero-section">
      <a href="#aula-virtual" className="featured-program">
        <div className="site-container featured-program__inner">
          <span className="featured-program__badge">Programa destacado</span>
          <strong>Igualdad Salarial</strong>
          <span className="featured-program__facts">
            40 horas · 4 módulos · En línea
          </span>
          <span className="featured-program__action">
            Conoce el programa <ArrowRight size={18} />
          </span>
        </div>
      </a>
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            {banner.eyebrow}
          </p>
          <h1>{banner.title}</h1>
          <p className="hero-description">{banner.description}</p>
          <div className="hero-actions">
            <Button href={banner.primaryCtaHref}>
              {banner.primaryCtaLabel}
              <ArrowRight size={18} />
            </Button>
            <a className="text-link" href={banner.secondaryCtaHref}>
              {banner.secondaryCtaLabel}
              <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-links">
            {banner.quickLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
                <ArrowRight size={14} />
              </a>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={banner.primaryImageSrc}
            alt={banner.primaryImageAlt}
            fetchPriority="high"
          />
          <div className="hero-caption">
            <ShieldCheck size={26} />
            <div>
              <span>{banner.supportCard.eyebrow}</span>
              <p>{banner.supportCard.title}</p>
            </div>
          </div>
          <div className="hero-image-label">
            EDUCA <span>24/7</span>
          </div>
        </div>
      </div>
      <div className="hero-pillars site-container">
        {[
          {
            icon: ShieldCheck,
            title: 'Seguridad y salud',
            copy: 'Prevención con criterio técnico.',
          },
          {
            icon: BookOpen,
            title: 'Formación aplicada',
            copy: 'Aprendizaje para el mundo laboral.',
          },
          {
            icon: Leaf,
            title: 'Desarrollo sostenible',
            copy: 'Personas y entornos de trabajo responsables.',
          },
        ].map((item) => (
          <div key={item.title}>
            <item.icon size={23} />
            <div>
              <strong>{item.title}</strong>
              <p>{item.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
