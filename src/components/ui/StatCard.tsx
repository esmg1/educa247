import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

interface StatCardProps {
  label: string
  value: string
  icon?: ReactNode
  tone?: 'default' | 'navy' | 'amber' | 'success'
  className?: string
}

const toneClasses = {
  default: 'border-educa-mist bg-white text-educa-ink',
  navy: 'border-white/10 bg-educa-charcoal text-white',
  amber: 'border-orange-200 bg-orange-50 text-orange-950',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
}

export function StatCard({
  label,
  value,
  icon,
  tone = 'default',
  className,
}: StatCardProps) {
  return (
    <div className={cn('rounded-3xl border p-5 shadow-float', toneClasses[tone], className)}>
      <div className="mb-3 flex items-center justify-between gap-4 text-sm font-semibold">
        <span>{label}</span>
        {icon ? <span className="opacity-80">{icon}</span> : null}
      </div>
      <div className="text-2xl font-extrabold tracking-tight">{value}</div>
    </div>
  )
}
