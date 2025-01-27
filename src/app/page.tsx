'use client'

import Footer from "@/components/Footer";
import Image from "next/image";
import Script from "next/script";
import Biography from "@/components/Biography";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [showIntroLogo, setShowIntroLogo] = useState(true);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroLogo(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Script
        src="https://kit.fontawesome.com/bba893f359.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <div className="bg-[#FF733E] bg-opacity-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <AnimatePresence>
        {showIntroLogo && (<motion.div
          className="absolute row-start-2 items-center sm:items-start"
          initial={{ y: 0, scale: 1.5, opacity: 1 }}
          animate={{ y: 0, scale: 0.8, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/logo.png"
            alt="Ice Cream Cult logo"
            width={200}
            height={200}
            priority
          />
        </motion.div>
        )}
      </AnimatePresence>
      {showElements && (
        <>
        <main className="animate-fadeIn flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="mx-auto"
            src="/logo.png"
            alt="Ice Cream Cult logo"
            width={200}
            height={200}
            priority
          />
          </div>
            <Biography />
            <iframe
              src="https://open.spotify.com/embed/album/3DHnvogihieK47w9WZ6S22?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
            </iframe>
          </main>
          <Footer />
        </>
      )}
      </div>
    </div>
  );
}
