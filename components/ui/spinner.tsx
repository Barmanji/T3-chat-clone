import { cn } from "@/lib/utils"
import { RiLoaderLine } from "@remixicon/react"

function Spinner({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props}>
      <RiLoaderLine className="size-4" />
    </div>
  )
}

export { Spinner }
