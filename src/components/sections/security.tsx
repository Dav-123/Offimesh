'use client';
'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Fingerprint, Eye, RefreshCw, Database, Key, CheckCircle2 } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All transaction data is encrypted from sender to receiver. Not even our servers can read the content.',
  },
  {
    icon: Key,
    title: 'Digital Signatures',
    description: 'Every transaction is signed with ECDSA cryptography, ensuring authenticity and non-repudiation.',
  },
  {
    icon: Eye,
    title: 'Tamper Detection',
    description: 'Cryptographic hashes verify transaction integrity. Any modification attempt is immediately detected.',
  },
  {
    icon: Fingerprint,
    title: 'Offline Verification',
    description: 'Verify transaction authenticity without internet using embedded cryptographic proofs.',
  },
  {
    icon: RefreshCw,
    title: 'Replay Attack Protection',
    description: 'Unique nonce values and timestamps prevent replay attacks even in offline scenarios.',
  },
  {
    icon: Database,
    title: 'Secure Device Storage',
    description: 'Private keys stored in device secure enclave (TEE), never exposed to apps or cloud.',
  },
];

export function Security() {
  return (
    <section id="security" className="relative py-16 md:py-24 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-purple-950 to-dark-900" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-dots opacity-10" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Concentric rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-purple-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-16 rounded-full border border-indigo-500/40"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-24 rounded-full border border-fuchsia-500/50"
              />

              {/* Center shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-glow">
                  <Shield className="h-16 w-16 text-white" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="text-white text-body-sm">256-bit Encryption</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="text-white text-body-sm">Bank-Grade Security</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-label uppercase tracking-widest text-purple-400 mb-4">
              Bank-Grade Security
            </p>
            <h2 className="text-display-md md:text-display-lg font-bold text-white mb-6">
              Cryptographic Integrity You Can Trust
            </h2>
            <p className="text-body-lg text-dark-300 mb-8">
              Every transaction is protected by military-grade encryption and cryptographic signatures. Your funds remain secure even in complete offline scenarios.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/50 to-indigo-600/50 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-headline-sm font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-body-sm text-dark-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
