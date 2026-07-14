import { useState } from "react";
import type { ReactNode } from "react";

interface HoverCardProps {
  trigger: ReactNode;
  children: ReactNode;
}

export default function HoverCard({
  trigger,
  children,
}: HoverCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {trigger}

      {open && (
        <div className="absolute left-0 mt-2 w-72 rounded-xl border bg-white p-4 shadow-xl z-50">
          {children}
        </div>
      )}
    </div>
  );
}