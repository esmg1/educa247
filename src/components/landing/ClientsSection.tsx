import type { TrustTile } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'

interface ClientsSectionProps {
  items: TrustTile[]
}

export function ClientsSection({ items }: ClientsSectionProps) {
  return (
    <SectionShell id="clientes" surface="white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Clientes y sectores"
          title="Clientes y sectores"
          description="Sectores donde Educa 24/7 acompaña procesos de formación, prevención, cumplimiento y soporte técnico."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.label}
              className="rounded-[28px] border border-educa-mist bg-educa-cloud p-6 text-center shadow-[0_14px_30px_rgba(24,21,18,0.06)]"
            >
              <div className="text-lg font-extrabold uppercase tracking-[0.24em] text-educa-charcoal">
                {item.label}
              </div>
              <p className="mt-4 text-sm leading-7 text-educa-slate">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
