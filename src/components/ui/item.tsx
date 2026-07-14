import * as React from "react"
import { cn } from "@/lib/utils"

export interface ItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, active = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex cursor-pointer items-center rounded-lg px-4 py-3 transition-colors",
          active
            ? "bg-blue-600 text-white"
            : "hover:bg-gray-100 text-gray-800",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Item.displayName = "Item"

export { Item }