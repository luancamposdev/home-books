import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'

import { Icon } from '@/components/Icon'
import { MenuItem } from './MenuItem'
import { UserNav } from './user-nav'
import { Menu, X } from 'lucide-react'

export function Sidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true)

  const pathname = usePathname()

  const routes = useMemo(
    () => [
      {
        icon: <Icon icon="dashboard" />,
        title: 'Dashboard',
        active: pathname === '/dashboard',
        href: '/dashboard',
      },
      {
        icon: <Icon icon="category" />,
        title: 'Categoria',
        active: pathname === '/categories',
        href: '/categories',
      },
      {
        icon: <Icon icon="groups" />,
        title: 'Autores',
        active: pathname === '/authors',
        href: '/authors',
      },
      {
        icon: <Icon icon="book_2" />,
        title: 'Livros',
        active: pathname === '/books',
        href: '/books',
      },
    ],
    [pathname],
  )

  return (
    <div className="flex">
      {!open ? (
        <div
          className="
          fixed sm:static
          flex
          items-center
          justify-between sm:justify-normal
          sm:flex-col
          bottom-0
          group 
           bg-black 
          w-[363px] 
          h-[80px] sm:h-screen 
          transition-all
           text-white
          sm:p-[30px]
          z-10
           "
        >
          <div className="flex w-full justify-end sm-hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="text-zinc-50 "
            >
              <X />
            </button>
          </div>
          <div
            className="
     flex
     sm:flex-col
     justify-evenly sm:justify-normal
     items-center sm:items-start
     w-full
     sm:h-full
   "
          >
            {routes.map((route) => (
              <MenuItem key={route.title} {...route} />
            ))}
            <div className="sm:bottom-11 sm:fixed mr-9 sm:mr-0">
              <UserNav />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="
          fixed sm:static
          flex
          items-center
          justify-between sm:justify-normal
          sm:flex-col
          bottom-0
          group 
          bg-black 
          w-full sm:w-20 
          h-[80px] sm:h-screen  
          transition-all
          text-white
          sm:p-[28px]
          z-10
        "
        >
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-zinc-50 hidden sm:block"
          >
            <Menu />
          </button>
          <div
            className="
            flex
            sm:flex-col
            justify-evenly sm:justify-normal
            items-center sm:items-start
            w-full
            sm:h-full
            overflow-hidden
          "
          >
            {routes.map((route) => (
              <MenuItem key={route.title} {...route} />
            ))}
            <div className="sm:bottom-11 sm:fixed mr-9 sm:mr-0">
              <UserNav />
            </div>
          </div>
        </div>
      )}

      {children}
    </div>
  )
}
