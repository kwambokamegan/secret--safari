export function Footer() {
  return (
    <footer className="bg-[#10261d] text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <a href="#" className="text-3xl font-bold block mb-4">
            Secret Safari
          </a>

          <p className="text-gray-300 leading-7">
            Discover Kenya's hidden treasures through authentic safaris,
            breathtaking landscapes, and unforgettable adventures.
          </p>

          <div className="flex gap-5 mt-6">
            <a
              href="#"
              className="hover:text-green-400 transition-colors"
            >
              Instagram
            </a>

            <a
              href="#"
              className="hover:text-green-400 transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>


        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Explore
          </h3>

          <nav className="flex flex-col gap-3">
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
          </nav>
        </div>


        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Support
          </h3>

          <nav className="flex flex-col gap-3">
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
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-4 text-gray-300">

            <p>
              📍 Nairobi, Kenya
            </p>

            <p>
              ✉️ hello@secretsafari.co.ke
            </p>

            <p>
              📞 +254 700 000 000
            </p>

          </div>
        </div>

      </div>


      {/* Copyright */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Secret Safari. All Rights Reserved.
      </div>

    </footer>
  );
}