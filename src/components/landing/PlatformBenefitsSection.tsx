import {
  BarChart3,
  CheckCircle2,
  FileCheck2,
  ListTodo,
} from 'lucide-react'

import type { PlatformBenefit } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Badge } from '../ui/Badge'
import { SectionHeading } from '../ui/SectionHeading'
import { StatCard } from '../ui/StatCard'

interface PlatformBenefitsSectionProps {
  benefits: PlatformBenefit[]
}

export function PlatformBenefitsSection({
  benefits,
}: PlatformBenefitsSectionProps) {
  return (
    <SectionShell surface="white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="blueprint-panel relative rounded-[34px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-panel sm:p-8">
          <div className="relative space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-educa-blue">
                  Vista operativa
                </div>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-educa-ink">
                  La plataforma funciona como un sistema de gestión formativa
                </h3>
              </div>
              <Badge variant="green">Trazabilidad</Badge>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard label="Progreso consolidado" value="Visible por ruta" icon={<BarChart3 className="h-5 w-5" />} />
              <StatCard label="Puntaje de evaluación" value="Aprobado por módulo" icon={<CheckCircle2 className="h-5 w-5" />} tone="amber" />
              <StatCard label="Estado documental" value="Certificados listos" icon={<FileCheck2 className="h-5 w-5" />} tone="success" />
              <StatCard label="Línea de avance" value="Pendientes priorizados" icon={<ListTodo className="h-5 w-5" />} />
            </div>

            {/* <div className="rounded-[28px] border border-slate-200 bg-educa-navy p-5 text-white">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-200">
                <span>Cumplimiento por competencias</span>
                <ShieldCheck className="h-5 w-5 text-educa-amber" />
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ['Riesgos operativos', '96%'],
                  ['Respuesta ante emergencias', '88%'],
                  ['Normativa y cumplimiento', '92%'],
                ].map(([label, value]) => (
                  <div key={label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-educa-amber"
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Beneficios de plataforma"
            title="Una experiencia operativamente fuerte, clara para usuarios y útil para coordinación"
            description="Cada módulo, evaluación y avance se presenta con una estructura pensada para aprendizaje aplicado y seguimiento continuo."
          />

          <div className="mt-10 space-y-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <div
                  key={benefit.title}
                  className="flex gap-4 rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,39,66,0.05)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-educa-navy/6 text-educa-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-educa-ink">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-educa-slate">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
