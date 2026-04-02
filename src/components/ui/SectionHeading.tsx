import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <div
        className={cn(
          'mb-4 text-xs font-extrabold uppercase tracking-[0.24em]',
          theme === 'dark' ? 'text-orange-200' : 'text-educa-red',
        )}
      >
        {eyebrow}
      </div>
      <h2
        className={cn(
          'text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.8rem]',
          theme === 'dark' ? 'text-white' : 'text-educa-ink',
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'mt-5 text-base leading-7 sm:text-lg',
          theme === 'dark' ? 'text-slate-300' : 'text-educa-slate',
        )}
      >
        {description}
      </p>
    </div>
  )
}
