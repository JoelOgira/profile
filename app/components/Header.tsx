import Link from "next/link"
import { FaYoutube, FaGithub, FaTwitch, FaLaptop } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Header() {
  return (
    <nav className=" bg-slate-600 z-20 sticky top-0 p-4 drop-shadow-xl">
      <div className="prose prose-2xl mx-auto flex justify-between flex-col space-y-3 sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link href={'/'} className="text-white/90 no-underline hover:text-white">
            Jay Zephyrus
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link target="_blank" href={"https://github.com/JoelOgira"} className="text-white/90 hover:text-white">
            <FaGithub />
          </Link>
          <Link target="_blank" href={"https://github.com/JoelOgira"} className="text-white/90 hover:text-white">
            <FaYoutube />
          </Link>
          <Link target="_blank" href={"https://github.com/JoelOgira"} className="text-white/90 hover:text-white">
            <FaTwitch />
          </Link>
          <Link target="_blank" href={"https://github.com/JoelOgira"} className="text-white/90 hover:text-white">
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </nav>
  )
}
