"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Kolhair Shampoo", href: "/producto" },
  { label: "Contact Us", href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-cream-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-serif text-2xl font-bold text-brown-800 tracking-widest uppercase">
              Kolhair
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors pb-0.5 ${
                    isActive
                      ? "text-brown-800 border-b-2 border-brown-800"
                      : "text-gray-500 hover:text-brown-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side: cart */}
          <div className="flex items-center gap-4">
            <Link
              href="/producto"
              aria-label="Ver carrito"
              className="relative p-2 text-brown-700 hover:text-brown-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <MobileMenu pathname={pathname} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <div className="md:hidden">
      <details className="relative">
        <summary className="list-none cursor-pointer p-2 text-brown-700">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-1 w-52 bg-white rounded-2xl shadow-xl border border-cream-200 py-2 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-5 py-3 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-brown-800 bg-cream-50"
                  : "text-gray-600 hover:text-brown-700 hover:bg-cream-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
}
