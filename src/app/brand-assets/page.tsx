import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Palette, Type, Download, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brand Assets — OffiMesh',
  description: 'Official logos, colors, typography, and design guidelines for OffiMesh.',
};

const colors = {
  primary: [
    { name: 'Purple 600', hex: '#9333EA', usage: 'Primary buttons, links, accents' },
    { name: 'Purple 700', hex: '#7E22CE', usage: 'Hover states, gradients' },
  ],
  secondary: [
    { name: 'Indigo 600', hex: '#4F46E5', usage: 'Gradient endpoints' },
    { name: 'Indigo 700', hex: '#4338CA', usage: 'Deep accents' },
  ],
  neutral: [
    { name: 'Dark 900', hex: '#0f0f23', usage: 'Headings, dark mode backgrounds' },
    { name: 'Dark 500', hex: '#71717a', usage: 'Body text, secondary content' },
    { name: 'White', hex: '#FFFFFF', usage: 'Text on dark backgrounds' },
  ],
  semantic: [
    { name: 'Success', hex: '#22c55e', usage: 'Completed transactions' },
    { name: 'Warning', hex: '#EAB308', usage: 'Pending states' },
    { name: 'Error', hex: '#EF4444', usage: 'Failed transactions' },
  ],
};

const typography = [
  { name: 'Display', usage: 'Hero titles, major headings', weight: 'Bold (700)', size: '48-72px' },
  { name: 'Headline', usage: 'Section titles, card headers', weight: 'Semibold (600)', size: '24-32px' },
  { name: 'Body', usage: 'Paragraph text, descriptions', weight: 'Regular (400)', size: '14-18px' },
  { name: 'Label', usage: 'Buttons, tags, small labels', weight: 'Medium (500)', size: '12-14px' },
];

const dos = [
  'Use the provided logo variations for different backgrounds',
  'Maintain minimum clear space around the logo (equal to logo height)',
  'Use official color codes from our palette',
  'Keep aspect ratios intact when scaling',
];

const donts = [
  'Do not alter logo colors outside the brand palette',
  'Do not add effects like shadows, outlines, or gradients',
  'Do not stretch or distort the logo',
  'Do not rotate or flip the logo',
  'Do not place the logo on busy or low-contrast backgrounds',
];

export default function BrandAssetsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div
            className="text-center mb-16"
          >
            <h1 className="text-display-lg font-bold text-dark-900 dark:text-white mb-4">
              Brand Assets
            </h1>
            <p className="text-body-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              Official logos, colors, typography, and design guidelines for OffiMesh. Use these resources for partnerships, media, and integrations.
            </p>
          </div>

          {/* Logo */}
          <section
            className="mb-16"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Logo
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Light background */}
              <div className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] bg-white">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="relative h-12 w-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg rotate-6 transform" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">O</span>
                    </div>
                  </div>
                  <span className="font-display text-3xl font-bold text-dark-900">OffiMesh</span>
                </div>
                <p className="text-body-sm text-dark-400">For light backgrounds</p>
              </div>
              {/* Dark background */}
              <div className="rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] bg-gradient-to-br from-purple-700 to-indigo-800">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="relative h-12 w-12">
                    <div className="absolute inset-0 bg-white/30 rounded-lg rotate-6 transform" />
                    <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-2xl">O</span>
                    </div>
                  </div>
                  <span className="font-display text-3xl font-bold text-white">OffiMesh</span>
                </div>
                <p className="text-body-sm text-white/60">For dark backgrounds</p>
              </div>
            </div>
            <a
              href="/press/offimesh-logos.zip"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              <Download className="h-5 w-5" />
              Download Logo Pack (PNG + SVG)
            </a>
          </section>

          {/* Colors */}
          <section
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Palette className="h-6 w-6 text-purple-600" />
              <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white">
                Color Palette
              </h2>
            </div>

            {Object.entries(colors).map(([category, swatches]) => (
              <div key={category} className="mb-8">
                <h3 className="text-label uppercase tracking-widest text-dark-400 dark:text-dark-500 mb-4">
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {swatches.map((color) => (
                    <div key={color.name} className="glass-card rounded-xl p-4">
                      <div
                        className="w-full h-16 rounded-lg mb-3"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-semibold text-dark-900 dark:text-white">{color.name}</p>
                        <code className="text-body-sm font-mono text-purple-600 dark:text-purple-400">{color.hex}</code>
                      </div>
                      <p className="text-body-sm text-dark-500 dark:text-dark-400">{color.usage}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Typography */}
          <section
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Type className="h-6 w-6 text-purple-600" />
              <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white">
                Typography
              </h2>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full text-body-md">
                <thead>
                  <tr className="border-b border-dark-200 dark:border-dark-700">
                    <th className="px-6 py-4 text-left font-semibold text-dark-900 dark:text-white">Style</th>
                    <th className="px-6 py-4 text-left font-semibold text-dark-900 dark:text-white">Weight</th>
                    <th className="px-6 py-4 text-left font-semibold text-dark-900 dark:text-white">Size</th>
                    <th className="px-6 py-4 text-left font-semibold text-dark-900 dark:text-white">Usage</th>
                  </tr>
                </thead>
                <tbody>
                  {typography.map((style) => (
                    <tr key={style.name} className="border-b border-dark-100 dark:border-dark-800 last:border-0">
                      <td className="px-6 py-4 font-semibold text-dark-900 dark:text-white">{style.name}</td>
                      <td className="px-6 py-4 text-dark-600 dark:text-dark-300">{style.weight}</td>
                      <td className="px-6 py-4 text-dark-600 dark:text-dark-300">{style.size}</td>
                      <td className="px-6 py-4 text-dark-500 dark:text-dark-400">{style.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Dos and Don'ts */}
          <section
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-dark-900 dark:text-white">Do</h3>
              </div>
              <ul className="space-y-3">
                {dos.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body-md text-dark-600 dark:text-dark-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-semibold text-dark-900 dark:text-white">Don&apos;t</h3>
              </div>
              <ul className="space-y-3">
                {donts.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body-md text-dark-600 dark:text-dark-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
