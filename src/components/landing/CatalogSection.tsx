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
    icon: string
    bar: string
    badge: string
  }
> = {
  red: {
    icon: 'bg-red-100 text-educa-red',
    bar: 'from-educa-red via-educa-orange to-transparent',
    badge: 'bg-red-100 text-red-700',
  },
  orange: {
    icon: 'bg-orange-100 text-educa-orange',
    bar: 'from-educa-orange via-orange-300 to-transparent',
    badge: 'bg-orange-100 text-orange-700',
  },
  green: {
    icon: 'bg-emerald-100 text-educa-green',
    bar: 'from-educa-green via-emerald-300 to-transparent',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  charcoal: {
    icon: 'bg-stone-200 text-educa-charcoal',
    bar: 'from-educa-charcoal via-educa-blue to-transparent',
    badge: 'bg-stone-200 text-educa-charcoal',
  },
}

export function CatalogSection({ section }: CatalogSectionProps) {
  const accent = accentStyles[section.accent]

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
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[30px] border border-educa-mist bg-white p-6 shadow-[0_18px_36px_rgba(24,21,18,0.08)]"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent.bar}`} />
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.icon}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${accent.badge}`}>
                    Educa 24/7
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight text-educa-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-educa-slate">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </SectionShell>
  )
}
