
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SkeletonPost } from '../components/Skeleton';

const posts = [
  {
    id: 1,
    title: "The Future of AI-Native Web Architectures",
    excerpt: "Exploring how LLMs are redefining the way we think about frontend and backend boundaries.",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    tag: "Engineering"
  },
  {
    id: 2,
    title: "Scaling Next.js Applications for Global Traffic",
    excerpt: "Best practices for edge caching, performance optimization, and modular component design.",
    date: "Oct 08, 2024",
    readTime: "8 min read",
    tag: "Performance"
  },
  {
    id: 3,
    title: "Building Trust with Client Dashboards",
    excerpt: "How transparency and real-time metrics improve the agency-client relationship.",
    date: "Sep 29, 2024",
    readTime: "4 min read",
    tag: "Design"
  }
];

const Blog: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Slightly longer delay to show off the premium skeletons
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6">
      <SEO 
        title="Insights & Engineering Updates" 
        description="Stay ahead with our latest thoughts on AI architectures, performance at scale, and digital product design."
      />
      <div className="max-w-4xl mx-auto">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Insights & <span className="text-secondary">Updates.</span>
          </motion.h1>
          <p className="text-xl text-textMain/50">
            Thoughts on AI, engineering excellence, and the future of digital products.
          </p>
        </header>

        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12"
              >
                {[1, 2, 3].map(i => <SkeletonPost key={i} />)}
              </motion.div>
            ) : (
              <motion.div 
                key="posts"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-12"
              >
                {posts.map((post, idx) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                          {post.tag}
                        </span>
                        <span className="text-xs text-textMain/30">{post.date}</span>
                      </div>
                      <span className="text-xs text-textMain/30 uppercase tracking-widest">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-textMain/60 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="h-px w-full bg-white/5 group-hover:bg-primary/30 transition-colors"></div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Blog;
