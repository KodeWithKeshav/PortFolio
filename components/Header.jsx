import Image from "next/image";
import Link from "next/link";

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
              <span className="text-white font-bold text-2xl tracking-wider">
                KESHAV <span className="text-red-600">S</span>
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