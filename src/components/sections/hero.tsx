'use client';

import Link from 'next/link';
import { ArrowRight, Download, QrCode, Wifi, WifiOff, Smartphone, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const floatingCards = [
  { icon: QrCode, label: 'QR Payment', color: 'from-purple-500 to-indigo-600' },
  { icon: Wifi, label: 'Bluetooth', color: 'from-indigo-500 to-blue-600' },
  { icon: Shield, label: 'Secure', color: 'from-fuchsia-500 to-purple-600' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-purple-radial dark:bg-gradient-dark-radial" />
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/40 border border-purple-800 text-accent text-body-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Nomba Dev Career Hackathon
            </div>

            {/* Headline */}
            <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-serif italic tracking-tight text-paper mb-6">
              Payments That Work.
              <span className="block text-accent">Even Offline.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg md:text-headline-lg text-ink-400 max-w-xl mb-8">
              OffiMesh enables secure digital payments without internet using QR, Bluetooth, and audio transfer. Transactions settle through Nomba when connectivity returns. Built at the Nomba Dev Career Hackathon, June 2026.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" asChild>
                <Link href="#download">
                  <Download className="h-5 w-5" />
                  Download App
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/presentation">
                  View Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <WifiOff className="h-4 w-4 text-accent" />
                <span className="text-body-sm text-ink-400">
                  Works Offline
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-body-sm text-ink-400">
                  Encrypted Transactions
                </span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center animate-fade-in-up">
            {/* Phone mockup container */}
            <div className="relative">
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-indigo-600/30 blur-3xl scale-110" />

              {/* Phone frame */}
              <div className="relative glass-card rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="h-8 bg-ink-900 flex items-center justify-center">
                    <div className="w-20 h-4 rounded-full bg-ink-700" />
                  </div>

                  {/* App content mockup */}
                  <div className="w-64 md:w-72 h-[420px] md:h-[480px] bg-gradient-to-br from-ink-900 to-black p-6 flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <p className="text-ink-500 text-body-sm">Welcome back,</p>
                      <p className="text-paper text-headline-md font-semibold">Adebayo</p>
                    </div>

                    {/* Balance Card */}
                    <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 p-5 mb-4">
                      <p className="text-purple-200 text-body-sm mb-1">Available Balance</p>
                      <p className="text-white text-display-sm font-bold">N 125,450</p>
                      <div className="mt-3 flex gap-2">
                        <div className="flex-1 rounded-lg bg-white/20 px-3 py-2 text-white text-body-sm text-center">
                          Send
                        </div>
                        <div className="flex-1 rounded-lg bg-white/20 px-3 py-2 text-white text-body-sm text-center">
                          Receive
                        </div>
                      </div>
                    </div>

                    {/* Offline indicator */}
                    <div className="flex items-center gap-2 rounded-xl bg-amber-500/20 px-4 py-3 mb-4">
                      <WifiOff className="h-5 w-5 text-amber-500" />
                      <div>
                        <p className="text-paper text-body-sm font-medium">Offline Mode Active</p>
                        <p className="text-ink-500 text-xs">Will auto-sync when connected</p>
                      </div>
                    </div>

                    {/* Recent transactions */}
                    <div className="flex-1 rounded-xl bg-ink-900/50 p-4">
                      <p className="text-ink-500 text-body-sm mb-3">Recent Transactions</p>
                      <div className="space-y-3">
                        {[1, 2].map((i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-purple-600/30 flex items-center justify-center">
                                <QrCode className="h-4 w-4 text-purple-400" />
                              </div>
                              <div>
                                <p className="text-paper text-body-sm">Payment</p>
                                <p className="text-ink-500 text-xs">QR Transfer</p>
                              </div>
                            </div>
                            <p className="text-green-400 text-body-sm">-N {(i * 2500).toLocaleString()}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map((card, index) => (
                <div
                  key={card.label}
                  className={cn(
                    'absolute glass-card p-3 rounded-xl shadow-lg',
                    index === 0 && 'top-10 -left-8 md:-left-16',
                    index === 1 && 'top-1/3 -right-4 md:-right-12',
                    index === 2 && 'bottom-20 left-0 md:-left-8'
                  )}
                >
                  <div className={cn(
                    'w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center',
                    card.color
                  )}>
                    <card.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-body-sm font-medium mt-2 text-paper">
                    {card.label}
                  </p>
                </div>
              ))}

              {/* Phone indicator */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-ink-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
