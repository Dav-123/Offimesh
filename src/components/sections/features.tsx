'use client';

import { motion } from 'framer-motion';
import {
  QrCode,
  Bluetooth,
  Volume2,
  RefreshCw,
  Database,
  Store,
  User,
  Zap,
  Link2,
  History,
  Lock,
  Shield,
} from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: 'Offline QR Payments',
    description: 'Generate and scan dynamic QR codes for instant peer-to-peer transfers without any network connection.',
  },
  {
    icon: Bluetooth,
    title: 'Bluetooth Payments',
    description: 'Transfer funds directly between devices using secure Bluetooth Low Energy (BLE) communication.',
  },
  {
    icon: Volume2,
    title: 'Audio Payment Support',
    description: 'Transmit payment data via audio signals for environments where visual interaction is limited.',
  },
  {
    icon: RefreshCw,
    title: 'Automatic Sync',
    description: 'Transactions automatically sync and reconcile with the cloud ledger once connectivity is restored.',
  },
  {
    icon: Database,
    title: 'Secure Local Ledger',
    description: 'All transactions are cryptographically secured in a local ledger on your device.',
  },
  {
    icon: Store,
    title: 'Merchant Mode',
    description: 'Dedicated POS interface optimized for high-volume retail transactions with detailed reporting.',
  },
  {
    icon: User,
    title: 'Customer Mode',
    description: 'Streamlined payment experience for customers to scan, pay, and track transaction history.',
  },
  {
    icon: Zap,
    title: 'Fast Settlement',
    description: 'Near-instant settlement through Nomba integration when connectivity returns.',
  },
  {
    icon: Link2,
    title: 'Nomba Integration',
    description: 'Seamlessly connects with Nomba payment infrastructure for reliable bank settlements.',
  },
  {
    icon: History,
    title: 'Offline History',
    description: 'Complete transaction history available offline with full verification capabilities.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'End-to-end encryption ensures only sender and receiver can access transaction details.',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Elliptic curve cryptography and tamper detection protect every transaction.',
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding bg-white dark:bg-dark-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-label uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4">
            Features
          </p>
          <h2 className="text-display-md md:text-display-lg font-bold text-dark-900 dark:text-white mb-4">
            Everything You Need for Offline Payments
          </h2>
          <p className="text-body-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            A comprehensive suite of tools designed to keep commerce moving even when the network goes down.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.floor(index / 4) * 0.1 + (index % 4) * 0.05 }}
              className="group relative"
            >
              <div className="glass-card h-full p-6 rounded-2xl card-hover">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-indigo-600 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-dark-500 dark:text-dark-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
