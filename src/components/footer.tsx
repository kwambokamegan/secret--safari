import { FaInstagram, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#10261d] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">

          {/* Brand */}
          <a href="#" className="text-xl font-bold shrink-0">
            Secret Safari
          </a>

          {/* Explore + Support links, flattened into one row */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Destinations
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Experiences
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Gallery
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Travel Blog
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              FAQs
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </nav>

          {/* Contact info + social buttons */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-300 shrink-0">
            <span>📍 Nairobi, Kenya</span>
            <span>✉️ hello@secretsafari.co.ke</span>
            <span>📞 +254 700 000 000</span>

            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition-colors"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition-colors"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-4 pt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Secret Safari. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}