import { ArrowRight } from 'lucide-react'
import type { ServiceOverviewCard } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'
export function ServicesSection({
  services,
}: {
  services: ServiceOverviewCard[]
}) {
  return (
    <SectionShell id="servicios">
      <div className="section-top">
        <SectionHeading
          eyebrow="Soluciones EDUCA 24/7"
          title="Servicios"
          description="Una oferta que conecta formación, evaluación y acompañamiento para fortalecer la prevención en tu organización."
        />
        <p className="section-aside">
          Desde la preparación del equipo hasta la gestión de los riesgos en el
          lugar de trabajo.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, i) => (
          <article className="service-card" key={service.title}>
            <div className="service-image">
              <img
                src={service.imageSrc}
                alt={service.imageAlt}
                loading="lazy"
              />
              <span>0{i + 1}</span>
            </div>
            <div className="service-body">
              <service.icon size={25} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.bullets.map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>
              <a className="text-link" href={service.ctaHref}>
                {service.ctaLabel}
                <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
