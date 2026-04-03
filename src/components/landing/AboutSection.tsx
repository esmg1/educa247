import type { AboutSectionData } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'

interface AboutSectionProps {
  section: AboutSectionData
}

export function AboutSection({ section }: AboutSectionProps) {
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
                Educa 24/7 con lectura comercial más clara.
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
              Equipo visible, criterio claro.
            </h3>
          </div>
          <p className="max-w-2xl text-sm font-medium leading-6 text-educa-slate">
            Perfiles que sostienen operación, dirección académica, desarrollo profesional y soporte técnico con lectura directa.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {section.teamMembers.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-[32px] border border-educa-mist bg-white shadow-[0_24px_52px_rgba(24,21,18,0.1)]"
            >
              <div className="group relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,24,39,0.88)] via-[rgba(17,24,39,0.24)] to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-educa-red">
                  Equipo
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h4 className="text-3xl font-extrabold tracking-tight">{member.name}</h4>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/85">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="border-t border-educa-mist/70 bg-[#fffaf2] px-6 py-5">
                <p className="text-sm leading-6 text-educa-slate">{member.summary}</p>
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
