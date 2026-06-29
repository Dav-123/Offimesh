'use client';
'use client';

import { motion } from 'framer-motion';
import { Check, X, Wifi, WifiOff, Shield, Clock, Smartphone, Users, Building2 } from 'lucide-react';

const comparisons = [
  {
    feature: 'Internet Required',
    traditional: true,
    offimesh: false,
    icon: Wifi,
  },
  {
    feature: 'Works Offline',
    traditional: false,
    offimesh: true,
    icon: WifiOff,
  },
  {
    feature: 'Instant Settlement',
    traditional: false,
    offimesh: true,
    icon: Clock,
  },
  {
    feature: '100% Uptime',
    traditional: false,
    offimesh: true,
    icon: Shield,
  },
  {
    feature: 'Lower Transaction Fees',
    traditional: false,
    offimesh: true,
    icon: Users,
  },
  {
    feature: 'Works in Rural Areas',
    traditional: false,
    offimesh: true,
    icon: Building2,
  },
];

export function Comparison() {
  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-label uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4">
            Why OffiMesh
          </p>
          <h2 className="text-display-md md:text-display-lg font-bold text-dark-900 dark:text-white mb-4">
            Built Different by Design
          </h2>
          <p className="text-body-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            Traditional payment systems fail when connectivity is lost. OffiMesh keeps commerce moving in any condition.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl overflow-hidden"
          >
            <div className="bg-dark-200 dark:bg-dark-800 px-6 py-4">
              <h3 className="text-headline-md font-semibold text-dark-600 dark:text-dark-400">
                Traditional Mobile Payments
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li
                    key={item.feature}
                    className="flex items-center justify-between py-3 border-b border-dark-100 dark:border-dark-700 last:border-0"
                  >
                    <span className="text-body-md text-dark-600 dark:text-dark-400">
                      {item.feature}
                    </span>
                    {item.traditional ? (
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 text-sm">Yes</span>
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-red-500 text-sm">No</span>
                        <X className="h-5 w-5 text-red-500" />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* OffiMesh */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-700 shadow-glow"
          >
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-yellow-400 text-dark-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMMENDED
            </div>

            <div className="px-6 py-4">
              <h3 className="text-headline-md font-semibold text-white">
                OffiMesh
              </h3>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm">
              <ul className="space-y-4">
                {comparisons.map((item) => (
                  <li
                    key={item.feature}
                    className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                  >
                    <span className="text-body-md text-white/90">
                      {item.feature}
                    </span>
                    {item.offimesh ? (
                      <div className="flex items-center gap-2">
                        <span className="text-green-300 text-sm">Yes</span>
                        <Check className="h-5 w-5 text-green-300" />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-red-300 text-sm">No</span>
                        <X className="h-5 w-5 text-red-300" />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
