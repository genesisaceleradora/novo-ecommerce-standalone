import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type ContainerProps = HTMLAttributes<HTMLDivElement> & { size?: 'default' | 'narrow' | 'wide' }

const sizes = {
  default: 'max-w-7xl',
  narrow: 'max-w-4xl',
  wide: 'max-w-[1440px]',
} as const

export function Container({ className, size = 'default', ...props }: ContainerProps) {
  return <div className={cn('mx-auto w-full px-5 md:px-8 xl:px-12', sizes[size], className)} {...props} />
}
