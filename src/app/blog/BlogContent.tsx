'use client';

import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    slug: 'offimesh-at-hackathon',
    title: 'Building OffiMesh at the Nomba Dev Career Hackathon',
    excerpt: 'How we built an offline-capable payment platform during the Nomba Dev Career Hackathon, June 2026.',
    date: 'June 2026',
    readTime: '5 min read',
    category: 'Hackathon',
    featured: true,
  },
  {
    slug: 'offline-payments-africa',
    title: 'Why Offline Payments Matter for Africa',
    excerpt: 'Over 60% of Africa lacks reliable internet. Digital payments cannot be truly inclusive if they require connectivity. Here is why offline-first infrastructure is key.',
    date: 'June 2026',
    readTime: '6 min read',
    category: 'Mission',
    featured: false,
  },
  {
    slug: 'nomba-integration',
    title: 'How OffiMesh Integrates with Nomba Gateway',
    excerpt: 'Our settlement flow uses Nomba gateway for fiat conversion. Here is how the integration works.',
    date: 'June 2026',
    readTime: '8 min read',
    category: 'Engineering',
    featured: false,
  },
  {
    slug: 'cryptographic-security',
    title: 'Securing Offline Transactions',
    excerpt: 'How we handle end-to-end encryption and secure data transfer without internet connectivity.',
    date: 'June 2026',
    readTime: '7 min read',
    category: 'Security',
    featured: false,
  },
];

const categories = ['All', 'Hackathon', 'Mission', 'Engineering', 'Security'];

export function BlogContent() {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-12 animate-fade-in">
        <h1 className="text-display-md font-serif italic text-paper mb-4">
          OffiMesh Blog
        </h1>
        <p className="text-body-lg text-ink-400 max-w-2xl">
          Updates, insights, and stories about building offline payment infrastructure for Africa.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-12 animate-fade-in">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-body-sm font-medium transition-colors ${
              cat === 'All'
                ? 'bg-accent text-paper'
                : 'bg-ink-800 text-ink-400 hover:bg-ink-700 hover:text-paper'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <article className="glass-card rounded-3xl p-6 md:p-10 mb-12 bg-gradient-to-br from-purple-600 to-indigo-700">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/20 text-paper text-body-sm font-medium">
              Featured
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-body-sm">
              {featuredPost.category}
            </span>
          </div>
          <h2 className="text-display-sm font-bold text-paper mb-4">
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
            className="inline-flex items-center gap-2 text-paper font-semibold hover:opacity-80 transition-opacity"
          >
            Read Article
            <ArrowRight className="h-5 w-5" />
          </a>
        </article>
      )}

      {/* Post Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularPosts.map((post) => (
          <article
            key={post.slug}
            className="glass-card rounded-2xl p-6 hover:border-accent transition-colors group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 rounded bg-ink-800 text-accent text-xs font-medium">
                {post.category}
              </span>
            </div>
            <h3 className="text-headline-md font-semibold text-paper mb-3 group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-body-md text-ink-400 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-body-sm text-ink-500">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
