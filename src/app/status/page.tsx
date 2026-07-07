import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Smartphone, CreditCard, Wifi } from 'lucide-react';

export const metadata: Metadata = {
  title: 'System Status — OffiMesh',
  description: 'Real-time status for all OffiMesh services and infrastructure.',
};

const services = [
  {
    name: 'API Gateway',
    description: 'Core REST API for transactions and settlements',
    status: 'operational',
    icon: Server,
    uptime: '99.98%',
  },
  {
    name: 'Nomba Integration',
    description: 'Payment gateway for fiat settlement',
    status: 'operational',
    icon: CreditCard,
    uptime: '99.95%',
  },
  {
    name: 'Mobile App Backend',
    description: 'Sync and verification services',
    status: 'operational',
    icon: Smartphone,
    uptime: '99.99%',
  },
  {
    name: 'Push Notifications',
    description: 'Alerts for settlements and transactions',
    status: 'degraded',
    icon: Wifi,
    uptime: '98.50%',
    note: 'Intermittent delays in delivery',
  },
];

const incidents = [
  {
    date: 'January 14, 2026',
    title: 'Push Notification Delays',
    status: 'investigating',
    affected: 'Push Notifications',
    updates: [
      { time: '14:30 UTC', message: 'We are investigating delays in push notification delivery. Transactions are not affected.' },
      { time: '15:00 UTC', message: 'Issue identified: third-party provider experiencing capacity issues. Implementing fallback.' },
      { time: '16:00 UTC', message: 'Fallback mechanism deployed. Delays reduced but not fully resolved.' },
    ],
  },
  {
    date: 'January 10, 2026',
    title: 'Scheduled Maintenance',
    status: 'resolved',
    affected: 'API Gateway',
    updates: [
      { time: '02:00 UTC', message: 'Beginning scheduled maintenance window for database upgrades.' },
      { time: '03:30 UTC', message: 'Maintenance complete. All services operational.' },
    ],
  },
];

const statusColors = {
  operational: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-400', label: 'Operational' },
  degraded: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-400', label: 'Degraded' },
  outage: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-400', label: 'Outage' },
  investigating: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-400', label: 'Investigating' },
  resolved: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-400', label: 'Resolved' },
};

export default function StatusPage() {
  const overallStatus = services.some(s => s.status === 'outage') ? 'outage' :
                         services.some(s => s.status === 'degraded') ? 'degraded' : 'operational';

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div
            className="mb-12"
          >
            <h1 className="text-display-md font-bold text-dark-900 dark:text-white mb-4">
              System Status
            </h1>
            <p className="text-body-lg text-dark-500 dark:text-dark-400">
              Real-time status for all OffiMesh services. Last updated: January 15, 2026 at 16:00 UTC.
            </p>
          </div>

          {/* Overall Status */}
          <div
            className={`glass-card rounded-3xl p-8 mb-12 ${overallStatus === 'operational' ? 'bg-gradient-to-br from-green-600 to-emerald-700' : overallStatus === 'degraded' ? 'bg-gradient-to-br from-yellow-600 to-orange-600' : 'bg-gradient-to-br from-red-600 to-rose-700'}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                {overallStatus === 'operational' ? (
                  <CheckCircle className="h-8 w-8 text-white" />
                ) : overallStatus === 'degraded' ? (
                  <AlertTriangle className="h-8 w-8 text-white" />
                ) : (
                  <XCircle className="h-8 w-8 text-white" />
                )}
              </div>
              <div>
                <h2 className="text-display-sm font-bold text-white mb-1">
                  {overallStatus === 'operational' ? 'All Systems Operational' :
                   overallStatus === 'degraded' ? 'Partial System Degradation' : 'System Outage'}
                </h2>
                <p className="text-white/80 text-body-md">
                  {overallStatus === 'operational' ? 'All services are running normally.' :
                   overallStatus === 'degraded' ? 'Some services experiencing issues.' : 'Major service disruption.'}
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <section
            className="mb-12"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Service Status
            </h2>
            <div className="space-y-4">
              {services.map((service, i) => (
                <div
                  key={service.name}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-1">
                          {service.name}
                        </h3>
                        <p className="text-body-sm text-dark-500 dark:text-dark-400">
                          {service.description}
                        </p>
                        {service.note && (
                          <p className="text-body-sm text-yellow-600 dark:text-yellow-400 mt-2">
                            {service.note}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-body-sm font-medium ${statusColors[service.status as keyof typeof statusColors].bg} ${statusColors[service.status as keyof typeof statusColors].text}`}>
                        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                        {statusColors[service.status as keyof typeof statusColors].label}
                      </span>
                      <p className="text-body-sm text-dark-400 dark:text-dark-500 mt-2">
                        {service.uptime} uptime
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Incident History */}
          <section
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-6">
              Incident History
            </h2>
            <div className="space-y-6">
              {incidents.map((incident, i) => (
                <div
                  key={incident.title}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-1">
                        {incident.title}
                      </h3>
                      <p className="text-body-sm text-dark-500 dark:text-dark-400">
                        {incident.date} • Affected: {incident.affected}
                      </p>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-body-sm font-medium ${statusColors[incident.status as keyof typeof statusColors].bg} ${statusColors[incident.status as keyof typeof statusColors].text}`}>
                      {statusColors[incident.status as keyof typeof statusColors].label}
                    </span>
                  </div>
                  <div className="space-y-3 pl-4 border-l-2 border-dark-200 dark:border-dark-700">
                    {incident.updates.map((update) => (
                      <div key={`${update.time}-${update.message}`} className="relative">
                        <div className="absolute -left-[21px] w-4 h-4 rounded-full bg-dark-200 dark:bg-dark-700 flex items-center justify-center">
                          <Clock className="h-2 w-2 text-dark-400 dark:text-dark-500" />
                        </div>
                        <p className="text-body-sm text-dark-400 dark:text-dark-500">
                          {update.time}
                        </p>
                        <p className="text-body-md text-dark-600 dark:text-dark-300">
                          {update.message}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
