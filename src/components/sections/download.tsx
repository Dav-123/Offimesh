'use client';

import { motion } from 'framer-motion';
import { Download, Smartphone, CheckCircle2, Wifi } from 'lucide-react';
import { cn } from '@/lib/utils';

const APK_PATH = '/downloads/offimesh.apk';

const features = [
  'Android 8.0 and above',
  'Free — no subscription',
  'Works without internet',
  'Secure signed APK',
];

export function DownloadSection() {
  return (
    <section id="download" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-indigo-700 to-fuchsia-700" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-dots opacity-20" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-body-sm mb-6">
              <Wifi className="h-4 w-4" />
              Works 100% offline
            </div>
            <h2 className="text-display-md md:text-display-lg font-bold text-white mb-6">
              Start Paying Anywhere, Right Now
            </h2>
            <p className="text-body-lg text-white/80 mb-8 max-w-lg">
              Download OffiMesh for Android and begin accepting or making payments — no internet required. Your first offline transaction is a single tap away.
            </p>

            {/* Feature checklist */}
            <ul className="space-y-2.5 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-white/90 text-body-sm">
                  <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Primary: Download App (same APK) */}
              <a
                href={APK_PATH}
                download="offimesh.apk"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-dark-900 font-semibold text-body-md hover:bg-purple-50 transition-colors shadow-lg"
              >
                <Download className="h-5 w-5" />
                Download App
              </a>

              {/* Secondary: Direct APK */}
              <a
                href={APK_PATH}
                download="offimesh.apk"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white font-semibold text-body-md hover:bg-white/20 transition-colors"
              >
                <Smartphone className="h-5 w-5" />
                Download APK
              </a>
            </div>

            <p className="mt-4 text-white/40 text-xs">
              APK is signed and safe to install. Enable &quot;Install from unknown sources&quot; if prompted.
            </p>
          </motion.div>

          {/* QR Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-end gap-6"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl w-fit">
              {/* Stylized QR placeholder with OffiMesh branding */}
              <div className="w-48 h-48 bg-white flex items-center justify-center relative">
                {/* QR corners */}
                <div className="absolute inset-0 grid grid-cols-7 grid-rows-7 gap-1 p-2">
                  {Array.from({ length: 49 }).map((_, i) => {
                    const row = Math.floor(i / 7);
                    const col = i % 7;
                    // Top-left finder pattern
                    const tl = (row < 3 && col < 3) || (row === 0 && col <= 3) || (row <= 3 && col === 0) || (row === 3 && col <= 3) || (row <= 3 && col === 3);
                    // Top-right finder pattern
                    const tr = (row < 3 && col >= 4) || (row === 0 && col >= 3) || (row <= 3 && col === 6) || (row === 3 && col >= 3) || (row <= 3 && col === 3);
                    // Bottom-left finder pattern
                    const bl = (row >= 4 && col < 3) || (row === 6 && col <= 3) || (row >= 3 && col === 0) || (row === 3 && col <= 3) || (row >= 3 && col === 3);
                    const dark = tl || tr || bl || (Math.sin(i * 2.7) > 0.2);
                    return (
                      <div
                        key={i}
                        className={cn('rounded-[1px]', dark ? 'bg-dark-900' : 'bg-transparent')}
                      />
                    );
                  })}
                </div>
                {/* Center logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-dark-100 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
                      <span className="text-white text-lg font-bold">O</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="text-dark-400 text-xs mb-1">Scan with your camera</p>
                <p className="text-dark-900 font-bold text-headline-sm">OffiMesh APK</p>
              </div>
            </div>

            <p className="text-white/60 text-body-sm text-center lg:text-right max-w-[220px]">
              Point your Android camera at this QR code to download and install the app directly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
