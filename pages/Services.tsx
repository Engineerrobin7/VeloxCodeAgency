
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const serviceList = [
  {
    title: 'AI Native Systems',
    description: 'Custom LLM fine-tuning, RAG implementation, and intelligent agent orchestration.',
    tech: ['PyTorch', 'LangChain', 'OpenAI', 'VectorDB'],
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Modern Web Apps',
    description: 'Blazing fast, secure, and accessible applications built with the Next.js ecosystem.',
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Distributed Architecture',
    description: 'Cloud-native infrastructure designed for high availability and global scale.',
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Serverless'],
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    title: 'Visual Engineering',
    description: 'Interactive 3D experiences and performant animations that capture attention.',
    tech: ['Three.js', 'Framer Motion', 'GSAP', 'WebGL'],
    color: 'from-emerald-500/20 to-teal-500/20'
  }
];

const Services: React.FC = () => {
  const [features, setFeatures] = useState<string[]>([]);
  
  const toggleFeature = (f: string) => {
    setFeatures(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);
  };

  const calculateEstimate = () => {
    const base = 5000;
    const featureCosts: Record<string, number> = {
      'AI Integration': 4500,
      'Auth Systems': 1200,
      '3D Visuals': 3000,
      'Dashboard': 2500,
      'Multi-lang': 1500
    };
    return base + features.reduce((acc, f) => acc + (featureCosts[f] || 0), 0);
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <SEO 
        title="Masterful Engineering Services" 
        description="From AI Native systems to visual engineering with Three.js. Explore our suite of elite digital services."
      />
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Engineering <br /><span className="text-primary">Mastery.</span>
          </motion.h1>
          <p className="text-xl text-textMain/50 max-w-2xl leading-relaxed">
            We don't just build websites. We architect intelligent ecosystems that empower businesses to lead in an AI-first world.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {serviceList.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${service.color} border border-white/5 relative group overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                0{idx + 1}
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">{service.title}</h2>
              <p className="text-textMain/70 mb-8 leading-relaxed">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* New: Calculator Section */}
        <section className="bg-surface rounded-[3rem] p-8 md:p-16 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Estimate your <span className="text-secondary">Project.</span></h2>
              <p className="text-textMain/50 mb-10 leading-relaxed">
                Transparency is our core value. Select the modules you need for a ballpark engineering estimate.
              </p>
              <div className="flex flex-wrap gap-4">
                {['AI Integration', 'Auth Systems', '3D Visuals', 'Dashboard', 'Multi-lang'].map(f => (
                  <button
                    key={f}
                    onClick={() => toggleFeature(f)}
                    className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all border ${
                      features.includes(f) 
                        ? 'bg-primary text-background border-primary shadow-[0_0_20px_rgba(0,212,255,0.3)]' 
                        : 'bg-background border-white/10 text-textMain/50 hover:border-white/30'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-background/50 rounded-[2rem] p-10 flex flex-col justify-center items-center text-center border border-white/5">
              <span className="text-sm uppercase tracking-[0.2em] text-textMain/30 mb-2 font-bold">Estimated Investment</span>
              <div className="text-6xl md:text-7xl font-heading font-bold text-white mb-6">
                ${calculateEstimate().toLocaleString()}
              </div>
              <p className="text-xs text-textMain/30 mb-8">*Final pricing based on detailed requirements and timeline.</p>
              <button className="w-full py-4 bg-white text-background font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all">
                Finalize Scope with Sahil & Gokul
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
