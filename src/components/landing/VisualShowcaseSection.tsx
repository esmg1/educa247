import type { VisualShowcaseSectionData } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

interface VisualShowcaseSectionProps {
  section: VisualShowcaseSectionData
}

export function VisualShowcaseSection({ section }: VisualShowcaseSectionProps) {
  return (
    <SectionShell id={section.id} surface={section.surface} className={section.surface === 'sand' ? 'section-grid' : ''}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <Button href={section.ctaHref} variant="secondary">
          {section.ctaLabel}
        </Button>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {section.cards.map((card) => (
          <article
            key={`${section.id}-${card.title}`}
            className="group relative isolate aspect-[16/10] overflow-hidden rounded-[34px] border border-white/30 bg-educa-charcoal shadow-[0_28px_60px_rgba(24,21,18,0.18)]"
          >
            <img
              src={card.imageSrc}
              alt={card.imageAlt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out motion-reduce:transition-none md:group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,21,18,0.9)] via-[rgba(24,21,18,0.36)] to-transparent" />

            <div className="absolute inset-x-0 top-0 p-5">
              <span className="rounded-full bg-white/92 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.24em] text-educa-red">
                {card.badge}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="max-w-[18ch] text-[1.2rem] font-extrabold leading-tight tracking-tight text-white sm:text-[1.35rem]">
                {card.title}
              </h3>
              <a href={card.href} aria-label={card.title} className="absolute inset-0" />
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
