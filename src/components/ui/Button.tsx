'use client'

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'

type SharedProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  isLoading?: boolean
  variant?: ButtonVariant
}

type ButtonProps = SharedProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & { href?: never }
type LinkButtonProps = SharedProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps | 'href'> & { href: string }

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-cyan text-galanta-black shadow-[0_12px_32px_rgb(0_184_199_/_0.18)] hover:bg-aqua',
  secondary: 'border border-cyan/60 bg-transparent text-current hover:bg-cyan/10',
  ghost: 'bg-transparent text-current hover:bg-mist/35',
  destructive: 'bg-clinicalRed text-white hover:bg-clinicalRed/85',
}

export function Button({ children, className, disabled = false, isLoading = false, variant = 'primary', ...props }: ButtonProps | LinkButtonProps) {
  const isDisabled = disabled || isLoading
  const styles = cn(
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold tracking-[-0.01em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan disabled:cursor-not-allowed disabled:opacity-50',
    variants[variant],
    isDisabled && 'pointer-events-none opacity-50',
    className,
  )
  const content = (
    <>
      {isLoading && <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none" />}
      <span>{children}</span>
    </>
  )

  if ('href' in props && props.href) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (isDisabled) event.preventDefault()
      props.onClick?.(event)
    }

    return <a aria-busy={isLoading || undefined} aria-disabled={isDisabled || undefined} className={styles} {...props} onClick={handleClick} tabIndex={isDisabled ? -1 : props.tabIndex}>{content}</a>
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

  return <button aria-busy={isLoading || undefined} className={styles} {...buttonProps} disabled={isDisabled} type={buttonProps.type ?? 'button'}>{content}</button>
}
