import Link from 'next/link'

import { cn } from '@/lib/utils'

interface MenuItemProps {
  icon: React.ReactNode
  title: string
  active: boolean
  href: string
}

export function MenuItem({ icon, title, active, href }: MenuItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        `
        flex
        items-center
        justify-center sm:justify-normal
        w-full 
        gap-[10px] 
        text-2xl 
        font-medium
        cursor-pointer
        text-neutral-400
        hover:text-primaryColor-default
        transition
        sm:py-[20px]
        `,
        active && 'text-primaryColor-default',
      )}
    >
      {icon}
      <span
        className="
        hidden
        transition
        sm:block"
      >
        {title}
      </span>
    </Link>
  )
}
