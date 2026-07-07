import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Cookies Policy — OffiMesh',
  description: 'OffiMesh cookies policy - how we use cookies and similar technologies.',
};

const sections = [
  {
    title: '1. What Are Cookies?',
    content: `Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and provide a better experience. OffiMesh uses cookies minimally and transparently.`,
  },
  {
    title: '2. Cookies We Use',
    content: `Essential Cookies (Always Active):
• Session cookies for keeping you logged in
• Security cookies for fraud prevention
• Language and region preferences

Analytics Cookies (Optional, Opt-in):
• Page view tracking (anonymized)
• Error logging for debugging
• Performance metrics

We do NOT use:
• Advertising cookies
• Third-party tracking cookies
• Social media integration cookies
• Cross-site tracking`,
  },
  {
    title: '3. Third-Party Cookies',
    content: `OffiMesh integrates with Nomba payment gateway for settlements. Nomba may set its own cookies when you interact with their services. We recommend reviewing Nomba's privacy policy for details.

No other third parties set cookies through OffiMesh.`,
  },
  {
    title: '4. Offline-First Approach',
    content: `Since OffiMesh is primarily a mobile app that works offline, we minimize our use of cookies and server-side tracking. Most of your data stays on your device.

When you access our website (offimesh.com), standard web cookies may be used for session management and analytics.`,
  },
  {
    title: '5. Managing Cookies',
    content: `You can control cookies through:

• Your browser settings (block, delete, or prompt for cookies)
• Device settings (mobile app permissions)
• Our in-app privacy settings

Disabling essential cookies may affect app functionality. Analytics cookies are entirely optional.`,
  },
  {
    title: '6. Cookie Duration',
    content: `• Session cookies expire when you close the app/browser
• Persistent security cookies last up to 90 days
• Analytics cookies expire after 12 months
• You can clear all cookies at any time`,
  },
  {
    title: '7. Updates to This Policy',
    content: `We may update this policy as our services evolve. Changes will be posted here with an updated date.

Last updated: January 2026`,
  },
];

export default function CookiesPage() {
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
              Cookies Policy
            </h1>
            <p className="text-body-lg text-dark-500 dark:text-dark-400">
              This policy explains how OffiMesh uses cookies and similar technologies. We believe in minimal data collection and maximum transparency. Last updated: January 2026.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
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
              Questions About Cookies?
            </h3>
            <p className="text-body-md text-dark-500 dark:text-dark-400">
              Contact us at{' '}
              <a href="mailto:privacy@offimesh.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                privacy@offimesh.com
              </a>
              {' '}for any questions about our cookie usage.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
