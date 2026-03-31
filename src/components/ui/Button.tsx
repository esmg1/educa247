import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline-light'
type ButtonSize = 'sm' | 'md'

interface SharedProps {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
}

type AnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

const baseClasses =
  'inline-flex items-center gap-2 rounded-2xl font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-casst-amber'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-casst-amber px-5 text-casst-ink shadow-float hover:-translate-y-0.5 hover:bg-amber-400',
  secondary:
    'border border-slate-300 bg-white px-5 text-casst-navy hover:-translate-y-0.5 hover:border-casst-blue hover:text-casst-blue',
  'outline-light':
    'border border-white/30 bg-transparent px-5 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-11 text-sm',
  md: 'h-12 text-sm sm:text-base',
}

export function Button(props: AnchorProps | NativeButtonProps) {
  const {
    children,
    className,
    variant = 'primary',
    size = 'md',
    ...rest
  } = props
  const classes = cn(baseClasses, variants[variant], sizes[size], className)

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest

    return (
      <a
        className={classes}
        href={href}
        {...(anchorProps as Omit<AnchorProps, keyof SharedProps | 'href'>)}
      >
        {children}
      </a>
    )
  }

  const { type, ...buttonProps } = rest
  const buttonType = (type ?? 'button') as 'button' | 'submit' | 'reset'

  return (
    <button
      className={classes}
      type={buttonType}
      {...(buttonProps as Omit<NativeButtonProps, keyof SharedProps>)}
    >
      {children}
    </button>
  )
}
