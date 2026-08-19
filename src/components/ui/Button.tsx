import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type SharedProps = {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
}

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }
type LinkButtonProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-gold text-ink shadow-[0_8px_24px_rgba(214,179,106,0.22)] hover:bg-[#e5c581]',
  secondary: 'border border-current/35 text-current hover:bg-current/10',
  ghost: 'text-navy hover:text-gold-dark',
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps | LinkButtonProps) {
  const styles = cn(
    'inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
    variants[variant],
    className,
  )

  if ('href' in props && props.href) {
    return <a className={styles} {...props}>{children}</a>
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

  return <button className={styles} {...buttonProps} type={buttonProps.type ?? 'button'}>{children}</button>
}
