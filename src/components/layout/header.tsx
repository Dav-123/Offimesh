'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navLinks = [
  { href: '/presentation', label: 'Presentation' },
  { href: '/docs', label: 'Docs' },
  { href: '/docs/api', label: 'API' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 md:h-10 md:w-10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg rotate-6 transform" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">O</span>
              </div>
            </div>
            <span className="font-serif italic text-xl md:text-2xl font-bold text-paper">
              OffiMesh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-body-sm font-medium text-ink-400 hover:text-paper transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all group-hover:w-3/4" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="white" asChild>
              <Link href="/#download">Download App</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-ink-800 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-paper" />
              ) : (
                <Menu className="h-6 w-6 text-paper" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card mb-4 p-4 rounded-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-body-md font-medium text-ink-400 hover:text-accent rounded-lg hover:bg-ink-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-ink-700 my-2" />
              <Button variant="default" className="w-full" asChild>
                <Link href="#download" onClick={() => setIsMobileMenuOpen(false)}>
                  Download App
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
