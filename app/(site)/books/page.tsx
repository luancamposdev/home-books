import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function Books() {
  return (
    <div className="flex flex-col gap-5 w-full p-5 sm:h-screen sm:overflow-y-scroll md:overflow-y-auto rounded bg-white">
      <div className="flex flex-col gap-[15px] w-full">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Livros</h2>
          <Button
            size="icon"
            className="bg-primaryColor-default hover:bg-primaryColor-default"
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  )
}
