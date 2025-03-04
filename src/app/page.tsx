'use client'

import Footer from "@/components/Footer";
import Image from "next/image";
import Script from "next/script";
import Biography from "@/components/Biography";
import Videos from "@/components/Videos";
import Music from "@/components/Music";
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
    <div className="bg-[#FF733E] bg-opacity-50">
      <Script
        src="https://kit.fontawesome.com/bba893f359.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen max-w-screen-lg mx-auto p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <AnimatePresence>
        {showIntroLogo && (<motion.div
          className="row-start-2 items-center sm:items-start"
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
        <div className="flex flex-col items-center justify-center w-full">
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
            <Videos />
            <Music />
          </main>
          <Footer />
        </>
      )}
      </div>
    </div>
  );
}
