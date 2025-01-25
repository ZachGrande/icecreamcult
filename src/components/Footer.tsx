'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={`row-start-3 flex gap-6 flex-wrap items-center justify-center ${showElements ? 'animate-fadeIn' : 'opacity-0'}`}>
      <a
        href="https://www.instagram.com/icecreamcult/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram text-4xl"></i>
      </a>
      <a
        href="mailto:icecreamcult@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-envelope text-4xl"></i>
      </a>
    </footer>
  );
}
