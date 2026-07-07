import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Shield, Smartphone, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — OffiMesh',
  description: 'Learn about OffiMesh mission to bring offline payments to Africa. Building financial inclusion for the unbanked.',
};

const values = [
  {
    icon: Globe,
    title: 'Financial Inclusion',
    description: 'Bringing digital payments to the 350M+ Africans without reliable internet access.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Cryptographic security that works offline. Every transaction is encrypted and verified.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Built by Africans, for Africans. Open source and community-focused development.',
  },
  {
    icon: Smartphone,
    title: 'Offline-First',
    description: 'No internet required. Pay anywhere, anytime with QR codes and Bluetooth.',
  },
  {
    icon: Zap,
    title: 'Instant Settlement',
    description: 'Transactions settle instantly via Nomba gateway when connectivity returns.',
  },
  {
    icon: Target,
    title: 'Simplicity',
    description: 'Clean UX that works for everyone—from merchants to rural users.',
  },
];

const timeline = [
  { year: '2025 Q1', event: 'Initial concept and research on offline payment infrastructure' },
  { year: '2025 Q2', event: 'Core protocol development and Bluetooth LE integration' },
  { year: '2025 Q3', event: 'Android app beta with QR code payments' },
  { year: '2025 Q4', event: 'Nomba gateway integration and settlement flow' },
  { year: '2026 Q1', event: 'Production launch and first real-world transactions' },
  { year: '2026 Q2', event: 'Hackathon submission and investor pitch' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-16">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-display-lg font-bold text-dark-900 dark:text-white mb-6">
              About OffiMesh
            </h1>
            <p className="text-body-xl text-dark-500 dark:text-dark-400">
              We are building the infrastructure for offline-first payments in Africa, enabling secure digital transactions regardless of internet connectivity. Our mission is simple: financial inclusion for everyone.
            </p>
          </motion.div>
        </section>

        {/* Mission */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-display-sm font-bold text-dark-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-body-lg text-dark-500 dark:text-dark-400 mb-6">
                  Over 60% of Africa&apos;s population lacks reliable internet access, yet digital payments require constant connectivity. OffiMesh breaks this barrier by enabling fully offline transactions using QR codes, Bluetooth, and audio-based data transfer.
                </p>
                <p className="text-body-lg text-dark-500 dark:text-dark-400">
                  We believe that access to digital financial services shouldn&apos;t depend on network coverage. Every person deserves the freedom to pay and receive money anywhere.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-display-lg font-bold mb-2">350M+</div>
                    <p className="text-body-lg opacity-80">Africans without reliable internet can now participate in digital payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-display-md font-bold text-dark-900 dark:text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-body-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              Our values guide every decision we make in building OffiMesh.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-headline-md font-semibold text-dark-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-body-md text-dark-500 dark:text-dark-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-display-md font-bold text-dark-900 dark:text-white mb-4">
              Our Journey
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold text-body-sm">
                    {item.year.split(' ')[1]}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-purple-200 dark:bg-purple-800" />
                  )}
                </div>
                <div className="pt-2">
                  <p className="text-label text-purple-600 dark:text-purple-400 mb-1">{item.year}</p>
                  <p className="text-body-md text-dark-600 dark:text-dark-300">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
