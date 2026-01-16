
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SkeletonCard } from '../components/Skeleton';

const projects = [
  { id: 1, title: 'Lumina AI', category: 'Enterprise', image: 'https://picsum.photos/800/600?random=1' },
  { id: 2, title: 'Quant Trading Bot', category: 'Finance', image: 'https://picsum.photos/800/1000?random=2' },
  { id: 3, title: 'Metaverse Gallery', category: 'Web3', image: 'https://picsum.photos/800/600?random=3' },
  { id: 4, title: 'BioTech Dash', category: 'Health', image: 'https://picsum.photos/800/800?random=4' },
  { id: 5, title: 'EcoTrack App', category: 'Enterprise', image: 'https://picsum.photos/800/1200?random=5' },
  { id: 6, title: 'SwiftPay SDK', category: 'Finance', image: 'https://picsum.photos/800/600?random=6' },
];

const categories = ['All', 'Enterprise', 'Finance', 'Web3', 'Health'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (c: string) => {
    if (c === filter) return;
    setIsFiltering(true);
    setFilter(c);
    // Simulate network delay for filter change
    setTimeout(() => setIsFiltering(false), 600);
  };

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 px-6">
      <SEO 
        title="Proof of Performance" 
        description="Browse our portfolio of high-impact AI solutions, fintech platforms, and immersive Web3 experiences."
      />
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-12"
          >
            Proof of <span className="text-primary">Performance.</span>
          </motion.h1>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => handleFilterChange(c)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === c 
                    ? 'bg-primary text-background' 
                    : 'bg-surface border border-white/5 text-textMain/50 hover:border-primary/50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </header>

        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            {isLoading || isFiltering ? (
              <motion.div 
                key="skeletons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
              >
                {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
              </motion.div>
            ) : (
              <motion.div 
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                layout
                className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="break-inside-avoid"
                    >
                      <div className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/5">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{project.category}</span>
                          <h3 className="text-2xl font-heading font-bold">{project.title}</h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
