import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — OffiMesh',
  description: 'Updates, insights, and stories about building offline payment infrastructure for Africa.',
};

const posts = [
  {
    slug: 'why-offline-payments-matter',
    title: 'Why Offline Payments Matter for Africa',
    excerpt: 'Over 60% of Africa lacks reliable internet. Digital payments cannot be truly inclusive if they require connectivity. Here is why offline-first infrastructure is the key to financial inclusion.',
    date: 'January 12, 2026',
    readTime: '8 min read',
    category: 'Mission',
    featured: true,
  },
  {
    slug: 'bluetooth-le-payments',
    title: 'How We Built Bluetooth LE Payments',
    excerpt: 'A deep dive into our peer-to-peer payment protocol using Bluetooth Low Energy. Learn how we achieve secure data transfer without internet.',
    date: 'January 8, 2026',
    readTime: '12 min read',
    category: 'Engineering',
    featured: false,
  },
  {
    slug: 'nomba-integration',
    title: 'Announcing Nomba Gateway Integration',
    excerpt: 'OffiMesh now integrates with Nomba for seamless settlement and fiat conversion. Here is what this means for merchants and users.',
    date: 'January 5, 2026',
    readTime: '5 min read',
    category: 'Product',
    featured: false,
  },
  {
    slug: 'cryptographic-security',
    title: 'Security Model: Cryptography Without Connectivity',
    excerpt: 'How we secure offline transactions with end-to-end encryption, transaction signing, and zero-knowledge proofs.',
    date: 'December 28, 2025',
    readTime: '10 min read',
    category: 'Security',
    featured: false,
  },
  {
    slug: 'building-for-low-resource-settings',
    title: 'Designing for Low-Resource Settings',
    excerpt: 'Lessons from building a payment app for low-end devices, intermittent power, and challenging network environments.',
    date: 'December 20, 2025',
    readTime: '6 min read',
    category: 'Design',
    featured: false,
  },
];

const categories = ['All', 'Mission', 'Engineering', 'Product', 'Security', 'Design'];

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-display-md font-bold text-dark-900 dark:text-white mb-4">
              OffiMesh Blog
            </h1>
            <p className="text-body-lg text-dark-500 dark:text-dark-400 max-w-2xl">
              Updates, insights, and stories about building offline payment infrastructure for Africa.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-body-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-purple-600 text-white'
                    : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-6 md:p-10 mb-12 bg-gradient-to-br from-purple-600 to-indigo-700"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-body-sm font-medium">
                  Featured
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-body-sm">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-display-sm font-bold text-white mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-body-lg text-white/80 mb-6 max-w-3xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-body-sm text-white/60 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <a
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-white font-semibold hover:opacity-80 transition-opacity"
              >
                Read Article
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.article>
          )}

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-purple-300 dark:hover:border-purple-700 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-headline-md font-semibold text-dark-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-body-md text-dark-500 dark:text-dark-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-body-sm text-dark-400 dark:text-dark-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 glass-card rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-headline-lg font-semibold text-dark-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-body-md text-dark-500 dark:text-dark-400 mb-6 max-w-md mx-auto">
              Get the latest posts and OffiMesh updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
