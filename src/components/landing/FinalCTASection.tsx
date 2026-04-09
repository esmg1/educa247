import type { ContactDetail, FooterPanel } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { SectionHeading } from '../ui/SectionHeading'

interface FinalCTASectionProps {
  contactDetails: ContactDetail[]
  panels: FooterPanel[]
}

export function FinalCTASection({ contactDetails, panels }: FinalCTASectionProps) {
  function isExternalLink(href: string) {
    return href.startsWith('http') || href.startsWith('mailto:')
  }

  return (
    <SectionShell id="contacto" surface="dark" className="section-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-educa-red/24 via-transparent to-educa-green/18" />
      <div className="hazard-stripes absolute inset-y-0 right-0 hidden w-1/3 opacity-30 lg:block" />

      <div className="relative">
        <SectionHeading
          eyebrow="Contáctanos"
          title="Conversemos sobre la necesidad de tu equipo o proyecto."
          description="Aquí encuentras canales de contacto, acceso al catálogo y rutas para continuar con certificaciones, capacitaciones, mediciones o asesorías."
          theme="dark"
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {contactDetails.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={isExternalLink(item.href) ? '_blank' : undefined}
              rel={isExternalLink(item.href) ? 'noreferrer' : undefined}
              className="rounded-[24px] border border-white/10 bg-white/8 px-4 py-3 text-sm text-slate-100 backdrop-blur transition hover:border-orange-300 hover:bg-white/12"
            >
              <span className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-200">
                {item.label}
              </span>
              <span className="mt-1 block font-semibold">{item.value}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-4">
          {panels.map((panel) => {
            const Icon = panel.icon

            return (
              <article
                key={panel.title}
                className="rounded-[30px] border border-white/10 bg-white/8 p-6 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-extrabold tracking-tight text-white">{panel.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{panel.description}</p>

                {panel.details?.length ? (
                  <div className="mt-5 space-y-3">
                    {panel.details.map((detail) => (
                      <a
                        key={detail.label}
                        href={detail.href}
                        target={isExternalLink(detail.href) ? '_blank' : undefined}
                        rel={isExternalLink(detail.href) ? 'noreferrer' : undefined}
                        className="block rounded-2xl border border-white/10 bg-educa-charcoal/36 px-4 py-3 text-sm text-slate-100 transition hover:border-orange-300 hover:bg-white/6"
                      >
                        <span className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-orange-200">
                          {detail.label}
                        </span>
                        <span className="mt-1 block">{detail.value}</span>
                      </a>
                    ))}
                  </div>
                ) : null}

                <div className="mt-5 space-y-3">
                  {panel.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-orange-300 hover:bg-white/6 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </SectionShell>
  )
}
