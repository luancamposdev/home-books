import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function Authors() {
  return (
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
      <div className="flex flex-col gap-5 w-full p-5 sm:h-screen sm:overflow-y-scroll md:overflow-y-auto rounded bg-white">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Autores</h2>
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
