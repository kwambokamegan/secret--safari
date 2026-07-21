import { Link } from "wouter";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#10261d] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">

          <Link href="/" className="text-xl font-bold shrink-0">
            Secret Safari
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/discover" className="text-gray-300 hover:text-white transition-colors">
              Discover
            </Link>
            <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors">
              Blogs
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-300 shrink-0">
            <a href="tel:+254700000000" className="hover:text-white transition-colors">
              📞 +254 700 000 000
            </a>
            <a href="mailto:hello@secretsafari.co.ke" className="hover:text-white transition-colors">
              ✉️ hello@secretsafari.co.ke
            </a>
            <span>📍 Nairobi, Kenya</span>

            <div className="flex items-center gap-2">
              <a href="https://instagram.com/Secret_safari" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-2 h-9 px-3 rounded-full bg-white/10 hover:bg-pink-600 transition-colors">
                <FaInstagram className="h-4 w-4 text-pink-400" />
                <span className="text-xs">Secret_safari</span>
              </a>

              <a href="https://tiktok.com/@Secret_safari" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex items-center gap-2 h-9 px-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <FaTiktok className="h-4 w-4 text-white" />
                <span className="text-xs">Secret_safari</span>
              </a>

              <a href="https://facebook.com/Secret_safari" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center gap-2 h-9 px-3 rounded-full bg-white/10 hover:bg-blue-600 transition-colors">
                <FaFacebook className="h-4 w-4 text-blue-400" />
                <span className="text-xs">Secret_safari</span>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 mt-4 pt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Secret Safari. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}