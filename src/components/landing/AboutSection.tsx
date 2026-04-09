import type { AboutSectionData } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'

interface AboutSectionProps {
  section: AboutSectionData
}

export function AboutSection({ section }: AboutSectionProps) {
  function getInitials(name: string) {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  }

  return (
    <SectionShell id="quienes-somos" surface="white">
      <div className="grid gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[34px] shadow-[0_28px_60px_rgba(24,21,18,0.14)]">
            <img
              src={section.primaryImageSrc}
              alt={section.primaryImageAlt}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,21,18,0.7)] via-transparent to-transparent" />
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[30px] shadow-[0_22px_48px_rgba(24,21,18,0.12)]">
              <img
                src={section.secondaryImageSrc}
                alt={section.secondaryImageAlt}
                className="h-[250px] w-full object-cover sm:h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,21,18,0.56)] via-transparent to-transparent" />
            </div>

            <div className="rounded-[30px] border border-educa-mist bg-educa-cloud p-6 shadow-[0_18px_40px_rgba(24,21,18,0.08)]">
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-educa-red">
                Presencia industrial
              </div>
              <div className="mt-3 text-2xl font-extrabold tracking-tight text-educa-ink">
                Experiencia aplicada a sectores de alta exigencia.
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {section.highlights.map((highlight) => {
              const Icon = highlight.icon

              return (
                <article
                  key={highlight.label}
                  className="rounded-[28px] border border-educa-mist bg-[#fff8ee] p-5 shadow-[0_18px_40px_rgba(24,21,18,0.07)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-educa-red">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-5 text-3xl font-extrabold tracking-tight text-educa-ink">
                    {highlight.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-educa-slate">
                    {highlight.label}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-educa-red">
              Equipo clave
            </div>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-educa-ink sm:text-4xl">
              Equipo con experiencia técnica y académica.
            </h3>
          </div>
          <p className="max-w-2xl text-sm font-medium leading-6 text-educa-slate">
            Perfiles que integran operación, dirección académica, desarrollo profesional y soporte técnico para sostener cada servicio.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {section.teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-[32px] border border-educa-mist bg-white p-6 shadow-[0_24px_52px_rgba(24,21,18,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-educa-red to-educa-orange text-lg font-extrabold text-white shadow-edge">
                  {getInitials(member.name)}
                </div>
                <div>
                  <div className="inline-flex rounded-full bg-[#fff3df] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-educa-red">
                    Equipo
                  </div>
                  <h4 className="mt-4 text-2xl font-extrabold tracking-tight text-educa-ink">
                    {member.name}
                  </h4>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-educa-slate">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[24px] border border-educa-mist/70 bg-[#fffaf2] px-5 py-4">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-educa-red">
                  Perfil
                </div>
                <p className="mt-3 text-sm leading-6 text-educa-slate">{member.summary}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {section.sectors.map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-educa-mist bg-white px-4 py-2 text-sm font-semibold text-educa-ink shadow-[0_10px_24px_rgba(24,21,18,0.05)]"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
