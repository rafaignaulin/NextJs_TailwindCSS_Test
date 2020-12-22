import Image from 'next/image';
import Link from 'next/link';

const Header : React.FC = ({children}) =>  {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Image src="/img/logo.svg" alt="DoWhile" width={150} height={40}/>


      <nav className="hidden md:block space-x-8">
        <Link href="/nextjs">
          <a className="tracking-wide hover:text-gray-300 transition">Next.js</a>
        </Link>
        <Link href="/tailwind">
          <a className="tracking-wide hover:text-gray-300 transition">Tailwind</a>
        </Link>
        <Link href="/framemotion">
          <a className="tracking-wide hover:text-gray-300 transition">FrameMotion</a>
        </Link>

      </nav>
    </header>
  )
}

export default Header;