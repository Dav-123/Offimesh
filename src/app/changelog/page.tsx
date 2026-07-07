import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { Zap, Bug, Shield, Smartphone, ArrowUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Changelog — OffiMesh',
  description: 'Track all updates, improvements, and fixes across OffiMesh releases.',
};

const releases = [
  {
    version: '1.2.0',
    date: 'January 2026',
    tag: 'Latest',
    highlights: [
      'Nomba gateway integration for seamless settlement',
      'Improved QR code scanning with better error correction',
      'New dark mode theme for the merchant dashboard',
    ],
    changes: {
      features: [
        'Settlement status tracking in the app',
        'Push notifications for completed settlements',
        'Transaction receipt generation and sharing',
      ],
      fixes: [
        'Fixed race condition in Bluetooth LE connection',
        'Resolved ANR during large transaction sync',
        'Corrected TZ offset in transaction timestamps',
      ],
      improvements: [
        'Reduced QR scan latency by 40%',
        'Optimized battery usage during Bluetooth transfer',
        'Improved error messages for network failures',
      ],
    },
  },
  {
    version: '1.1.0',
    date: 'October 2025',
    tag: null,
    highlights: [
      'Bluetooth LE peer-to-peer payments enabled',
      'Audio-based data transfer prototype',
    ],
    changes: {
      features: [
        'Bluetooth LE payment channel',
        'Transaction history search and filters',
        'Wallet backup and recovery phrases',
      ],
      fixes: [
        'Fixed crash on Android 8.0 devices',
        'Resolves sync conflicts for concurrent transactions',
      ],
      improvements: [
        'Upgraded encryption to AES-256-GCM',
        'Background sync optimization',
      ],
    },
  },
  {
    version: '1.0.0',
    date: 'July 2025',
    tag: null,
    highlights: [
      'First public release',
      'QR code payments fully functional',
    ],
    changes: {
      features: [
        'QR code generation and scanning',
        'Wallet creation with local key storage',
        'Basic transaction history',
        'Offline verification system',
      ],
      fixes: [],
      improvements: [],
    },
  },
  {
    version: '0.9.0',
    date: 'April 2025',
    tag: 'Beta',
    highlights: [
      'Closed beta with early adopters',
      'Core offline payment protocol finalized',
    ],
    changes: {
      features: [
        'Initial wallet implementation',
        'QR code format specification',
        'Basic transaction signing',
      ],
      fixes: [],
      improvements: [],
    },
  },
];

const iconForType = {
  features: Zap,
  fixes: Bug,
  improvements: ArrowUp,
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-display-md font-bold text-dark-900 dark:text-white mb-4">
              Changelog
            </h1>
            <p className="text-body-lg text-dark-500 dark:text-dark-400">
              Track all updates, improvements, and fixes across OffiMesh releases.
            </p>
          </motion.div>

          <div className="space-y-12">
            {releases.map((release, i) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Version Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Smartphone className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-headline-lg font-bold text-dark-900 dark:text-white">
                        v{release.version}
                      </h2>
                      {release.tag && (
                        <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold">
                          {release.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-body-sm text-dark-400 dark:text-dark-500">
                      Released {release.date}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                {release.highlights.length > 0 && (
                  <div className="glass-card rounded-2xl p-6 mb-6 bg-gradient-to-r from-purple-600 to-indigo-600">
                    <h3 className="font-semibold text-white mb-3">Highlights</h3>
                    <ul className="space-y-2">
                      {release.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-white/90 text-body-md">
                          <Zap className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Detailed Changes */}
                <div className="space-y-4">
                  {(Object.entries(release.changes) as [keyof typeof release.changes, string[]][]).map(([type, items]) => {
                    if (items.length === 0) return null;
                    const Icon = iconForType[type];
                    const colors = {
                      features: 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30',
                      fixes: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30',
                      improvements: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30',
                    };
                    return (
                      <div key={type} className="glass-card rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-6 h-6 rounded ${colors[type]} flex items-center justify-center`}>
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <h4 className="font-semibold text-dark-900 dark:text-white capitalize">
                            {type}
                          </h4>
                        </div>
                        <ul className="space-y-1 pl-8">
                          {items.map((item) => (
                            <li key={item} className="text-body-md text-dark-600 dark:text-dark-300">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
