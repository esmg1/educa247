import { FileCheck2 } from 'lucide-react'

import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'

interface EnterpriseSectionProps {
  features: string[]
}

export function EnterpriseSection({
  features,
}: EnterpriseSectionProps) {
  return (
    <SectionShell id="empresas" surface="muted" className="section-grid">
      <div className="lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Capacitacion para equipos y organizaciones"
            title="Una capa de gestion para seguimiento, cumplimiento y visibilidad corporativa"
            description="CASST no solo capacita personas. Tambien permite estructurar rutas por area, supervisar avance y sostener evidencia de cumplimiento para distintos equipos."
          />

          <div className="mt-8 space-y-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-casst-slate"
              >
                <FileCheck2 className="h-4 w-4 text-casst-success" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
