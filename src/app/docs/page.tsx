import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { Book, Code, Zap, Shield, Smartphone, QrCode, Bluetooth, CreditCard } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developer Docs — OffiMesh',
  description: 'Integrate OffiMesh offline payments into your app with our comprehensive guides and API reference.',
};

const quickstart = [
  { icon: Smartphone, title: 'Android SDK', description: 'Integrate offline payments into your Android app', href: '/docs/android-sdk' },
  { icon: Code, title: 'REST API', description: 'Server-side integration for merchants', href: '/docs/api' },
  { icon: QrCode, title: 'QR Protocol', description: 'Generate and scan OffiMesh QR codes', href: '/docs/qr-protocol' },
  { icon: Bluetooth, title: 'Bluetooth LE', description: 'Peer-to-peer data transfer specification', href: '/docs/bluetooth' },
];

const guides = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Quick Start Guide', href: '/docs/quickstart' },
      { name: 'Architecture Overview', href: '/docs/architecture' },
      { name: 'Security Model', href: '/docs/security' },
      { name: 'Offline-First Concepts', href: '/docs/offline-first' },
    ],
  },
  {
    title: 'Android SDK',
    items: [
      { name: 'Installation', href: '/docs/android/installation' },
      { name: 'Wallet Creation', href: '/docs/android/wallet' },
      { name: 'Sending Payments', href: '/docs/android/send' },
      { name: 'Receiving Payments', href: '/docs/android/receive' },
      { name: 'Transaction History', href: '/docs/android/history' },
    ],
  },
  {
    title: 'Merchant Integration',
    items: [
      { name: 'Merchant Onboarding', href: '/docs/merchant/onboarding' },
      { name: 'Payment Acceptance', href: '/docs/merchant/accept' },
      { name: 'Settlement Flow', href: '/docs/merchant/settlement' },
      { name: 'Nomba Webhook', href: '/docs/merchant/webhooks' },
    ],
  },
  {
    title: 'Protocols',
    items: [
      { name: 'QR Code Format', href: '/docs/protocols/qr' },
      { name: 'Bluetooth Packet', href: '/docs/protocols/bluetooth' },
      { name: 'Audio Transfer', href: '/docs/protocols/audio' },
      { name: 'Encryption Layer', href: '/docs/protocols/encryption' },
    ],
  },
];

export default function DocsPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-body-sm mb-6">
              <Book className="h-4 w-4" />
              Developer Documentation
            </div>
            <h1 className="text-display-lg font-bold text-dark-900 dark:text-white mb-6">
              Build with OffiMesh
            </h1>
            <p className="text-body-xl text-dark-500 dark:text-dark-400">
              Integrate offline payments into your Android app, merchant platform, or fintech product. Everything you need to accept payments without internet.
            </p>
          </motion.div>
        </section>

        {/* Quick Start Cards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white">
              Choose Your Integration
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickstart.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-purple-300 dark:hover:border-purple-700 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                  <item.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-body-sm text-dark-500 dark:text-dark-400">
                  {item.description}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-8">
              Documentation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guides.map((section) => (
                <div key={section.title} className="glass-card rounded-2xl p-6">
                  <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-body-md text-dark-500 dark:text-dark-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Key Concepts */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 bg-gradient-to-br from-purple-600 to-indigo-700"
          >
            <h2 className="text-display-sm font-bold text-white mb-8">
              Key Concepts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-headline-sm font-semibold text-white mb-2">
                  Offline-First Security
                </h3>
                <p className="text-white/80 text-body-md">
                  Transactions are encrypted end-to-end. Private keys never leave the device. Settlement happens when connectivity returns.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-headline-sm font-semibold text-white mb-2">
                  Instant Local Settlement
                </h3>
                <p className="text-white/80 text-body-md">
                  Both parties verify the transaction locally. No server round-trip required. Settlement syncs via Nomba gateway.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-headline-sm font-semibold text-white mb-2">
                  Nomba Integration
                </h3>
                <p className="text-white/80 text-body-md">
                  Seamless fiat conversion and withdrawal through Nomba. Supports bank transfers and mobile money.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
