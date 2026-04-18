import Image from "next/image";
import Link from "next/link";
import ShinyText from "./ShinyText";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <span className="font-bold text-2xl tracking-wider flex gap-2">
                <ShinyText text="KESHAV" speed={2} color="#b5b5b5" shineColor="#ffffff" spread={90} />
                <ShinyText text="S" speed={2} color="#f13024" shineColor="#ffffff" spread={90} animationOffset={-0.4} />
              </span>
            </div>
          </Link>

          {/* navigation - desktop only */}
          <nav className="hidden lg:flex gap-8">
            <Link href="/" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/work" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">
              Projects
            </Link>
            <Link href="/certificates" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">
              Certificates
            </Link>
            <Link href="/resume" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">
              Resume
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;