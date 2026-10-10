import { ArrowRight } from 'lucide-react'
import type { CatalogSectionData } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'
export function CatalogSection({ section }: { section: CatalogSectionData }) {
  return (
    <SectionShell id={section.id} surface={section.surface}>
      <div className="section-top">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <a className="text-link" href="#contacto">
          Solicitar información
          <ArrowRight size={17} />
        </a>
      </div>
      <div className="catalog-grid">
        {section.items.map((item) => (
          <article className="catalog-card" key={item.title}>
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              loading="lazy"
              decoding="async"
              data-testid="catalog-image"
            />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
