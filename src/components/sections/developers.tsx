'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const developers = [
  {
    name: 'Chidinma Okafor',
    role: 'Lead Developer',
    bio: 'Full-stack engineer with 5+ years building fintech solutions. Passionate about financial inclusion.',
    github: '#',
    linkedin: '#',
    twitter: '#',
    portfolio: '#',
  },
  {
    name: 'Emeka Nwankwo',
    role: 'Backend Engineer',
    bio: 'Specializes in distributed systems and offline-first architectures. Expert in payment integrations.',
    github: '#',
    linkedin: '#',
    twitter: '#',
    portfolio: '#',
  },
  {
    name: 'Amara Eze',
    role: 'Mobile Developer',
    bio: 'Android and iOS specialist focused on creating seamless offline-capable mobile experiences.',
    github: '#',
    linkedin: '#',
    twitter: '#',
    portfolio: '#',
  },
  {
    name: 'Obi Kanu',
    role: 'Security Engineer',
    bio: 'Cryptography specialist ensuring every transaction is secured with bank-grade protection.',
    github: '#',
    linkedin: '#',
    twitter: '#',
    portfolio: '#',
  },
];

export function Developers() {
  return (
    <section id="developers" className="section-padding bg-dark-50 dark:bg-dark-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-label uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4">
            Meet the Developers
          </p>
          <h2 className="text-display-md md:text-display-lg font-bold text-dark-900 dark:text-white mb-4">
            The Team Behind OffiMesh
          </h2>
          <p className="text-body-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            A dedicated team of engineers building the future of offline payments in Africa.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-3xl overflow-hidden card-hover">
                {/* Avatar placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                      <span className="text-white text-display-sm font-bold">
                        {dev.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-purple-600/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <a
                      href={dev.github}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label={`${dev.name} GitHub`}
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={dev.linkedin}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label={`${dev.name} LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={dev.twitter}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label={`${dev.name} Twitter`}
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={dev.portfolio}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label={`${dev.name} Portfolio`}
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-headline-sm font-semibold text-dark-900 dark:text-white mb-1">
                    {dev.name}
                  </h3>
                  <p className="text-body-sm text-purple-600 dark:text-purple-400 mb-3">
                    {dev.role}
                  </p>
                  <p className="text-body-sm text-dark-500 dark:text-dark-400">
                    {dev.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
