import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { cn } from '../../lib/cn'
import { Badge } from './Badge'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  tag?: string | null
  footer?: string
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  tag,
  footer = 'Conocer mas',
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        'group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_32px_rgba(15,39,66,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-educa-amber hover:shadow-panel',
        className,
      )}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-educa-navy/5 text-educa-navy transition group-hover:bg-amber-50 group-hover:text-educa-amber">
          <Icon className="h-6 w-6" />
        </div>
        {tag ? <Badge variant={tag === 'nuevo' ? 'green' : 'amber'}>{tag.replace('-', ' ')}</Badge> : null}
      </div>
      <h3 className="mb-3 text-xl font-bold tracking-tight text-educa-ink">{title}</h3>
      <p className="mb-8 text-sm leading-6 text-educa-slate">{description}</p>
      <div className="mt-auto flex items-center justify-between text-sm font-semibold text-educa-navy">
        <span>{footer}</span>
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </article>
  )
}
