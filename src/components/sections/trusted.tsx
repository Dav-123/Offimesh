'use client';

import { motion } from 'framer-motion';
import { Wifi, Server, Shield, CloudOff, Globe, CreditCard } from 'lucide-react';

const pillars = [
  {
    icon: CloudOff,
    title: 'Offline-First Architecture',
    description: 'Built from the ground up to handle transactions without any internet connectivity. Every interaction works seamlessly offline.',
  },
  {
    icon: Globe,
    title: 'Built for Africa',
    description: 'Designed specifically for African markets, understanding the unique connectivity challenges and payment habits.',
  },
  {
    icon: Server,
    title: 'Reliable Infrastructure',
    description: 'Robust mesh network that maintains transaction integrity even with poor or intermittent connectivity.',
  },
  {
    icon: CreditCard,
    title: 'Modern Payment Stack',
    description: 'Integrates with Nomba for automatic settlement, providing seamless reconciliation when connectivity returns.',
  },
];

export function Trusted() {
  return (
    <section className="py-16 md:py-24 bg-dark-50/50 dark:bg-dark-900/50 border-y border-dark-200 dark:border-dark-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-label uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4">
            Trusted Infrastructure
          </p>
          <h2 className="text-display-md md:text-display-lg font-bold text-dark-900 dark:text-white mb-4">
            Payments Without Boundaries
          </h2>
          <p className="text-body-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            OffiMesh redefines digital payments by prioritizing reliability and accessibility in regions where connectivity is not guaranteed.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card h-full p-6 rounded-2xl card-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <pillar.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-headline-md font-semibold text-dark-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-body-sm text-dark-500 dark:text-dark-400">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
