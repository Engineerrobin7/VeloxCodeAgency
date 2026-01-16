
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeroScene } from '../components/HeroScene';
import { SEO } from '../components/SEO';

const services = [
  { title: 'AI Integrations', desc: 'Deploying custom LLMs and RAG systems for enterprise scale.', icon: '🧠' },
  { title: 'Full-stack Web', desc: 'High-performance Next.js applications engineered for speed.', icon: '⚡' },
  { title: 'Data Pipelines', desc: 'Scalable data processing and real-time analytics solutions.', icon: '📈' },
  { title: 'UI Systems', desc: 'Design systems that bridge the gap between beauty and code.', icon: '🎨' },
];

const liveStats = [
  { label: 'Uptime', value: '99.9%' },
  { label: 'Commits (24h)', value: '142' },
  { label: 'AI Responses', value: '12k+' },
  { label: 'Active Builds', value: '4' }
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <SEO 
        title="Build Fast. Scale Smarter." 
        description="The AI-native web agency. We engineer premium digital platforms with the speed of light and the clarity of thought."
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <HeroScene />
        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              The AI-Native Web Agency
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-bold mb-6 leading-tight">
              Build fast. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Scale smarter.</span>
            </h1>
            <p className="text-lg md:text-xl text-textMain/70 max-w-2xl mx-auto mb-10 font-light">
              Engineering premium digital platforms with the speed of light and the clarity of thought. Led by Sahil Goyal and Gokul Kumar Sant.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-primary text-background font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              >
                Start a project
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="px-8 py-4 border border-white/10 bg-surface/50 backdrop-blur text-white font-bold rounded-full hover:border-primary transition-all transform hover:scale-105 active:scale-95"
              >
                See our work
              </button>
            </div>
          </motion.div>
        </div>

        {/* Live Stats Bar */}
        <div className="absolute bottom-24 left-0 w-full overflow-hidden bg-white/[0.02] border-y border-white/5 py-4 hidden md:block backdrop-blur-sm">
          <div className="flex justify-around items-center max-w-7xl mx-auto">
            {liveStats.map(stat => (
              <div key={stat.label} className="flex items-center space-x-4">
                <span className="text-[10px] uppercase tracking-widest text-textMain/30 font-bold">{stat.label}</span>
                <span className="font-mono text-primary font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-textMain/30"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Services Grid Preview */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Expertise Stack.</h2>
            <p className="text-textMain/50 max-w-xl mx-auto leading-relaxed">From deep AI model tuning to front-end performance, we cover the full architectural spectrum.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-background border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-textMain/60 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Ready to evolve?</h2>
          <p className="text-lg text-textMain/60 mb-10 leading-relaxed">
            Join the forward-thinking founders building the next generation of the web with Sahil, Gokul, and Robin.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all transform hover:-translate-y-1"
          >
            Book a consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
