import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Privacy Policy — OffiMesh',
  description: 'OffiMesh privacy policy. Learn how we protect your data and maintain your privacy.',
};

const sections = [
  {
    title: '1. Information We Collect',
    content: `When you use OffiMesh, we collect information necessary to provide our services:

• Transaction Data: Amount, timestamp, and merchant/recipient identifiers for each payment
• Device Information: Device model, OS version, and unique device identifiers for fraud prevention
• Wallet Data: Your balance and transaction history, encrypted and stored securely
• Location Data: Approximate location for fraud detection (optional, can be disabled)

We do NOT collect:
• Personal identity documents (no ID required for basic usage)
• Contacts or address book information
• Photos or media files
• Browsing history`,
  },
  {
    title: '2. How We Use Your Information',
    content: `Your data is used solely for:

• Processing and settling your transactions via Nomba gateway
• Preventing fraud and securing your wallet
• Providing customer support when you reach out
• Improving our services with anonymized analytics

We never sell your data to third parties. We never share your transaction history for marketing purposes.`,
  },
  {
    title: '3. Offline-First Privacy',
    content: `OffiMesh is designed to work without internet. Here is what that means for your privacy:

• Most transactions happen locally on your device
• Data only syncs to our servers when settlement occurs via Nomba
• Your wallet private keys never leave your device
• Offline transactions are encrypted end-to-end between payer and payee

This architecture minimizes data exposure while ensuring security.`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures:

• AES-256 encryption for all stored data
• TLS 1.3 for all network communications
• Secure Enclave / KeyStore for private key storage
• Regular security audits and penetration testing
• Bug bounty program for responsible disclosure

Even if our servers were compromised, attackers cannot spend your funds without your device.`,
  },
  {
    title: '5. Your Rights',
    content: `You have the right to:

• Access: Request a copy of all data we hold about you
• Deletion: Delete your account and all associated data
• Portability: Export your transaction history
• Correction: Update inaccurate information
• Restriction: Limit how we process your data

To exercise these rights, contact us at privacy@offimesh.com`,
  },
  {
    title: '6. Third-Party Services',
    content: `OffiMesh integrates with:

• Nomba Payment Gateway: For settlement and fiat conversion. Nomba has its own privacy policy.
• No other third parties have access to your data.

We do not use analytics services that track users across apps.`,
  },
  {
    title: '7. Data Retention',
    content: `• Active accounts: All transaction data retained
• Closed accounts: Data deleted within 90 days
• Fraud prevention: Anonymized patterns retained for 2 years
• Legal requirements: Some data may be retained longer if required by law`,
  },
  {
    title: '8. Children\'s Privacy',
    content: `OffiMesh is not intended for users under 16. We do not knowingly collect data from children. If you believe a child has used our service, contact us immediately.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this policy as our service evolves. Major changes will be announced in-app and via email. Continued use after changes constitutes acceptance.

Last updated: January 2026`,
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-body-lg text-dark-500 dark:text-dark-400">
              Your privacy is fundamental to OffiMesh. This policy explains how we collect, use, and protect your information. Last updated: January 2026.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <h2 className="text-headline-md font-semibold text-dark-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <div className="text-body-md text-dark-600 dark:text-dark-300 whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 glass-card rounded-2xl p-6"
          >
            <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-2">
              Questions?
            </h3>
            <p className="text-body-md text-dark-500 dark:text-dark-400">
              Contact us at{' '}
              <a href="mailto:privacy@offimesh.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                privacy@offimesh.com
              </a>
              {' '}for any privacy-related inquiries.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
