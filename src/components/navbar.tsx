import { Link } from "wouter";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "/discover" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
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

        {/* Navigation */}
        <nav className="flex items-center gap-8">
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
          className="inline-flex items-center rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
        >
          Book Now
        </Link>

      </div>
    </header>
  );
}