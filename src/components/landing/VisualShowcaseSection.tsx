import { ArrowUpRight } from 'lucide-react'
import type { VisualShowcaseSectionData } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'
export function VisualShowcaseSection({
  section,
}: {
  section: VisualShowcaseSectionData
}) {
  return (
    <SectionShell
      id={section.id}
      surface={section.id === 'descargas' ? 'sand' : 'white'}
    >
      <div className="section-top">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <a className="text-link" href={section.ctaHref}>
          {section.ctaLabel}
          <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="resource-grid">
        {section.cards.map((card) => (
          <article className="resource-card" key={card.title}>
            <img src={card.imageSrc} alt={card.imageAlt} loading="lazy" />
            <div>
              <p className="eyebrow">{card.badge}</p>
              <h3>
                <a href={card.href}>
                  {card.title}
                  <ArrowUpRight size={19} />
                </a>
              </h3>
              <p className="resource-note">
                {section.id === 'descargas'
                  ? 'Material disponible por solicitud a nuestro equipo.'
                  : 'Explora nuestra oferta relacionada con este tema.'}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
