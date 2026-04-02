import { ArrowRight } from 'lucide-react'

import type { ResourceCard } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'

interface ResourcesSectionProps {
  cards: ResourceCard[]
}

export function ResourcesSection({ cards }: ResourcesSectionProps) {
  return (
    <SectionShell id="recursos" surface="white">
      <SectionHeading
        eyebrow="Recursos"
        title="Recursos de apoyo para activar conversaciones comerciales y documentales"
        description="La sección agrega piezas visibles para descargar, revisar o usar como disparador de conversación sin salir de la landing."
        align="center"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon

          return (
            <article
              key={card.title}
              className="industrial-panel rounded-[32px] border border-educa-mist bg-educa-cloud p-7 shadow-float"
            >
              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-educa-red shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-educa-ink">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-educa-slate">{card.description}</p>
                <a
                  href={card.ctaHref}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-educa-red"
                >
                  {card.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
