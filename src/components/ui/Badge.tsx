import type { PropsWithChildren } from 'react'

import { cn } from '../../lib/cn'

interface BadgeProps extends PropsWithChildren {
  variant?: 'amber' | 'green' | 'slate' | 'navy'
  className?: string
}

const variants = {
  amber: 'bg-amber-100 text-amber-800',
  green: 'bg-emerald-100 text-emerald-700',
  slate: 'bg-slate-100 text-slate-700',
  navy: 'bg-casst-navy/10 text-casst-navy',
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
