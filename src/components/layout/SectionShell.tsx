import type { PropsWithChildren } from 'react'
import { cn } from '../../lib/cn'
interface Props extends PropsWithChildren {
  id?: string
  className?: string
  contentClassName?: string
  surface?: 'white' | 'muted' | 'dark' | 'sand'
}
export function SectionShell({
  children,
  id,
  className,
  contentClassName,
  surface = 'white',
}: Props) {
  return (
    <section
      id={id}
      className={cn('section', `section--${surface}`, className)}
    >
      <div className={cn('site-container', contentClassName)}>{children}</div>
    </section>
  )
}
