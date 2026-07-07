'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronLeft, ChevronRight, Home, WifiOff, QrCode,
  Bluetooth, Lock, RefreshCw, Shield, Zap, Users,
  Smartphone, Globe, TrendingUp, CheckCircle2, ArrowRight,
  Github, Volume2,
} from 'lucide-react';

/* ---------- Slide definitions ---------- */
interface Slide {
  id: string;
  label: string;
}

const slides: Slide[] = [
  { id: 'title', label: 'Title' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'how', label: 'How It Works' },
  { id: 'security', label: 'Security' },
  { id: 'impact', label: 'Impact' },
  { id: 'tech', label: 'Tech' },
  { id: 'team', label: 'Team' },
  { id: 'cta', label: 'Get Started' },
];

/* ---------- Shared variants ---------- */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* ---------- Individual slide components ---------- */

function TitleSlide() {
  return (
    <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center max-w-4xl mx-auto">
      {/* Animated logo mark */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
        className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-glow"
      >
        <span className="text-white font-bold text-5xl">O</span>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium mb-6">
          Hackathon Presentation 2026
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
      >
        Offline Payments
        <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
          for Africa
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10"
      >
        OffiMesh enables secure digital payments via QR, Bluetooth, and audio —
        no internet required. Settles automatically through Nomba.
      </motion.p>

      {/* Animated pulse ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="flex justify-center gap-4 text-slate-400 text-sm"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>Works Offline</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span>Bank-Grade Security</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
          <span>Nomba Settlement</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProblemSlide() {
  const stats = [
    { value: '43%', label: 'of Africa\'s population lacks reliable internet', color: 'from-red-500 to-orange-500' },
    { value: '$800B', label: 'in mobile money transactions lost annually to downtime', color: 'from-orange-500 to-amber-500' },
    { value: '60%', label: 'of small merchants fail to complete sales during outages', color: 'from-amber-500 to-yellow-500' },
  ];

  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-5xl mx-auto">
      <motion.div variants={item} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-sm font-medium mb-4">
          <WifiOff className="h-4 w-4" />
          The Problem
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Africa Loses Billions to<br />
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Connectivity Gaps
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          When mobile networks fail, digital payments stop — but commerce can&apos;t stop.
          Merchants lose sales. Families can&apos;t send money. Businesses grind to a halt.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {stats.map((s, i) => (
          <motion.div key={i} variants={item}>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
              <div className={`text-5xl font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent mb-2`}>
                {s.value}
              </div>
              <p className="text-slate-400 text-sm">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scenario */}
      <motion.div variants={item} className="rounded-2xl bg-red-950/30 border border-red-500/20 p-6">
        <p className="text-slate-300 text-center italic text-lg">
          &ldquo;A market trader in Lagos completes 50 transactions a day — each one dependent on
          a network that fails up to 8 hours daily. There has to be a better way.&rdquo;
        </p>
      </motion.div>
    </motion.div>
  );
}

function SolutionSlide() {
  const pillars = [
    { icon: WifiOff, label: 'Offline First', desc: 'Payments work with zero internet — always', color: 'text-purple-400' },
    { icon: QrCode, label: 'QR Transfer', desc: 'Scan-to-pay in under 2 seconds', color: 'text-indigo-400' },
    { icon: Bluetooth, label: 'Bluetooth Pay', desc: 'Direct device-to-device over BLE', color: 'text-fuchsia-400' },
    { icon: Volume2, label: 'Audio Transfer', desc: 'Payments via sound waves', color: 'text-violet-400' },
    { icon: RefreshCw, label: 'Auto Sync', desc: 'Settles through Nomba on reconnect', color: 'text-green-400' },
    { icon: Shield, label: 'Encrypted', desc: 'ECDSA + 256-bit end-to-end', color: 'text-amber-400' },
  ];

  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-5xl mx-auto">
      <motion.div variants={item} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-4">
          <Zap className="h-4 w-4" />
          Our Solution
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Meet
          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"> OffiMesh</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          The first offline-first payment platform built for Africa. Pay and receive money
          using QR codes, Bluetooth, or audio — transactions settle automatically through Nomba
          the moment connectivity returns.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {pillars.map((p, i) => (
          <motion.div key={i} variants={item}>
            <div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
              <p.icon className={`h-8 w-8 ${p.color} mb-3`} />
              <h3 className="text-white font-semibold mb-1">{p.label}</h3>
              <p className="text-slate-400 text-sm">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function HowItWorksSlide() {
  const steps = [
    {
      number: '01',
      icon: Smartphone,
      title: 'Merchant Requests',
      desc: 'Merchant opens OffiMesh, enters amount, generates a signed payment request with unique nonce.',
      color: 'from-purple-600 to-indigo-600',
    },
    {
      number: '02',
      icon: QrCode,
      title: 'Customer Scans',
      desc: 'Customer scans QR or connects via BLE. Payment details transfer peer-to-peer — no server needed.',
      color: 'from-indigo-600 to-blue-600',
    },
    {
      number: '03',
      icon: Lock,
      title: 'Locally Signed',
      desc: 'Customer authorizes with PIN/biometrics. Transaction is signed with ECDSA on secure enclave.',
      color: 'from-blue-600 to-fuchsia-600',
    },
    {
      number: '04',
      icon: Shield,
      title: 'Stored Securely',
      desc: 'Signed transaction stored in encrypted local ledger on both devices. Tamper-proof, always verifiable.',
      color: 'from-fuchsia-600 to-purple-600',
    },
    {
      number: '05',
      icon: Globe,
      title: 'Network Returns',
      desc: 'Any device with pending transactions detects connectivity and initiates sync automatically.',
      color: 'from-purple-600 to-violet-600',
    },
    {
      number: '06',
      icon: RefreshCw,
      title: 'Nomba Settles',
      desc: 'Transactions sync to cloud and settle via Nomba payment gateway. Funds reach bank accounts.',
      color: 'from-violet-600 to-indigo-600',
    },
  ];

  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-5xl mx-auto">
      <motion.div variants={item} className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium mb-4">
          <ArrowRight className="h-4 w-4" />
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Six Steps to Settle Any Payment
        </h2>
      </motion.div>

      {/* Animated flow */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={item}
            custom={i}
            className="relative"
          >
            <div className="rounded-xl bg-white/5 border border-white/10 p-5 h-full">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-3`}>
                <step.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-slate-500">{step.number}</span>
                <h3 className="text-white font-semibold text-sm">{step.title}</h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Flow indicator */}
      <motion.div variants={item} className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-xs">
        <span>Offline</span>
        <div className="flex gap-1">
          {steps.slice(0, 4).map((_, i) => (
            <div key={i} className="w-8 h-0.5 bg-purple-600/60 rounded-full" />
          ))}
        </div>
        <span className="text-green-400">Online settlement</span>
      </motion.div>
    </motion.div>
  );
}

function SecuritySlide() {
  const layers = [
    { icon: Lock, title: 'ECDSA Signatures', desc: 'Every transaction cryptographically signed on-device with Elliptic Curve Digital Signature Algorithm.' },
    { icon: Shield, title: '256-bit Encryption', desc: 'End-to-end AES-256 encryption across all data at rest and in transit over local channels.' },
    { icon: RefreshCw, title: 'Replay Protection', desc: 'Unique nonce values and timestamps prevent any transaction being replayed or double-processed.' },
    { icon: Smartphone, title: 'TEE Key Storage', desc: 'Private keys locked in device Trusted Execution Environment — never exposed to OS or apps.' },
    { icon: CheckCircle2, title: 'Tamper Detection', desc: 'Cryptographic hash chains verify ledger integrity. Any modification attempt is detected immediately.' },
    { icon: Globe, title: 'Offline Verification', desc: 'Verify any transaction\'s authenticity fully offline using embedded cryptographic proofs.' },
  ];

  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-5xl mx-auto">
      <motion.div variants={item} className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-4">
          <Shield className="h-4 w-4" />
          Security Architecture
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Zero-Trust Security
          <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Even Without Internet
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Every transaction is secured by multiple independent cryptographic layers.
          Offline does not mean insecure.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {layers.map((layer, i) => (
          <motion.div key={i} variants={item}>
            <div className="rounded-xl bg-emerald-950/20 border border-emerald-500/20 p-5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3">
                <layer.icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold mb-1.5">{layer.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{layer.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ImpactSlide() {
  const beneficiaries = [
    { icon: Users, title: 'Market Traders', count: '80M+', desc: 'Small merchants across Africa who lose sales during daily network outages.' },
    { icon: Smartphone, title: 'Mobile Money Users', count: '500M+', desc: 'People dependent on mobile money who need more resilient payment options.' },
    { icon: Globe, title: 'Rural Communities', count: '300M+', desc: 'Africans in rural areas with limited or no reliable cellular coverage.' },
    { icon: TrendingUp, title: 'Micro-businesses', count: '44M+', desc: 'Formal and informal micro-enterprises needing reliable POS without infrastructure cost.' },
  ];

  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-5xl mx-auto">
      <motion.div variants={item} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-medium mb-4">
          <TrendingUp className="h-4 w-4" />
          Real-World Impact
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Built for
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> Real People</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          OffiMesh is not a fintech experiment — it is infrastructure for the hundreds
          of millions of Africans underserved by existing payment systems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {beneficiaries.map((b, i) => (
          <motion.div key={i} variants={item}>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <b.icon className="h-7 w-7 text-amber-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-1">{b.count}</div>
                <h3 className="text-white font-semibold mb-1">{b.title}</h3>
                <p className="text-slate-400 text-sm">{b.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function TechSlide() {
  const layers = [
    { layer: 'Mobile App', items: ['React Native', 'Android SDK', 'BLE / QR / Audio'], color: 'from-purple-600 to-indigo-600' },
    { layer: 'Offline Engine', items: ['Encrypted Local DB', 'ECDSA Signing', 'Nonce Manager'], color: 'from-indigo-600 to-blue-600' },
    { layer: 'Sync Layer', items: ['Queue Manager', 'Conflict Resolution', 'State Machine'], color: 'from-blue-600 to-fuchsia-600' },
    { layer: 'Settlement', items: ['Nomba API', 'Transaction Batch', 'Bank Settlement'], color: 'from-fuchsia-600 to-purple-600' },
  ];

  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-5xl mx-auto">
      <motion.div variants={item} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-4">
          <Zap className="h-4 w-4" />
          Technology Stack
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Engineered from
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent"> First Principles</span>
        </h2>
      </motion.div>

      {/* Architecture layers */}
      <div className="space-y-4 mb-8">
        {layers.map((l, i) => (
          <motion.div key={i} variants={item}>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-6">
              <div className={`w-1.5 h-16 rounded-full bg-gradient-to-b ${l.color} flex-shrink-0`} />
              <div>
                <h3 className="text-white font-semibold mb-1">{l.layer}</h3>
                <div className="flex flex-wrap gap-2">
                  {l.items.map((item_) => (
                    <span key={item_} className="px-2.5 py-1 rounded-lg bg-white/10 text-slate-300 text-xs font-mono">
                      {item_}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={item} className="grid grid-cols-3 gap-4 text-center">
        {[
          { label: 'Android 8.0+', sub: 'Target platform' },
          { label: 'BLE 5.0', sub: 'Bluetooth range 100m' },
          { label: '< 2 sec', sub: 'Transaction time' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-white/5 border border-white/10 p-4">
            <div className="text-2xl font-bold text-white mb-1">{s.label}</div>
            <div className="text-slate-500 text-xs">{s.sub}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function TeamSlide() {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-4xl mx-auto">
      <motion.div variants={item} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium mb-4">
          <Users className="h-4 w-4" />
          The Builders
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          We Are
          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"> OffiMesh</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Two engineers — one shared mission. Looking for teammates to scale this vision.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* David */}
        <motion.div variants={item}>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center mx-auto mb-5">
              <span className="text-white text-3xl font-bold">DB</span>
            </div>
            <div className="text-center">
              <h3 className="text-white text-xl font-bold mb-1">David Briggs</h3>
              <p className="text-purple-400 text-sm font-medium mb-4">Full Stack Engineer</p>
              <p className="text-slate-400 text-sm mb-5">
                Architected OffiMesh end-to-end. Specializes in React Native, offline systems, and payment integration.
              </p>
              <a
                href="https://github.com/Dav-123/offimesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
              >
                <Github className="h-4 w-4" />
                github.com/Dav-123
              </a>
            </div>
          </div>
        </motion.div>

        {/* Diamond */}
        <motion.div variants={item}>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-700 flex items-center justify-center mx-auto mb-5">
              <span className="text-white text-3xl font-bold">DB</span>
            </div>
            <div className="text-center">
              <h3 className="text-white text-xl font-bold mb-1">Diamond Belema</h3>
              <p className="text-fuchsia-400 text-sm font-medium mb-4">Software Developer</p>
              <p className="text-slate-400 text-sm mb-5">
                Core mobile and backend contributor. Focused on Bluetooth BLE, Kotlin, and cryptographic transaction flows.
              </p>
              <a
                href="https://github.com/Dav-123/offimesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
              >
                <Github className="h-4 w-4" />
                github.com/Dav-123/offimesh
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={item} className="rounded-2xl border-2 border-dashed border-purple-500/40 bg-purple-950/20 p-6 text-center">
        <h4 className="text-purple-300 font-semibold mb-2">Actively Seeking Teammates</h4>
        <p className="text-slate-400 text-sm">
          We are looking for engineers, designers, and product thinkers who believe in Africa&apos;s financial future.
          Join us — reach out on GitHub.
        </p>
      </motion.div>
    </motion.div>
  );
}

function CTASlide() {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" className="text-center max-w-3xl mx-auto">
      <motion.div variants={item}>
        <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-glow">
          <span className="text-white font-bold text-5xl">O</span>
        </div>
      </motion.div>

      <motion.h2 variants={item} className="text-5xl md:text-7xl font-bold text-white mb-6">
        Let&apos;s Build the
        <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
          Future Together
        </span>
      </motion.h2>

      <motion.p variants={item} className="text-xl text-slate-300 mb-10">
        OffiMesh is more than an app — it is infrastructure for the next billion Africans
        entering the digital economy. We are just getting started.
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
        <a
          href="/downloads/offimesh.apk"
          download="offimesh.apk"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-glow"
        >
          <Smartphone className="h-6 w-6" />
          Download the App
        </a>
        <a
          href="https://github.com/Dav-123/offimesh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-colors"
        >
          <Github className="h-6 w-6" />
          View on GitHub
        </a>
      </motion.div>

      <motion.div variants={item} className="mt-12 text-slate-500 text-sm">
        Built with passion for Africa &bull; OffiMesh 2026
      </motion.div>
    </motion.div>
  );
}

/* ---------- Slide renderer ---------- */
function renderSlide(id: string) {
  switch (id) {
    case 'title': return <TitleSlide />;
    case 'problem': return <ProblemSlide />;
    case 'solution': return <SolutionSlide />;
    case 'how': return <HowItWorksSlide />;
    case 'security': return <SecuritySlide />;
    case 'impact': return <ImpactSlide />;
    case 'tech': return <TechSlide />;
    case 'team': return <TeamSlide />;
    case 'cta': return <CTASlide />;
    default: return null;
  }
}

/* ---------- Main presentation component ---------- */
export function PresentationClient() {
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(1);

  const goTo = React.useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const prev = React.useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  const next = React.useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1);
  }, [current, goTo]);

  // Keyboard navigation
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const progress = ((current + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-dark-950 flex flex-col overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-dark-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 pt-3 pb-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
        >
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">OffiMesh</span>
        </Link>

        {/* Slide indicators */}
        <div className="flex items-center gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => goTo(i)}
              title={slide.label}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-purple-500'
                  : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}: ${slide.label}`}
            />
          ))}
        </div>

        <span className="text-slate-500 text-sm font-mono">
          {current + 1} / {slides.length}
        </span>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex items-center justify-center px-4 py-20 relative">
        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-700/10 rounded-full blur-3xl" />
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full max-w-5xl relative z-10"
          >
            {renderSlide(slides[current].id)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-medium"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="text-slate-500 text-xs hidden sm:block">
          Use ← → arrow keys to navigate
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-medium"
          aria-label="Next slide"
        >
          <span className="hidden sm:inline">
            {current === slides.length - 1 ? 'Done' : 'Next'}
          </span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
