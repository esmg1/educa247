import type { SectorBadge } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'

interface TrustBarProps {
  sectors: SectorBadge[]
}

export function TrustBar({ sectors }: TrustBarProps) {
  return (
    <SectionShell id="sectores" surface="sand" className="section-grid">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <SectionHeading
          eyebrow="Sectores"
          title="Un bloque de confianza para rubros donde la seguridad se evalua en campo"
          description="En lugar de logos ficticios, la seccion muestra frentes productivos y badges industriales listos para evolucionar cuando lleguen activos reales del cliente."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon

            return (
              <article
                key={sector.label}
                className="rounded-[28px] border border-casst-mist bg-white p-5 shadow-[0_14px_30px_rgba(24,21,18,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-casst-charcoal text-orange-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight text-casst-ink">
                  {sector.label}
                </h3>
                <p className="mt-2 text-sm leading-7 text-casst-slate">
                  Comunicacion adaptable para equipos, supervisores y coordinadores de este sector.
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </SectionShell>
  )
}
