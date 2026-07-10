'use client';
import Link from 'next/link';
import { Github } from 'lucide-react';

const footerLinks = {
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookies Policy', href: '/cookies' },
  ],
  developers: [
    { label: 'Developer Docs', href: '/docs' },
    { label: 'API Reference', href: '/docs/api' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/Dav-123/Offimesh', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-ink-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative h-9 w-9">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg rotate-6 transform" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
              </div>
              <span className="font-display text-xl font-bold text-paper">
                OffiMesh
              </span>
            </Link>
            <p className="text-body-sm text-ink-400 max-w-xs mb-6">
              Offline-capable payment integration platform built during the Nomba Dev Career Hackathon, June 2026.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-ink-800 flex items-center justify-center text-ink-400 hover:bg-purple-600 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-paper mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-ink-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Links */}
          <div>
            <h3 className="font-semibold text-paper mb-4">Developers</h3>
            <ul className="space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-ink-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-ink-400">
            &copy; 2026 OffiMesh. Built at Nomba Dev Career Hackathon.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-body-sm text-ink-400 hover:text-purple-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-body-sm text-ink-400 hover:text-purple-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
