import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Key, ArrowRight, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'API Reference — OffiMesh',
  description: 'API documentation for integrating OffiMesh payment functionality. Built at Nomba Dev Career Hackathon.',
};

const endpoints = [
  {
    method: 'POST',
    path: '/v1/auth/register',
    description: 'Register a new user and create OTP',
    auth: 'None',
  },
  {
    method: 'POST',
    path: '/v1/auth/verify-otp',
    description: 'Verify OTP and activate account',
    auth: 'None',
  },
  {
    method: 'POST',
    path: '/v1/auth/token',
    description: 'Get access and refresh tokens',
    auth: 'None',
  },
  {
    method: 'POST',
    path: '/v1/transactions/create',
    description: 'Create a new offline transaction record',
    auth: 'Bearer Token',
  },
  {
    method: 'GET',
    path: '/v1/transactions/:id',
    description: 'Retrieve transaction details and status',
    auth: 'Bearer Token',
  },
  {
    method: 'POST',
    path: '/v1/settlements/initiate',
    description: 'Initiate settlement to Nomba gateway',
    auth: 'Bearer Token',
  },
];

const errors = [
  { code: 400, message: 'Bad Request — Invalid parameters', reason: 'Missing required fields or malformed JSON' },
  { code: 401, message: 'Unauthorized — Invalid token', reason: 'Token is missing, invalid, or expired' },
  { code: 403, message: 'Forbidden — Insufficient permissions', reason: 'Token lacks required scope' },
  { code: 404, message: 'Not Found — Resource does not exist', reason: 'Transaction ID or endpoint is invalid' },
  { code: 429, message: 'Too Many Requests — Rate limited', reason: 'Exceeded rate limit' },
  { code: 500, message: 'Internal Server Error', reason: 'Unexpected server error' },
];

export default function ApiReferencePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="mb-12 animate-fade-in">
            <span className="label text-accent mb-4 block">DEVELOPERS</span>
            <h1 className="text-display-md font-serif italic text-paper mb-4">
              API Reference
            </h1>
            <p className="text-body-lg text-ink-400">
              REST API for integrating OffiMesh payment functionality. Built at the Nomba Dev Career Hackathon.
            </p>
          </div>

          {/* Base URL */}
          <section className="mb-12">
            <h2 className="text-headline-lg font-semibold text-paper mb-6">
              Base URL
            </h2>
            <div className="bg-ink-800 rounded-xl p-4 font-mono text-sm">
              <span className="text-accent">https://offimesh.claudy.name.ng/v1</span>
            </div>
          </section>

          {/* Authentication */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Key className="h-6 w-6 text-accent" />
              <h2 className="text-headline-lg font-semibold text-paper">
                Authentication
              </h2>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-body-md text-ink-400 mb-4">
                All protected endpoints require a Bearer token. Access tokens expire after 15 minutes.
              </p>
              <div className="bg-ink-800 rounded-xl p-4 font-mono text-sm text-accent overflow-x-auto">
                Authorization: Bearer &lt;access_token&gt;
              </div>
              <div className="mt-4 flex items-center gap-2 text-body-sm text-ink-500">
                <AlertCircle className="h-4 w-4" />
                Access tokens are RS256 JWT with 15-minute TTL. Refresh tokens last 7 days.
              </div>
            </div>
          </section>

          {/* Endpoints */}
          <section className="mb-12">
            <h2 className="text-headline-lg font-semibold text-paper mb-6">
              Endpoints
            </h2>
            <div className="space-y-3">
              {endpoints.map((endpoint) => (
                <div
                  key={endpoint.path}
                  className="glass-card rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex items-center gap-3 min-w-[180px]">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      endpoint.method === 'GET' ? 'bg-green-900/30 text-green-400' :
                      'bg-purple-900/30 text-accent'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-body-sm text-paper font-mono">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-body-sm text-ink-400 flex-1">
                    {endpoint.description}
                  </p>
                  <ArrowRight className="h-4 w-4 text-accent" />
                </div>
              ))}
            </div>
          </section>

          {/* Error Codes */}
          <section>
            <h2 className="text-headline-lg font-semibold text-paper mb-6">
              Error Codes
            </h2>
            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full text-body-sm">
                <thead>
                  <tr className="border-b border-ink-700">
                    <th className="px-4 py-3 text-left font-semibold text-paper">Code</th>
                    <th className="px-4 py-3 text-left font-semibold text-paper">Message</th>
                    <th className="px-4 py-3 text-left font-semibold text-paper">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {errors.map((error) => (
                    <tr key={error.code} className="border-b border-ink-800 last:border-0">
                      <td className="px-4 py-3 font-mono text-accent">{error.code}</td>
                      <td className="px-4 py-3 text-ink-300">{error.message}</td>
                      <td className="px-4 py-3 text-ink-500">{error.reason}</td>
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
