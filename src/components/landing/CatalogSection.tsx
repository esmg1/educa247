import type { AccentTone, CatalogSectionData } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

interface CatalogSectionProps {
  section: CatalogSectionData
}

const accentStyles: Record<
  AccentTone,
  {
    badge: string
    card: string
  }
> = {
  red: {
    badge: 'bg-white/92 text-red-700 ring-1 ring-red-200/80',
    card: 'shadow-[0_24px_54px_rgba(157,37,37,0.16)]',
  },
  orange: {
    badge: 'bg-white/92 text-orange-700 ring-1 ring-orange-200/80',
    card: 'shadow-[0_24px_54px_rgba(206,112,23,0.18)]',
  },
  green: {
    badge: 'bg-white/92 text-emerald-700 ring-1 ring-emerald-200/80',
    card: 'shadow-[0_24px_54px_rgba(43,123,79,0.18)]',
  },
  charcoal: {
    badge: 'bg-white/92 text-educa-charcoal ring-1 ring-stone-300/80',
    card: 'shadow-[0_24px_54px_rgba(24,21,18,0.2)]',
  },
}

const sectionLabels = {
  certificaciones: 'Certificaciones',
  capacitaciones: 'Capacitaciones',
  mediciones: 'Mediciones',
  asesorias: 'Asesorías',
} as const

export function CatalogSection({ section }: CatalogSectionProps) {
  const accent = accentStyles[section.accent]
  const sectionLabel = sectionLabels[section.id]

  return (
    <SectionShell id={section.id} surface={section.surface} className={section.surface === 'sand' ? 'section-grid' : ''}>
      <div className="grid gap-10 xl:grid-cols-[0.36fr_0.64fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          <Button href="#contacto" variant="secondary">
            Solicitar información
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item) => {
            return (
              <article
                key={item.title}
                className={`group relative isolate aspect-[4/5] overflow-hidden rounded-[30px] border border-white/40 bg-educa-charcoal ${accent.card}`}
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  loading="lazy"
                  decoding="async"
                  data-testid="catalog-image"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out motion-reduce:transition-none md:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,21,18,0.92)] via-[rgba(24,21,18,0.4)] to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-5">
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] backdrop-blur-sm ${accent.badge}`}
                  >
                    {sectionLabel}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="max-w-[18ch] text-[1.05rem] font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:text-[1.15rem]">
                    {item.title}
                  </h3>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </SectionShell>
  )
}
