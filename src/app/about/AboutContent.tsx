'use client';

import { Target, Users, Globe, Shield, Smartphone, Zap } from 'lucide-react';

const values = [
  {
    icon: Globe,
    title: 'Financial Inclusion',
    description: 'Enabling digital payments for Africans in areas with limited or no internet connectivity.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Cryptographic security that works offline. Every transaction is encrypted and verified.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Built during the Nomba Dev Career Hackathon. Open source and community-focused.',
  },
  {
    icon: Smartphone,
    title: 'Offline-First',
    description: 'No internet required. Pay anywhere with QR codes, Bluetooth, and audio transfer.',
  },
  {
    icon: Zap,
    title: 'Instant Settlement',
    description: 'Transactions settle via Nomba gateway when connectivity returns.',
  },
  {
    icon: Target,
    title: 'Simplicity',
    description: 'Clean UX that works for everyone—from merchants to rural users.',
  },
];

const timeline = [
  { year: 'Jun 2026', event: 'Nomba Dev Career Hackathon submission' },
  { year: 'Jun 2026', event: 'Core protocol design and QR payment implementation' },
  { year: 'Jun 2026', event: 'Bluetooth LE and audio transfer integration' },
  { year: 'Jun 2026', event: 'Nomba settlement gateway integration' },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <span className="label text-accent mb-4 block">NOMBA DEV CAREER HACKATHON</span>
          <h1 className="text-display-lg font-serif italic text-paper mb-6">
            About OffiMesh
          </h1>
          <p className="text-body-xl text-ink-400">
            An offline-capable payment integration platform built during the Nomba Dev Career Hackathon, June 2026. We enable secure digital payments that work even without internet connectivity.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-sm font-serif italic text-paper mb-4">
                Our Mission
              </h2>
              <p className="text-body-lg text-ink-400 mb-6">
                OffiMesh was created to address the challenge of digital payments in areas with unreliable or no internet connectivity. Using QR codes, Bluetooth, and audio-based data transfer, we enable secure transactions that settle through Nomba when connectivity returns.
              </p>
              <p className="text-body-lg text-ink-400">
                Built during the Nomba Dev Career Hackathon, OffiMesh demonstrates that financial inclusion doesn&apos;t have to depend on network coverage.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
                <div className="text-paper text-center p-8">
                  <div className="text-display-lg font-serif italic font-bold mb-2">O</div>
                  <p className="text-body-lg opacity-80">OffiMesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-display-md font-serif italic text-paper mb-4">
            What We Stand For
          </h2>
          <p className="text-body-lg text-ink-400 max-w-2xl mx-auto">
            Our values guide every decision we make in building OffiMesh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="glass-card rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-ink-800 flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-headline-md font-semibold text-paper mb-2">
                {value.title}
              </h3>
              <p className="text-body-md text-ink-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-display-md font-serif italic text-paper mb-4">
            The Team
          </h2>
          <p className="text-body-lg text-ink-400 max-w-2xl mx-auto">
            Built with passion during the Nomba Dev Career Hackathon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="https://github.com/diamondbelema"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-accent transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-ink-800 flex items-center justify-center text-accent font-bold text-xl">
              DB
            </div>
            <div>
              <h3 className="text-headline-md font-semibold text-paper">Diamond Belema</h3>
              <p className="text-body-sm text-ink-400">Developer</p>
            </div>
          </a>
          <a
            href="https://github.com/Dav-123"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-accent transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-ink-800 flex items-center justify-center text-accent font-bold text-xl">
              DB
            </div>
            <div>
              <h3 className="text-headline-md font-semibold text-paper">David Briggs</h3>
              <p className="text-body-sm text-ink-400">Developer</p>
            </div>
          </a>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-display-md font-serif italic text-paper mb-4">
            Our Journey
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className="flex gap-6 mb-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent text-paper flex items-center justify-center font-semibold text-body-sm">
                  {item.year.split(' ')[0]}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-0.5 h-full bg-ink-700" />
                )}
              </div>
              <div className="pt-2">
                <p className="label text-accent mb-1">{item.year}</p>
                <p className="text-body-md text-ink-400">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
