import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Bug, Eye, FileCode, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security Policy — OffiMesh',
  description: 'OffiMesh security policy and vulnerability disclosure guidelines.',
};

const principles = [
  {
    icon: Lock,
    title: 'Encryption First',
    description: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Private keys never leave your device.',
  },
  {
    icon: Eye,
    title: 'Zero Knowledge',
    description: 'We cannot access your wallet keys or view transaction contents without your consent.',
  },
  {
    icon: Shield,
    title: 'Defense in Depth',
    description: 'Multiple security layers including rate limiting, fraud detection, and transaction signing.',
  },
  {
    icon: FileCode,
    title: 'Open Source',
    description: 'Core protocols are open for security review. Transparency builds trust.',
  },
];

const scopeItems = [
  'api.offimesh.com and related API endpoints',
  'OffiMesh Android application (official releases)',
  'QR code generation and parsing logic',
  'Bluetooth LE data transfer implementation',
  'Wallet encryption and key management',
];

const outOfScope = [
  'Social engineering attacks',
  'Physical device theft (mitigated by device-level security)',
  'Denial of service attacks',
  'Third-party services (Nomba gateway - report to them directly)',
  'Unreleased or beta features',
];

export default function SecurityPolicyPage() {
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
              Security Policy
            </h1>
            <p className="text-body-lg text-dark-500 dark:text-dark-400">
              Security is foundational to OffiMesh. This policy outlines our security practices and how to responsibly report vulnerabilities. Last updated: January 2026.
            </p>
          </motion.div>

          {/* Security Principles */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Our Security Principles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, i) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                    <principle.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-body-md text-dark-500 dark:text-dark-400">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Vulnerability Disclosure */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Bug className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white">
                Responsible Disclosure
              </h2>
            </div>

            <div className="glass-card rounded-3xl p-6 md:p-8">
              <p className="text-body-lg text-dark-600 dark:text-dark-300 mb-6">
                We welcome security researchers to help us improve OffiMesh. If you discover a vulnerability, please follow this process:
              </p>

              <ol className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 font-semibold">1</span>
                  <div>
                    <h4 className="font-semibold text-dark-900 dark:text-white">Do not exploit the vulnerability</h4>
                    <p className="text-body-md text-dark-500 dark:text-dark-400">Test only with your own accounts and data.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 font-semibold">2</span>
                  <div>
                    <h4 className="font-semibold text-dark-900 dark:text-white">Report within 24 hours of discovery</h4>
                    <p className="text-body-md text-dark-500 dark:text-dark-400">Email security@offimesh.com with full details.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 font-semibold">3</span>
                  <div>
                    <h4 className="font-semibold text-dark-900 dark:text-white">Wait 90 days before public disclosure</h4>
                    <p className="text-body-md text-dark-500 dark:text-dark-400">Give us time to fix and deploy the patch.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 font-semibold">4</span>
                  <div>
                    <h4 className="font-semibold text-dark-900 dark:text-white">Provide detailed reproduction steps</h4>
                    <p className="text-body-md text-dark-500 dark:text-dark-400">Include screenshots, code snippets, and impact assessment.</p>
                  </div>
                </li>
              </ol>

              <div className="border-t border-dark-200 dark:border-dark-700 pt-6">
                <h3 className="font-semibold text-dark-900 dark:text-white mb-2">What to Include:</h3>
                <ul className="text-body-md text-dark-500 dark:text-dark-400 space-y-1">
                  <li>• Vulnerability type (XSS, SQLi, auth bypass, etc.)</li>
                  <li>• Affected components and versions</li>
                  <li>• Step-by-step reproduction guide</li>
                  <li>• Proof of concept (if safe)</li>
                  <li>• Your contact information for follow-up</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Scope */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Scope
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                <h3 className="font-semibold text-dark-900 dark:text-white">In Scope</h3>
                </div>
                <ul className="text-body-md text-dark-600 dark:text-dark-300 space-y-2">
                  {scopeItems.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <h3 className="font-semibold text-dark-900 dark:text-white">Out of Scope</h3>
                </div>
                <ul className="text-body-md text-dark-500 dark:text-dark-400 space-y-2">
                  {outOfScope.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Bug Bounty */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-3xl p-6 md:p-8 bg-gradient-to-br from-purple-600 to-indigo-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-white" />
              <h2 className="text-headline-lg font-semibold text-white">
                Bug Bounty Rewards
              </h2>
            </div>
            <p className="text-white/90 text-body-lg mb-6">
              We offer rewards for valid vulnerability reports based on severity:
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-white/10">
                <span className="text-white font-medium">Critical</span>
                <span className="text-white font-semibold">Up to $5,000</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-white/10">
                <span className="text-white font-medium">High</span>
                <span className="text-white font-semibold">Up to $2,000</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-white/10">
                <span className="text-white font-medium">Medium</span>
                <span className="text-white font-semibold">Up to $500</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-white/10">
                <span className="text-white font-medium">Low</span>
                <span className="text-white font-semibold">Swag + Recognition</span>
              </div>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 glass-card rounded-2xl p-6"
          >
            <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-2">
              Contact Our Security Team
            </h3>
            <p className="text-body-md text-dark-500 dark:text-dark-400 mb-4">
              Report vulnerabilities securely at{' '}
              <a href="mailto:security@offimesh.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                security@offimesh.com
              </a>
            </p>
            <p className="text-body-sm text-dark-400 dark:text-dark-500">
              We respond to all valid reports within 48 hours. PGP key available upon request.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
