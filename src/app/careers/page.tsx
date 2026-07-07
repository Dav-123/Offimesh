import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MapPin, Users, Zap, Heart, Globe, Laptop } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers — OffiMesh',
  description: 'Join the OffiMesh team and help build the future of offline payments in Africa.',
};

const perks = [
  { icon: Laptop, title: 'Remote-First', description: 'Work from anywhere with flexible hours.' },
  { icon: Heart, title: 'Health & Wellness', description: 'Health coverage and wellness stipend.' },
  { icon: Zap, title: 'Learning Budget', description: 'Annual budget for courses and conferences.' },
  { icon: Globe, title: 'Impact', description: 'Work on products that change lives.' },
];

const roles = [
  {
    title: 'Android Engineer',
    department: 'Engineering',
    location: 'Remote (Africa Preferred)',
    type: 'Full-Time',
    description: 'Build and improve our Android app with Kotlin and Bluetooth LE expertise.',
    skills: ['Kotlin', 'Android', 'Bluetooth LE', 'Security'],
  },
  {
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-Time',
    description: 'Scale our settlement infrastructure and Nomba gateway integration.',
    skills: ['Node.js', 'PostgreSQL', 'TypeScript', 'Payments'],
  },
  {
    title: 'Security Engineer',
    department: 'Security',
    location: 'Remote',
    type: 'Full-Time',
    description: 'Audit our crypto implementations and secure the transaction pipeline.',
    skills: ['Cryptography', 'Security Audits', 'Rust', 'Threat Modeling'],
  },
  {
    title: 'Developer Advocate',
    department: 'Community',
    location: 'Remote (Africa Required)',
    type: 'Full-Time',
    description: 'Grow our developer community across Africa through content and events.',
    skills: ['Public Speaking', 'Technical Writing', 'Community Building'],
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-16">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <div
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-display-lg font-bold text-dark-900 dark:text-white mb-6">
              Join Our Mission
            </h1>
            <p className="text-body-xl text-dark-500 dark:text-dark-400">
              Help us bring offline payments to 350 million Africans. We are looking for brilliant minds who want to make financial inclusion a reality.
            </p>
          </div>
        </section>

        {/* Perks */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <div
            className="text-center mb-10"
          >
            <h2 className="text-display-sm font-bold text-dark-900 dark:text-white mb-4">
              Why OffiMesh?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <div
                key={perk.title}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <perk.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-body-sm text-dark-500 dark:text-dark-400">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Roles */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <div
            className="text-center mb-10"
          >
            <h2 className="text-display-sm font-bold text-dark-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <div className="flex items-center justify-center gap-2 text-dark-500 dark:text-dark-400">
              <Users className="h-5 w-5" />
              <span>4 open roles</span>
            </div>
          </div>

          <div className="space-y-6">
            {roles.map((role, i) => (
              <div
                key={role.title}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-headline-md font-semibold text-dark-900 dark:text-white mb-2">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-body-sm text-dark-500 dark:text-dark-400">
                      <span>{role.department}</span>
                      <span className="text-dark-300 dark:text-dark-600">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {role.location}
                      </span>
                      <span className="text-dark-300 dark:text-dark-600">•</span>
                      <span>{role.type}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@offimesh.com?subject=Application: ${role.title}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition-opacity"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="text-body-md text-dark-600 dark:text-dark-300 mb-4">
                  {role.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-body-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="glass-card rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-purple-600 to-indigo-700"
          >
            <h2 className="text-display-sm font-bold text-white mb-4">
              Do not See Your Role?
            </h2>
            <p className="text-white/80 text-body-lg mb-6 max-w-2xl mx-auto">
              We are always looking for talented people who share our mission. Send your resume and we will keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@offimesh.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-purple-700 font-semibold hover:bg-purple-50 transition-colors"
            >
              Reach Out Anyway
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
