
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-3xl border-b border-earth-medium shadow-sm' : 'bg-white/95 backdrop-blur-sm border-b border-earth-medium'
      }`}>
      <div className="container mx-auto md:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8  rounded-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-sage">
              <span className="text-white bg-slate-900 py-1 px-2 rounded-md font-display font-bold text-lg">W</span>
            </div>
            <span className="font-display font-semibold text-xl  group-hover: transition-colors duration-300">Wallora</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-base font-semibold cursor-pointer hover:text-blue-500 hover:shadow-2xl hover:shadow-blue-600 transition-colors duration-300">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-base font-semibold cursor-pointer hover:text-blue-500 hover:shadow-2xl hover:shadow-blue-600 transition-colors duration-300">
              About
            </button>
            <button onClick={() => scrollToSection('featured')} className="text-base font-semibold cursor-pointer hover:text-blue-500 hover:shadow-2xl hover:shadow-blue-600 transition-colors duration-300">
              Gallery
            </button>
            <Link href="/home2" className="text-base font-semibold cursor-pointer hover:text-blue-500 hover:shadow-2xl hover:shadow-blue-600 transition-colors duration-300">
              Parallax View
            </Link>
            <button onClick={() => scrollToSection('contact')} className="text-base font-semibold cursor-pointer hover:text-blue-500 hover:shadow-2xl hover:shadow-blue-600  transition-colors duration-300">
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('featured')}
              className="bg-transparent text-black border border-black hover:bg-blue-500 shadow-md hover:shadow-blue-500 cursor-pointer hover:border-none transition-all duration-500 active:scale-95"
            >
              Shop Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-earth-light rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className={`p-4 bg-white border-t border-earth-medium transform transition-all duration-500 ${isMenuOpen ? 'translate-y-0' : '-translate-y-4'
            }`}>
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left py-2 hover:text-blue-500 hover:pl-2 transform transition-all duration-300 hover:scale-105"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 hover:text-blue-500 hover:pl-2 transform transition-all duration-300 hover:scale-105"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('featured')}
                className="text-left py-2 hover:text-blue-500 hover:pl-2 transform transition-all duration-300 hover:scale-105"
              >
                Gallery
              </button>
              <Link
                href="/home2"
                className="text-left py-2 hover:text-blue-500 hover:pl-2 transform transition-all duration-300 hover:scale-105"
              >
                Parallax View
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 hover:text-blue-500 hover:pl-2 transform transition-all duration-300 hover:scale-105"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('featured')}
                className="bg-black hover:bg-blue-500 text-white w-fit transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Shop Now
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
