import plantFoundry from '../../assets/industrial/plant-foundry.jpg'
import type { ProgramCard } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Badge } from '../ui/Badge'
import { SectionHeading } from '../ui/SectionHeading'

interface CourseCategoriesSectionProps {
  programs: ProgramCard[]
}

export function CourseCategoriesSection({
  programs,
}: CourseCategoriesSectionProps) {
  return (
    <SectionShell id="programas" surface="white">
      <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Programas visibles"
            title="Rutas técnicas presentadas con más impacto visual y lectura comercial"
            description="La nueva sección deja de parecer un catálogo SaaS y pasa a sentirse más cercana a operaciones, riesgo y mantenimiento."
          />

          <div className="metal-frame rounded-[34px] p-3">
            <img
              src={plantFoundry}
              alt="Interior de planta metalurgica con hornos, puentes y estructuras industriales"
              className="h-[320px] w-full rounded-[26px] object-cover sm:h-[420px]"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-[28px] border border-white/10 bg-educa-charcoal/82 p-6 backdrop-blur">
              <Badge variant="amber" className="border border-white/10 bg-white/10 text-white">
                Programas por operación
              </Badge>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white">
                Entrenamiento pensado para frentes donde el error cuesta tiempo, dinero y seguridad
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Iconos, color y fotografía convierten la parrilla de programas en una pieza más
                comercial y menos genérica.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {programs.map((program) => {
            const Icon = program.icon

            return (
              <article
                key={program.title}
                className="industrial-panel relative rounded-[28px] border border-educa-mist bg-educa-cloud p-6 shadow-[0_16px_34px_rgba(24,21,18,0.06)]"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-educa-red shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    {program.tag ? <Badge variant="green">{program.tag}</Badge> : null}
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold tracking-tight text-educa-ink">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-educa-slate">
                    {program.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {program.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="rounded-full border border-educa-mist bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-educa-slate"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </SectionShell>
  )
}
