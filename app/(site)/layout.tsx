'use client'

import { Sidebar } from '@/app/(site)/_components/Sidebar'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Sidebar>
      <div
        className="
        flex 
        flex-col 
        gap-5 
        w-full 
        px-0  
        sm:h-screen 
        sm:overflow-y-scroll 
        md:overflow-y-auto
        bg-black
        pt-2
      "
      >
        {children}
      </div>
    </Sidebar>
  )
}
