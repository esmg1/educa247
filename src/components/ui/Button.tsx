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
  'inline-flex items-center gap-2 rounded-2xl font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-casst-orange'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-casst-red to-casst-orange px-5 text-white shadow-edge hover:-translate-y-0.5 hover:brightness-105',
  secondary:
    'border border-casst-mist bg-casst-cream px-5 text-casst-ink hover:-translate-y-0.5 hover:border-casst-orange hover:text-casst-red',
  'outline-light':
    'border border-white/30 bg-white/5 px-5 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/12',
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
