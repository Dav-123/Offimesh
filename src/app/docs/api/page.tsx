import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Key, ArrowRight, CheckCircle, AlertCircle, Copy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'API Reference — OffiMesh',
  description: 'Complete API documentation for integrating OffiMesh payment functionality.',
};

const endpoints = [
  {
    method: 'POST',
    path: '/v1/transactions/create',
    description: 'Create a new offline transaction record',
    auth: 'Merchant Secret Key',
  },
  {
    method: 'GET',
    path: '/v1/transactions/:id',
    description: 'Retrieve transaction details and status',
    auth: 'Merchant Secret Key',
  },
  {
    method: 'POST',
    path: '/v1/settlements/initiate',
    description: 'Initiate settlement to Nomba gateway',
    auth: 'Merchant Secret Key',
  },
  {
    method: 'GET',
    path: '/v1/wallet/balance',
    description: 'Get merchant wallet balance',
    auth: 'Merchant Secret Key',
  },
  {
    method: 'GET',
    path: '/v1/merchant/profile',
    description: 'Retrieve merchant profile and settings',
    auth: 'Merchant Secret Key',
  },
];

const errors = [
  { code: 400, message: 'Bad Request — Invalid parameters', reason: 'Missing required fields or malformed JSON' },
  { code: 401, message: 'Unauthorized — Invalid API key', reason: 'API key is missing, invalid, or revoked' },
  { code: 403, message: 'Forbidden — Insufficient permissions', reason: 'API key lacks required scope' },
  { code: 404, message: 'Not Found — Resource does not exist', reason: 'Transaction ID or endpoint is invalid' },
  { code: 429, message: 'Too Many Requests — Rate limited', reason: 'Exceeded 100 requests per minute' },
  { code: 500, message: 'Internal Server Error', reason: 'Unexpected server error — contact support' },
];

export default function ApiReferencePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div
            className="mb-12"
          >
            <h1 className="text-display-md font-bold text-dark-900 dark:text-white mb-4">
              API Reference
            </h1>
            <p className="text-body-lg text-dark-500 dark:text-dark-400">
              REST API for server-side integration with OffiMesh. Use these endpoints to create transactions, check status, and manage settlements.
            </p>
          </div>

          {/* Authentication */}
          <section
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Key className="h-6 w-6 text-purple-600" />
              <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white">
                Authentication
              </h2>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-body-md text-dark-600 dark:text-dark-300 mb-4">
                All API requests require a Bearer token in the Authorization header. Get your API key from the merchant dashboard.
              </p>
              <div className="bg-dark-900 dark:bg-dark-950 rounded-xl p-4 font-mono text-sm text-green-400 overflow-x-auto">
                <div className="text-dark-400">Authorization: Bearer sk_live_...</div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-body-sm text-dark-400 dark:text-dark-500">
                <AlertCircle className="h-4 w-4" />
                Use sk_test_... for sandbox testing. Never expose secret keys in client-side code.
              </div>
            </div>
          </section>

          {/* Base URL */}
          <section
            className="mb-12"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Base URL
            </h2>
            <div className="bg-dark-900 dark:bg-dark-950 rounded-xl p-4 font-mono text-sm flex items-center gap-4">
              <span className="text-green-400">https://api.offimesh.com</span>
              <button className="ml-auto text-dark-400 hover:text-white transition-colors">
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </section>

          {/* Endpoints */}
          <section
            className="mb-12"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Endpoints
            </h2>
            <div className="space-y-3">
              {endpoints.map((endpoint, i) => (
                <div
                  key={endpoint.path}
                  className="glass-card rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex items-center gap-3 min-w-[200px]">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-body-sm text-dark-900 dark:text-white font-mono">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-body-sm text-dark-500 dark:text-dark-400 flex-1">
                    {endpoint.description}
                  </p>
                  <ArrowRight className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
              ))}
            </div>
          </section>

          {/* Example Request */}
          <section
            className="mb-12"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Example: Create Transaction
            </h2>
            <div className="bg-dark-900 dark:bg-dark-950 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
              <div className="text-dark-400 mb-2">POST /v1/transactions/create</div>
              <pre className="text-green-400">
{`{
  "amount": 5000,
  "currency": "NGN",
  "merchant_id": "merch_abc123",
  "customer_identifier": "phone:+2348012345678",
  "offline_tx_hash": "0x7a8b...",
  "metadata": {
    "product": "Market Stall #42",
    "location": "Lagos Island Market"
  }
}`}
              </pre>
            </div>
          </section>

          {/* Example Response */}
          <section
            className="mb-12"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Success Response
            </h2>
            <div className="bg-dark-900 dark:bg-dark-950 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
              <div className="text-dark-400 mb-2">200 OK</div>
              <pre className="text-green-400">
{`{
  "success": true,
  "data": {
    "transaction_id": "txn_xyz789",
    "amount": 5000,
    "currency": "NGN",
    "status": "pending_settlement",
    "created_at": "2026-01-15T10:30:00Z",
    "settlement_eta": "2026-01-15T12:00:00Z"
  }
}`}
              </pre>
            </div>
          </section>

          {/* Error Codes */}
          <section
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Error Codes
            </h2>
            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full text-body-sm">
                <thead>
                  <tr className="border-b border-dark-200 dark:border-dark-700">
                    <th className="px-4 py-3 text-left font-semibold text-dark-900 dark:text-white">Code</th>
                    <th className="px-4 py-3 text-left font-semibold text-dark-900 dark:text-white">Message</th>
                    <th className="px-4 py-3 text-left font-semibold text-dark-900 dark:text-white">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {errors.map((error) => (
                    <tr key={error.code} className="border-b border-dark-100 dark:border-dark-800 last:border-0">
                      <td className="px-4 py-3 font-mono text-purple-600 dark:text-purple-400">{error.code}</td>
                      <td className="px-4 py-3 text-dark-600 dark:text-dark-300">{error.message}</td>
                      <td className="px-4 py-3 text-dark-400 dark:text-dark-500">{error.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
