'use client';
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, Smartphone, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DownloadSection() {
  return (
    <section id="download" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-fuchsia-600" />

      {/* Pattern */}
      <div className="absolute inset-0 bg-dots opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-md md:text-display-lg font-bold text-white mb-6">
              Start Paying Anywhere Today
            </h2>
            <p className="text-body-lg text-white/80 mb-8 max-w-lg">
              Download OffiMesh and experience seamless offline payments. Available now for Android devices.
            </p>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" variant="white" asChild>
                <Link href="#">
                  <Download className="h-5 w-5" />
                  Download App
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="bg-white/10 hover:bg-white/20 border-white/30 text-white">
                <Link href="#">
                  <Smartphone className="h-5 w-5" />
                  Download APK
                </Link>
              </Button>
            </div>

            {/* Info */}
            <div className="flex items-center gap-6 text-white/60 text-body-sm">
              <span>Android 8.0+</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>Free Download</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>Secure Installation</span>
            </div>
          </motion.div>

          {/* QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-end gap-6"
          >
            <div className="glass-card bg-white dark:bg-dark-900 p-6 rounded-3xl shadow-2xl">
              {/* QR Code placeholder */}
              <div className="w-48 h-48 bg-dark-100 dark:bg-dark-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="grid grid-cols-5 grid-rows-5 gap-1.5 w-40 h-40">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        'rounded-sm',
                        Math.random() > 0.5 ? 'bg-dark-900 dark:bg-white' : 'bg-transparent'
                      )}
                    />
                  ))}
                </div>
                {/* Logo overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-dark-900/90">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">O</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-dark-500 dark:text-dark-400 text-body-sm mb-1">
                  Scan to download
                </p>
                <p className="text-dark-900 dark:text-white text-headline-sm font-semibold">
                  OffiMesh App
                </p>
              </div>
            </div>
            <p className="text-white/60 text-body-sm max-w-[200px] text-center lg:text-right">
              Point your camera at the QR code to download the app directly to your device.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function cn(...args: (string | boolean | undefined)[]) {
  return args.filter(Boolean).join(' ');
}
