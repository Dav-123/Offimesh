'use client';
'use client';

import { motion } from 'framer-motion';
import {
  CreditCard,
  QrCode,
  Smartphone,
  Lock,
  Wifi,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: CreditCard,
    title: 'Merchant Requests Payment',
    description: 'Merchant generates a payment request on their OffiMesh app, creating a unique transaction ID.',
  },
  {
    step: 2,
    icon: QrCode,
    title: 'Customer Scans QR/BLE',
    description: 'Customer scans the QR code or connects via Bluetooth to receive payment details.',
  },
  {
    step: 3,
    icon: Lock,
    title: 'Payment is Signed Locally',
    description: 'Customer authorizes payment with secure PIN/biometric. Transaction is cryptographically signed on-device.',
  },
  {
    step: 4,
    icon: Smartphone,
    title: 'Stored Securely Offline',
    description: 'Signed transaction is stored in encrypted local ledger on both devices with tamper detection.',
  },
  {
    step: 5,
    icon: Wifi,
    title: 'Internet Returns',
    description: 'When any device in the network regains connectivity, pending transactions are identified.',
  },
  {
    step: 6,
    icon: RefreshCw,
    title: 'Settles Through Nomba',
    description: 'Transactions automatically sync to cloud and initiate settlement via Nomba payment gateway.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-dark-50 dark:bg-dark-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-label uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4">
            How It Works
          </p>
          <h2 className="text-display-md md:text-display-lg font-bold text-dark-900 dark:text-white mb-4">
            From Request to Settlement
          </h2>
          <p className="text-body-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            See how OffiMesh enables secure offline payments that automatically reconcile when connectivity returns.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-fuchsia-600 rounded-full" />

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="lg:mb-8 mb-4">
                  <div className="w-16 h-16 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-glow relative z-10">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div className="glass-card p-5 rounded-2xl lg:border-2 lg:border-transparent lg:hover:border-purple-200 dark:lg:hover:border-purple-800 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-label text-purple-600 dark:text-purple-400">
                      Step {item.step}
                    </span>
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block h-4 w-4 text-dark-300 dark:text-dark-600 absolute -right-4 top-1/2 -translate-y-1/2" />
                    )}
                  </div>
                  <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-dark-500 dark:text-dark-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
