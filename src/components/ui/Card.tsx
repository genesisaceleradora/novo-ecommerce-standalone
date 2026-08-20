import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type CardVariant = 'surface' | 'technical' | 'dark' | 'flat'
type CardProps = HTMLAttributes<HTMLDivElement> & { variant?: CardVariant }

const variants: Record<CardVariant, string> = {
  surface: 'border-mist bg-white shadow-surface',
  technical: 'border-mist bg-sterile shadow-none',
  dark: 'border-mist/15 bg-graphite text-sterile shadow-elevated',
  flat: 'border-mist bg-transparent shadow-none',
}

export function Card({ className, variant = 'surface', ...props }: CardProps) {
  return <div className={cn('rounded-2xl border', variants[variant], className)} {...props} />
}
