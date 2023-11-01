import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

// div de skeleton que vai substituir todos os componentes durante o loading
export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('bg-zinc-50/10 animate-pulse rounded-md', className)}
      {...props}
    />
  )
}
