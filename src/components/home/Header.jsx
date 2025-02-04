'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import EnFlagIcon from '../icons/EnFlagIcon';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/' },
    { label: 'Emergency', href: '/' },
    { label: 'Volunteer Now', href: '/' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="shadow-2xl">
      <div className="px-4 sm:px-6 md:px-8 mx-auto max-w-6xl h-32 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Ummati"
            width={100}
            height={100}
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8 lg:gap-12 items-center justify-center">
          <ul className="flex gap-4 lg:gap-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-800 hover:text-main duration-300 text-sm font-semibold uppercase"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/donate"
            className="hidden lg:block rounded-full px-4 py-2 uppercase border duration-300 bg-main hover:bg-white text-white hover:text-gray-900 hover:scale-105 font-bold shadow-lg"
          >
            Donate
          </Link>
          <button className="flex items-center gap-2 border px-3 py-1 text-sm font-medium rounded-lg text-gray-800 hover:bg-gray-100">
            <EnFlagIcon />
            EN
          </button>
        </nav>
        <div className="md:hidden">
          <button className="text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          {menuOpen && (
            <nav className="absolute z-50 top-24 right-4 bg-white shadow-lg p-4 rounded-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-gray-800 hover:text-main duration-300 py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="flex items-center gap-2 border px-3 py-1 text-sm font-medium rounded-lg text-gray-800 hover:bg-gray-100">
                <EnFlagIcon />
                EN
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
