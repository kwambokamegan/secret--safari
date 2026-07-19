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
  { label: "Discover", href: "/discover" },
  { label: "Booking", href: "/booking" },
  { label: "Transport", href: "/transport" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#10261d] text-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-green-400 transition-colors"
        >
          Secret Safari
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-green-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Book Now Button */}
        <Link
          href="/booking"
          className="hidden md:inline-flex items-center rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
        >
          Book Now
        </Link>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-[#10261d] text-white border-white/10"
          >
            <SheetHeader>
              <SheetTitle className="text-white">
                Secret Safari
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-8 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-gray-300 hover:text-green-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-lg bg-green-600 px-4 py-3 text-center font-semibold hover:bg-green-700 transition-colors"
              >
                Book Now
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}