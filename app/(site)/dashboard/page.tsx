'use client'

import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { authors, books, categories } from '@/lib/books'
import { columns } from './columns'
import { BooksDataTable } from './data-table'

export default function Dashboard() {
  const data = []
  for (let i = 0; i < 5; i++) {
    data.push(books[i])
  }

  return (
    <div className="flex flex-col gap-5 w-full p-5 sm:h-screen sm:overflow-y-scroll md:overflow-y-auto rounded bg-white">
      <div className="flex flex-col md:flex-row gap-5 w-ful ">
        <div
          className="
            flex 
            flex-col
            items-center 
            justify-center 
            gap-[10px]
            w-full
            p-5
            rounded-[20px]
            shadow-lg
          "
        >
          <h2 className="text-2xl font-bold text-center">
            Total de categorias
          </h2>
          <h1 className="text-5xl font-bold">{categories.length}</h1>
        </div>
        <div
          className="
            flex 
            flex-col
            items-center 
            justify-center 
            gap-[10px]
            w-full
            p-5
            rounded-[20px]
            shadow-lg
          "
        >
          <h2 className="text-2xl font-bold text-center">Total de autores</h2>
          <h1 className="text-5xl font-bold">{authors.length}</h1>
        </div>
        <div
          className="
            flex 
            flex-col
            items-center 
            justify-center 
            gap-[10px]
            w-full
            p-5
            rounded-[20px]
            shadow-lg
          "
        >
          <h2 className="text-2xl font-bold text-center">Total de livros</h2>
          <h1 className="text-5xl font-bold">
            {Intl.NumberFormat('en', {
              notation: 'compact',
            }).format(books.length)}
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-[15px] w-full">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Últimos 5 livros cadastrados</h2>
          <Button
            size="icon"
            className="bg-primaryColor-default hover:bg-primaryColor-default"
          >
            <Plus />
          </Button>
        </div>
      </div>
      <div className="mb-20 sm:mb-6">
        <BooksDataTable data={data} columns={columns} />
      </div>
    </div>
  )
}
