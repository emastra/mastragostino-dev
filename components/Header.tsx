import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Menu, X } from 'lucide-react';
import Logo from '~/components/Logo';
import Link from 'next/link';

const DarkModeToggle = dynamic(() => import('~/components/DarkModeToggle'), {
  ssr: false,
});

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/#how-we-start', text: 'Come Funziona' },
    { href: '/#about-me', text: 'Chi Sono' },
    { href: '/blog', text: 'Blog' },
    { href: '/contact', text: 'Contatti' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[9998] w-full border-b border-neutral-200 bg-transparent backdrop-blur-lg dark:border-neutral-800">
        <div className="mx-auto flex h-14 max-w-[1536px] items-center justify-between px-4 md:px-6">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.text} passHref>
                <a className="text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                  {link.text}
                </a>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center space-x-3 md:flex">
            {/* <DarkModeToggle /> */}
            <Link href="/booking" passHref>
              <a className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600">
                Inizia Gratis
              </a>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* <DarkModeToggle /> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative rounded-md p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
              aria-label="Toggle menu"
            >
              <Menu
                className={`h-5 w-5 transition-all duration-300 ${
                  isMenuOpen
                    ? 'rotate-90 scale-0 opacity-0'
                    : 'rotate-0 scale-100 opacity-100'
                }`}
              />
              <X
                className={`absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen
                    ? 'rotate-0 scale-100 opacity-100'
                    : '-rotate-90 scale-0 opacity-0'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[9997] bg-black bg-opacity-50 transition-opacity md:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed left-0 top-0 z-[9999] h-full w-4/5 max-w-sm transform bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:bg-neutral-900 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Menu Header */}
          <div className="flex h-14 items-center justify-between border-b border-neutral-200 px-4 dark:border-neutral-800">
            <Logo />
            {/* <button
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button> */}
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-grow p-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link href={link.href} key={link.text} passHref>
                  <a
                    className="rounded-lg px-3 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </a>
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Footer */}
          <div className="border-t border-neutral-200 p-4 dark:border-neutral-800">
            <a
              href="#"
              className="block w-full rounded-lg bg-primary-600 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
            >
              Inizia Gratis
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
