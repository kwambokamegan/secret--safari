import { useState } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Travel Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#10261d] text-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="text-xl font-bold shrink-0">
          Secret Safari
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Book Now button, desktop */}
        <a
          href="#book"
          className="hidden md:inline-block bg-green-500 hover:bg-green-600 transition-colors text-white text-sm font-medium px-5 py-2 rounded-lg"
        >
          Book Now
        </a>

        {/* Mobile menu trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/10"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-[#10261d] text-white border-white/10">
            <SheetHeader>
              <SheetTitle className="text-white">Secret Safari</SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-4 mt-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors text-base"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block text-center bg-green-500 hover:bg-green-600 transition-colors text-white font-medium px-5 py-2 rounded-lg"
              >
                Book Now
              </a>
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}