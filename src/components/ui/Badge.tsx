import type { PropsWithChildren } from 'react'

import { cn } from '../../lib/cn'

interface BadgeProps extends PropsWithChildren {
  variant?: 'amber' | 'green' | 'slate' | 'navy' | 'red' | 'charcoal'
  className?: string
}

const variants = {
  amber: 'bg-orange-100 text-orange-800',
  green: 'bg-emerald-100 text-emerald-800',
  slate: 'bg-stone-100 text-stone-700',
  navy: 'bg-educa-charcoal/10 text-educa-charcoal',
  red: 'bg-red-100 text-red-700',
  charcoal: 'bg-educa-charcoal text-white',
}

export function Badge({ children, variant = 'slate', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
