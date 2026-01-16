
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const team = [
  {
    name: "Sahil Goyal",
    role: "Founder & Lead Engineer",
    image: "https://i.pravatar.cc/300?u=sahil",
    expertise: ["Next.js", "Cloud Architecture", "System Design"]
  },
  {
    name: "Gokul Kumar Sant",
    role: "Co-Founder & AI Engineer",
    image: "https://i.pravatar.cc/300?u=gokul",
    expertise: ["LLM Orchestration", "PyTorch", "RAG Systems"]
  },
  {
    name: "Robin Singh",
    role: "Full Stack Developer",
    image: "https://i.pravatar.cc/300?u=robin",
    expertise: ["React", "TypeScript", "Node.js"]
  }
];

const Team: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <SEO 
        title="Meet the Collective" 
        description="The specialists behind VeloxCodeAgency. Led by Sahil Goyal and Gokul Kumar Sant, our elite team pushes the boundaries of web engineering."
      />
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            The Minds Behind <br /><span className="text-primary">The Code.</span>
          </motion.h1>
          <p className="text-xl text-textMain/50 max-w-2xl mx-auto">
            A specialized unit of engineers and visionaries dedicated to building the next generation of AI-native platforms.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-64 h-64 object-cover rounded-[2.5rem] relative z-10 grayscale hover:grayscale-0 transition-all duration-500 border border-white/5"
                />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">{member.name}</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">{member.role}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.expertise.map(exp => (
                  <span key={exp} className="px-3 py-1 bg-surface border border-white/5 rounded-full text-[10px] text-textMain/40 uppercase font-bold tracking-tighter">
                    {exp}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 rounded-[3rem] bg-surface border border-white/5 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Join the Collective</h2>
          <p className="text-textMain/50 mb-8 max-w-xl mx-auto">We're always looking for world-class engineers to join Sahil, Gokul, and Robin in our mission.</p>
          <button className="px-8 py-4 bg-background border border-primary/50 text-primary font-bold rounded-full hover:bg-primary hover:text-background transition-all">
            View Careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
