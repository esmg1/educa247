import { ArrowRight, BadgeCheck, PlayCircle } from 'lucide-react'

import type { VirtualCoursesSectionData } from '../../data/landingContent'
import { SectionShell } from '../layout/SectionShell'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

interface VirtualCoursesSectionProps {
  section: VirtualCoursesSectionData
}

export function VirtualCoursesSection({ section }: VirtualCoursesSectionProps) {
  return (
    <SectionShell
      id={section.id}
      surface={section.surface}
      className={section.surface === 'sand' ? 'section-grid' : ''}
    >
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

      <div className="mt-12 grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
        <article className="relative isolate overflow-hidden rounded-[36px] border border-white/40 bg-[#131110] p-8 shadow-[0_32px_74px_rgba(24,21,18,0.24)] sm:p-10">
          <img
            src={section.featuredCourse.imageSrc}
            alt={section.featuredCourse.imageAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(19,17,16,0.88),rgba(19,17,16,0.96)),radial-gradient(circle_at_top_right,rgba(255,138,0,0.18),transparent_30%)]" />

          <div className="relative">
            <div className="inline-flex rounded-full border border-orange-300/24 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-orange-100">
              {section.featuredCourse.badge}
            </div>

            <div className="mt-6 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-200">
                {section.featuredCourse.subtitle}
              </p>
              <h3 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-[3.2rem]">
                {section.featuredCourse.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {section.featuredCourse.description}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {section.featuredCourse.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex gap-3 rounded-[24px] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-6 text-slate-100 backdrop-blur"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href={section.featuredCourse.primaryCtaHref}>
                {section.featuredCourse.primaryCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </article>

        <div className="grid gap-6">
          <article className="overflow-hidden rounded-[32px] border border-[#d6c7b2] bg-white shadow-[0_24px_60px_rgba(24,21,18,0.12)]">
            <div className="flex items-center justify-between gap-4 border-b border-stone-200 px-6 py-5">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-educa-red">
                  Video del programa
                </div>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-educa-ink">
                  {section.featuredCourse.title}
                </h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff3df] text-educa-red">
                <PlayCircle className="h-6 w-6" />
              </div>
            </div>

            <div className="aspect-video bg-educa-charcoal" data-testid="igualdad-video">
              <iframe
                src={section.featuredCourse.videoEmbedUrl}
                title={`Video ${section.featuredCourse.title}`}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </article>

          <article className="overflow-hidden rounded-[32px] border border-[#d6c7b2] bg-white shadow-[0_24px_60px_rgba(24,21,18,0.12)]">
            <img
              src={section.supportingCourse.imageSrc}
              alt={section.supportingCourse.imageAlt}
              className="h-[280px] w-full bg-white object-contain p-4"
            />

            <div className="border-t border-stone-200 px-6 py-6">
              <div className="inline-flex rounded-full bg-[#fff3df] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-educa-red">
                {section.supportingCourse.badge}
              </div>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-educa-slate">
                {section.supportingCourse.subtitle}
              </p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-educa-ink">
                {section.supportingCourse.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-educa-slate">
                {section.supportingCourse.description}
              </p>

              <div className="mt-5 rounded-[24px] border border-educa-mist bg-[#fffaf2] px-4 py-4 text-sm font-semibold leading-6 text-educa-ink">
                {section.supportingCourse.supportLine}
              </div>

              <div className="mt-6">
                <Button href={section.supportingCourse.ctaHref} variant="secondary">
                  {section.supportingCourse.ctaLabel}
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </SectionShell>
  )
}
