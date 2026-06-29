'use client';

import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How does OffiMesh work without internet?',
    answer: 'OffiMesh uses local communication technologies like QR codes, Bluetooth Low Energy (BLE), and audio signals to transfer payment data between devices. Transactions are signed and stored locally, then automatically sync to our servers and settle through Nomba when connectivity returns.',
  },
  {
    question: 'Is my money safe when paying offline?',
    answer: 'Absolutely. Every transaction is protected by end-to-end encryption and digital signatures. Your private keys never leave your devices secure enclave. Even in offline mode, all transactions are cryptographically signed and tamper-proof.',
  },
  {
    question: 'What is Nomba and how does the integration work?',
    answer: 'Nomba is a leading payment infrastructure provider in Africa. When your device reconnects to the internet, OffiMesh automatically syncs pending transactions to Nomba for bank settlement. This ensures your payments are properly reconciled and funds are transferred to the correct accounts.',
  },
  {
    question: 'How do Bluetooth payments work?',
    answer: 'Bluetooth payments use BLE (Bluetooth Low Energy) to establish a secure connection between two devices. The sender and receiver exchange encrypted payment data directly without needing internet. The整个过程 is instant and works within a range of approximately 10 meters.',
  },
  {
    question: 'What happens if both devices lose connectivity?',
    answer: 'Both devices will store the signed transaction in their local encrypted ledger. When either device regains connectivity, it will sync the transaction to our servers for settlement. The transaction remains valid and will eventually complete.',
  },
  {
    question: 'Which devices are supported?',
    answer: 'OffiMesh currently supports Android devices running Android 8.0 or higher. We are actively developing iOS support and expect to release it soon. The app works on smartphones and tablets.',
  },
  {
    question: 'How does OffiMesh prevent double-spending offline?',
    answer: 'We use a combination of local ledger verification, transaction nonce values, and device-to-device validation. Each transaction has a unique identifier that prevents it from being processed twice, even in completely offline scenarios.',
  },
  {
    question: 'Are there any transaction fees?',
    answer: 'OffiMesh charges a small fee only when transactions are settled through Nomba. Peer-to-peer offline transactions have minimal fees since they do not require cloud infrastructure until sync.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white dark:bg-dark-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-label uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4">
            FAQ
          </p>
          <h2 className="text-display-md md:text-display-lg font-bold text-dark-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-dark-500 dark:text-dark-400">
            Everything you need to know about OffiMesh and offline payments.
          </p>
        </motion.div>

        {/* Accordion */}
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Accordion.Item value={`item-${index}`} className="glass-card rounded-2xl overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="group w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-dark-50 dark:hover:bg-dark-800/50 transition-colors">
                    <span className="text-headline-sm font-semibold text-dark-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown className="h-5 w-5 text-purple-600 dark:text-purple-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-5">
                  <div className="text-body-md text-dark-500 dark:text-dark-400 border-t border-dark-100 dark:border-dark-700 pt-4">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
