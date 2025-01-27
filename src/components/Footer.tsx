export default function Home() {

  return (
    <footer className={`row-start-3 flex gap-6 flex-wrap items-center justify-center animate-fadeIn`}>
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

      <a
        href="https://soundcloud.com/icecreamcult"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-soundcloud text-4xl"></i>
      </a>
    </footer>
  );
}
