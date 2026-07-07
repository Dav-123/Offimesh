'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Code2, Cpu } from 'lucide-react';

interface Developer {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  github: string;
  photo: string | null;
  avatarGradient: string;
  initials: string;
  highlight: string;
}

const developers: Developer[] = [
  {
    name: 'David Briggs',
    role: 'Full Stack Engineer',
    bio: 'Architected OffiMesh from the ground up. Passionate about building resilient payment infrastructure that works in the toughest conditions. Specializes in React Native, Node.js, and distributed offline systems.',
    skills: ['React Native', 'Node.js', 'TypeScript', 'Android'],
    github: 'https://github.com/Dav-123/offimesh',
    photo: '/images/david.jpg',
    avatarGradient: 'from-purple-600 to-indigo-700',
    initials: 'DB',
    highlight: 'Lead Builder',
  },
  {
    name: 'Diamond Belema',
    role: 'Software Developer',
    bio: 'Core contributor to OffiMesh mobile and backend layers. Driven by the mission to bring reliable financial tools to every corner of Africa, regardless of connectivity.',
    skills: ['Kotlin', 'Python', 'Bluetooth BLE', 'Cryptography'],
    github: 'https://github.com/Dav-123/offimesh',
    photo: null,
    avatarGradient: 'from-fuchsia-500 to-purple-700',
    initials: 'DB',
    highlight: 'Core Developer',
  },
];

function DevAvatar({ dev }: { dev: Developer }) {
  const [imgError, setImgError] = React.useState(false);

  if (dev.photo && !imgError) {
    return (
      <Image
        src={dev.photo}
        alt={`${dev.name} - ${dev.role}`}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover object-top"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${dev.avatarGradient} flex items-center justify-center`}>
      <div className="text-center">
        <div className="w-24 h-24 mx-auto rounded-full border-4 border-white/30 bg-white/10 flex items-center justify-center mb-2">
          <span className="text-white text-4xl font-bold">{dev.initials}</span>
        </div>
        {dev.name === 'Diamond Belema' && (
          <span className="text-white/60 text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/20">
            AI Avatar
          </span>
        )}
      </div>
    </div>
  );
}

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
            Meet the Builders
          </p>
          <h2 className="text-display-md md:text-display-lg font-bold text-dark-900 dark:text-white mb-4">
            The Team Behind OffiMesh
          </h2>
          <p className="text-body-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            Two engineers on a mission to redefine digital payments across Africa — no internet required.
          </p>
        </motion.div>

        {/* Looking for teammates CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12 rounded-2xl border-2 border-dashed border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/30 p-6 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Cpu className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="text-headline-sm font-semibold text-purple-700 dark:text-purple-300">
              We are looking for teammates!
            </span>
          </div>
          <p className="text-body-sm text-dark-500 dark:text-dark-400">
            Excited about offline payments and fintech for Africa? We are actively seeking co-builders with skills in mobile development, security engineering, or product design. Reach out on GitHub.
          </p>
        </motion.div>

        {/* Team Grid - centered 2 cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-3xl overflow-hidden card-hover">
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <DevAvatar dev={dev} />

                  {/* Hover overlay — GitHub only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-dark-900 font-semibold text-body-sm hover:bg-purple-50 transition-colors w-fit"
                      aria-label={`${dev.name} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </div>

                  {/* Highlight badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold shadow-lg">
                      <Code2 className="h-3 w-3" />
                      {dev.highlight}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-headline-md font-bold text-dark-900 dark:text-white">
                        {dev.name}
                      </h3>
                      <p className="text-body-sm text-purple-600 dark:text-purple-400 font-medium">
                        {dev.role}
                      </p>
                    </div>
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 w-9 rounded-xl bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-500 dark:text-dark-400 hover:bg-purple-100 dark:hover:bg-purple-900/40 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      aria-label={`${dev.name} GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="text-body-sm text-dark-500 dark:text-dark-400 mb-4 leading-relaxed">
                    {dev.bio}
                  </p>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {dev.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
