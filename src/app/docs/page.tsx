import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Book, Code, Zap, Shield, Smartphone, QrCode, Bluetooth, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Developer Docs — OffiMesh',
  description: 'Integrate OffiMesh offline payments into your app. Built at Nomba Dev Career Hackathon.',
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
    ],
  },
  {
    title: 'API Reference',
    items: [
      { name: 'Authentication', href: '/docs/api' },
      { name: 'Endpoints', href: '/docs/api' },
      { name: 'Error Codes', href: '/docs/api' },
    ],
  },
  {
    title: 'Protocols',
    items: [
      { name: 'QR Code Format', href: '/docs/qr-protocol' },
      { name: 'Bluetooth LE', href: '/docs/bluetooth' },
      { name: 'Audio Transfer', href: '/docs/audio' },
    ],
  },
  {
    title: 'Integration',
    items: [
      { name: 'Nomba Settlement', href: '/docs/nomba' },
      { name: 'Offline Sync', href: '/docs/offline-sync' },
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
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <span className="label text-accent mb-4 block">DEVELOPER DOCUMENTATION</span>
            <h1 className="text-display-lg font-serif italic text-paper mb-6">
              Build with OffiMesh
            </h1>
            <p className="text-body-xl text-ink-400">
              Integrate offline payments into your Android app, merchant platform, or fintech product. Built at the Nomba Dev Career Hackathon.
            </p>
          </div>
        </section>

        {/* Quick Start Cards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-headline-lg font-semibold text-paper">
              Choose Your Integration
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickstart.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="glass-card rounded-2xl p-6 hover:border-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-ink-800 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-headline-sm font-semibold text-paper mb-2">
                  {item.title}
                </h3>
                <p className="text-body-sm text-ink-400">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Key Concepts */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12 bg-gradient-to-br from-purple-600 to-indigo-700">
            <h2 className="text-display-sm font-bold text-paper mb-8">
              Key Concepts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Shield className="h-5 w-5 text-paper" />
                </div>
                <h3 className="text-headline-sm font-semibold text-paper mb-2">
                  Offline-First Security
                </h3>
                <p className="text-white/80 text-body-md">
                  Transactions are encrypted end-to-end. Private keys never leave the device. Settlement happens when connectivity returns.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Zap className="h-5 w-5 text-paper" />
                </div>
                <h3 className="text-headline-sm font-semibold text-paper mb-2">
                  Instant Local Settlement
                </h3>
                <p className="text-white/80 text-body-md">
                  Both parties verify the transaction locally. No server round-trip required. Settlement syncs via Nomba gateway.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <CreditCard className="h-5 w-5 text-paper" />
                </div>
                <h3 className="text-headline-sm font-semibold text-paper mb-2">
                  Nomba Integration
                </h3>
                <p className="text-white/80 text-body-md">
                  Seamless fiat conversion and withdrawal through Nomba. Virtual accounts created automatically on registration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
