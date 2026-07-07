import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { Download, FileText, Image, Link2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press Kit — OffiMesh',
  description: 'Media resources, logos, and brand guidelines for journalists and partners.',
};

const facts = [
  { label: 'Founded', value: '2025' },
  { label: 'Headquarters', value: 'Nigeria' },
  { label: 'Market', value: 'Africa (350M+ addressable)' },
  { label: 'Tech Stack', value: 'React Native, Node.js, Bluetooth LE' },
  { label: 'Payment Partner', value: 'Nomba Gateway' },
  { label: 'Status', value: 'Production Beta' },
];

const downloads = [
  {
    title: 'Logo Pack (PNG + SVG)',
    description: 'High-resolution logos for light and dark backgrounds',
    format: 'ZIP, 2.4MB',
    icon: Image,
    href: '/press/offimesh-logos.zip',
  },
  {
    title: 'Fact Sheet',
    description: 'Key information about OffiMesh for quick reference',
    format: 'PDF, 120KB',
    icon: FileText,
    href: '/press/offimesh-factsheet.pdf',
  },
  {
    title: 'Brand Guidelines',
    description: 'Logo usage, colors, typography, and voice',
    format: 'PDF, 890KB',
    icon: FileText,
    href: '/press/offimesh-brand-guidelines.pdf',
  },
];

const mediaContacts = [
  { name: 'Press Inquiries', email: 'press@offimesh.com' },
  { name: 'Partnerships', email: 'partners@offimesh.com' },
  { name: 'General', email: 'contact@offimesh.com' },
];

export default function PressKitPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-16">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-display-lg font-bold text-dark-900 dark:text-white mb-6">
              Press Kit
            </h1>
            <p className="text-body-xl text-dark-500 dark:text-dark-400">
              Resources for journalists, bloggers, and partners. Everything you need to cover OffiMesh accurately.
            </p>
          </motion.div>
        </section>

        {/* Company Facts */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-8">
              Company Facts
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <p className="text-label uppercase tracking-widest text-dark-400 dark:text-dark-500 mb-1">
                    {fact.label}
                  </p>
                  <p className="text-headline-md font-semibold text-dark-900 dark:text-white">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Boilerplate */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Company Description (Boilerplate)
            </h2>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <p className="text-body-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                OffiMesh is an offline-first digital payment infrastructure built for Africa, where over 60% of the population lacks reliable internet connectivity. Using QR codes, Bluetooth LE, and audio-based data transfer, OffiMesh enables secure peer-to-peer and merchant transactions without requiring an active internet connection. Settlement happens automatically via the Nomba payment gateway when connectivity is restored. Founded in 2025, OffiMesh is on a mission to bring financial inclusion to 350 million Africans who are underserved by traditional digital payment systems.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Downloads */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Downloadable Assets
            </h2>
            <div className="space-y-4">
              {downloads.map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-body-sm text-dark-500 dark:text-dark-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-body-sm text-dark-400 dark:text-dark-500">
                      {item.format}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                      <Download className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Logo Usage */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Logo Usage Guidelines
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold text-green-600 dark:text-green-400 mb-4">Do</h3>
                <ul className="space-y-2 text-body-md text-dark-600 dark:text-dark-300">
                  <li>Use the logo with adequate clear space</li>
                  <li>Use provided color variations for different backgrounds</li>
                  <li>Keep proportions intact when resizing</li>
                  <li>Use the full name &quot;OffiMesh&quot; on first mention</li>
                </ul>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-4">Do Not</h3>
                <ul className="space-y-2 text-body-md text-dark-600 dark:text-dark-300">
                  <li>Stretch, skew, or rotate the logo</li>
                  <li>Change the colors outside brand guidelines</li>
                  <li>Add effects (shadows, outlines, etc.)</li>
                  <li>Use low-resolution versions</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Media Contacts */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Media Contacts
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {mediaContacts.map((contact) => (
                <div key={contact.name}>
                  <p className="text-body-sm text-dark-400 dark:text-dark-500 mb-1">
                    {contact.name}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <Link2 className="h-4 w-4" />
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
