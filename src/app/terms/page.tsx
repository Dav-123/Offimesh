import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Terms of Service — OffiMesh',
  description: 'OffiMesh terms of service and user agreement.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By downloading, installing, or using OffiMesh, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.

These terms constitute a legally binding agreement between you and OffiMesh regarding your use of our offline payment application and related services.`,
  },
  {
    title: '2. Description of Service',
    content: `OffiMesh is an offline-first digital payment application that enables:

• Peer-to-peer payments via QR codes and Bluetooth
• Merchant transactions without internet connectivity
• Settlement through the Nomba payment gateway
• Wallet management and transaction history

The service is provided "as is" and we make no guarantees about uptime, availability, or functionality of any specific feature.`,
  },
  {
    title: '3. User Responsibilities',
    content: `You agree to:

• Provide accurate information when required
• Keep your wallet and private keys secure
• Not use OffiMesh for illegal activities
• Not attempt to reverse engineer or exploit vulnerabilities
• Report suspected fraud or security issues immediately
• comply with all applicable local laws and regulations

You are responsible for all transactions initiated from your device.`,
  },
  {
    title: '4. Account and Wallet',
    content: `• Your wallet is stored locally on your device
• You are solely responsible for backing up your wallet
• Loss of device without backup means loss of funds
• We cannot recover lost wallet keys
• You may close your account at any time by contacting us

Maximum wallet balance and transaction limits may apply based on regulatory requirements.`,
  },
  {
    title: '5. Fees and Payments',
    content: `• OffiMesh charges a small fee per transaction (displayed before confirmation)
• Nomba gateway fees apply for settlement and withdrawal
• Fee structure is transparent and shown in the app
• We reserve the right to update fees with 30 days notice

Fees support infrastructure, security, and continued development.`,
  },
  {
    title: '6. Prohibited Activities',
    content: `You may NOT use OffiMesh to:

• Facilitate money laundering or terrorism financing
• Purchase illegal goods or services
• Evade taxes or financial regulations
• Scam, defraud, or deceive other users
• Spam or harass merchants or recipients
• Create multiple accounts to circumvent limits

Violations may result in account suspension and reporting to authorities.`,
  },
  {
    title: '7. Dispute Resolution',
    content: `For transaction disputes:

1. Contact the other party directly first
2. If unresolved, submit a dispute through the app within 14 days
3. We will investigate and provide a determination within 30 days
4. Our decision is final but does not override your legal rights

For offline transactions, evidence may include transaction receipts and device logs.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the maximum extent permitted by law:

• OffiMesh is not liable for losses from lost devices or compromised keys
• We are not liable for losses from user negligence
• Total liability is limited to the value of transactions in dispute
• We are not liable for third-party service failures (e.g., Nomba)

This limitation applies to direct, indirect, incidental, and consequential damages.`,
  },
  {
    title: '9. Intellectual Property',
    content: `OffiMesh and its associated logos, designs, and code are owned by OffiMesh. You may:

• Use the app for its intended purpose
• Share screenshots for legitimate purposes

You may NOT:
• Copy, modify, or distribute our source code
• Use our branding without permission
• Create derivative works without a license`,
  },
  {
    title: '10. Termination',
    content: `We may suspend or terminate your access if you:

• Violate these terms
• Engage in fraudulent activity
• Remain inactive for 24+ months

You may terminate your account at any time. After termination:

• Your data will be deleted within 90 days
• Pending transactions will be completed or refunded
• You will not receive a refund for unused transaction credits`,
  },
  {
    title: '11. Changes to Terms',
    content: `We may update these terms periodically. Major changes will be:

• Announced in-app with 30 days notice
• Posted to this page with an updated date
• Emailed to registered users

Continued use after changes constitutes acceptance.`,
  },
  {
    title: '12. Governing Law',
    content: `These terms are governed by the laws of Nigeria. Disputes will be resolved in Nigerian courts unless otherwise required by local consumer protection laws.

Last updated: January 2026`,
  },
];

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-body-lg text-dark-500 dark:text-dark-400">
              By using OffiMesh, you agree to these terms. Please read them carefully before using our services. Last updated: January 2026.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
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
            transition={{ delay: 0.4 }}
            className="mt-12 glass-card rounded-2xl p-6"
          >
            <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-2">
              Questions About Terms?
            </h3>
            <p className="text-body-md text-dark-500 dark:text-dark-400">
              Contact us at{' '}
              <a href="mailto:legal@offimesh.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                legal@offimesh.com
              </a>
              {' '}for clarification on any section.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
