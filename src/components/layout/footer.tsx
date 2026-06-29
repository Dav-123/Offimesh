'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Security', href: '#security' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download', href: '#download' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press Kit', href: '/press-kit' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Developer Docs', href: '/docs' },
    { label: 'API Reference', href: '/docs/api' },
    { label: 'Security Policy', href: '/security-policy' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Status', href: '/status' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookies Policy', href: '/cookies' },
    { label: 'Brand Assets', href: '/brand-assets' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/offimesh', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/offimesh', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/offimesh', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="bg-dark-50 dark:bg-dark-950 border-t border-dark-200 dark:border-dark-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative h-9 w-9">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg rotate-6 transform" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
              </div>
              <span className="font-display text-xl font-bold text-dark-900 dark:text-white">
                OffiMesh
              </span>
            </Link>
            <p className="text-body-sm text-dark-500 dark:text-dark-400 max-w-xs mb-6">
              Offline-First Payment Infrastructure for Africa. Secure digital payments without internet.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-500 dark:text-dark-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-dark-500 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-dark-500 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-dark-500 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-dark-500 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-200 dark:border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-dark-500 dark:text-dark-400">
            Copyright 2024 OffiMesh. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-body-sm text-dark-500 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-body-sm text-dark-500 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="text-body-sm text-dark-500 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
