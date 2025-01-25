import Footer from "@/components/Footer";
import Image from "next/image";
import Script from "next/script";

export default function Home() {

  return (
    <div>
      <Script
        src="https://kit.fontawesome.com/bba893f359.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <div className="bg-[#FF733E] bg-opacity-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="mx-auto"
            src="/logo.png"
            alt="Ice Cream Cult logo"
            width={200}
            height={200}
            priority
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}
