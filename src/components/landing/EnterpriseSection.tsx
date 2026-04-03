import machineryFloor from '../../assets/industrial/machinery-floor.jpg'
import type { EnterpriseBenefit } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Badge } from '../ui/Badge'
import { SectionHeading } from '../ui/SectionHeading'

interface EnterpriseSectionProps {
  benefits: EnterpriseBenefit[]
}

export function EnterpriseSection({
  benefits,
}: EnterpriseSectionProps) {
  return (
    <SectionShell id="empresas" surface="dark" className="section-grid">
      <div className="absolute inset-0 bg-mesh opacity-70" />

      <div className="relative grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
        <div>
          <SectionHeading
            eyebrow="Solución para empresas"
            title="Soluciones para empresas que requieren control y trazabilidad"
            description="Acompañamos a organizaciones que necesitan seguimiento, evidencia y coordinación por roles, áreas y frentes operativos."
            theme="dark"
          />

          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <div
                  key={benefit.title}
                  className="rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="metal-frame rounded-[34px] p-3">
            <img
              src={machineryFloor}
              alt="Operario en planta observando una pieza metálica suspendida dentro de una fábrica"
              className="h-[300px] w-full rounded-[26px] object-cover sm:h-[340px]"
            />
            <div className="absolute left-6 top-6 rounded-[24px] border border-white/10 bg-educa-charcoal/80 px-5 py-4 backdrop-blur">
              <Badge variant="amber" className="border border-white/10 bg-white/10 text-white">
                Panel corporativo
              </Badge>
              <div className="mt-3 text-xl font-extrabold text-white">Cumplimiento por rol</div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur">
              <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-orange-300">
                Asignaciones
              </div>
              <div className="mt-3 text-2xl font-extrabold text-white">Rutas por cargo</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Programas distintos para supervisores, técnicos, contratistas o personal operativo.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur">
              <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-orange-300">
                Evidencia
              </div>
              <div className="mt-3 text-2xl font-extrabold text-white">Listo para auditoría</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Estados, certificados y seguimiento en una presentación más clara para cumplimiento.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur sm:col-span-2">
              <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-orange-300">
                Coordinacion
              </div>
              <div className="mt-3 text-2xl font-extrabold text-white">
                Visión ejecutiva para responsables SST
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Consulta avance, pendientes, renovaciones y cobertura por equipo en una vista orientada a seguimiento y cumplimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
