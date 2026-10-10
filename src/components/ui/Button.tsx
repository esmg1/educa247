import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { cn } from '../../lib/cn'
type Shared = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline-light'
  size?: 'sm' | 'md'
}
type Props =
  | (Shared & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (Shared & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
export function Button(props: Props) {
  const {
    children,
    className,
    variant = 'primary',
    size = 'md',
    ...rest
  } = props
  const classes = cn(
    'button',
    `button--${variant}`,
    size === 'sm' && 'button--small',
    className,
  )
  if ('href' in rest && rest.href)
    return (
      <a
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={classes}
      >
        {children}
      </a>
    )
  const nativeProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button
      {...nativeProps}
      type={nativeProps.type ?? 'button'}
      className={classes}
    >
      {children}
    </button>
  )
}
