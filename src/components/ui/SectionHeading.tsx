import { cn } from '../../lib/cn'
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}: {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}) {
  return (
    <div
      className={cn(
        'section-heading',
        align === 'center' && 'section-heading--center',
        theme === 'dark' && 'section-heading--dark',
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
