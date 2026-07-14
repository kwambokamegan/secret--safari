import * as React from "react"
import { cn } from "@/lib/utils"

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(
          "inline-flex h-6 items-center rounded border border-gray-300 bg-gray-100 px-2 text-xs font-semibold shadow-sm",
          className
        )}
        {...props}
      >
        {children}
      </kbd>
    )
  }
)

Kbd.displayName = "Kbd"

export { Kbd }
