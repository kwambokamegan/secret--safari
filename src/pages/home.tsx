import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const heroImages = [
  "/images/hero/hero-1.jpeg",
  "/images/hero/hero-2.jpeg",
  "/images/hero/hero-3.jpeg",
  "/images/hero/hero-4.jpeg",
  "/images/hero/hero-5.jpeg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Kenyan Safari"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Your Secret Safari Awaits
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto"
          >
            Discover the untold stories of Kenya. Off the beaten path, into the
            wild.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/discover">Discover Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}