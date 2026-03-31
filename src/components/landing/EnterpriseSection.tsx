import { AlertTriangle, ChartNoAxesColumn, FileCheck2, Layers3, UsersRound } from 'lucide-react'

import type { EnterpriseMetric } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Badge } from '../ui/Badge'
import { SectionHeading } from '../ui/SectionHeading'
import { StatCard } from '../ui/StatCard'

interface EnterpriseSectionProps {
  metrics: EnterpriseMetric[]
  features: string[]
}

const metricIcons = [UsersRound, ChartNoAxesColumn, Layers3, AlertTriangle]

export function EnterpriseSection({
  features,
  metrics,
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
