import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { getData, addData } from '../src/api';

const stats = [
  { label: 'Active Projects', value: '2' },
  { label: 'Total Invoices', value: '$24,500' },
  { label: 'Milestones Completed', value: '18/24' },
];

const projects = [
  { id: '1', name: 'NovaHealth Platform', status: 'In Progress', progress: 75, lastUpdate: '2h ago', health: 'Healthy' },
  { id: '2', name: 'Z-Commerce Rebrand', status: 'Design Phase', progress: 30, lastUpdate: '1d ago', health: 'Healthy' },
];

const activity = [
  { user: 'Sahil Goyal', action: 'pushed to main', target: 'nova-health-api', time: '10m ago' },
  { user: 'Gokul Kumar Sant', action: 'updated', target: 'AI model weights', time: '1h ago' },
  { user: 'Robin Singh', action: 'resolved', target: 'Auth UI bug', time: '3h ago' },
];

const Dashboard: React.FC = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData('test');
      setData(result);
    };
    fetchData();
  }, []);

  const handleAddItem = async () => {
    await addData('test', { name: newItem });
    setNewItem('');
    const result = await getData('test');
    setData(result);
  };

  return (
    <div className="pt-32 pb-20 px-6 bg-[#090C14]">
      <SEO 
        title="Client Dashboard" 
        description="Secure access to your project metrics, timelines, and deliverables."
      />
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs uppercase tracking-widest text-green-500 font-bold">Live System Connectivity: Active</span>
            </div>
            <h1 className="text-4xl font-heading font-bold mb-1">Welcome, Partner.</h1>
            <p className="text-textMain/50">Your ecosystem is scaling as engineered.</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-all">
              Manage Billing
            </button>
            <button className="px-6 py-3 bg-primary text-background font-bold rounded-xl flex items-center hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all">
              Request Feature
            </button>
          </div>
        </header>

        {/* Database Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-8">Database Data</h2>
          <div className="bg-surface border border-white/5 rounded-[2rem] p-6 space-y-6">
            <div className="flex space-x-4">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-white/10 rounded-lg text-white"
                placeholder="Enter new item"
              />
              <button
                onClick={handleAddItem}
                className="px-6 py-2 bg-primary text-background font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
              >
                Add Item
              </button>
            </div>
            <ul className="space-y-2">
              {data.map((item) => (
                <li key={item.id} className="text-white p-2 bg-background rounded-lg">{item.name}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-surface border border-white/5 group hover:border-primary/20 transition-all"
            >
              <p className="text-sm text-textMain/40 mb-2">{stat.label}</p>
              <p className="text-3xl font-heading font-bold group-hover:text-primary transition-colors">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-heading font-bold mb-8">Active Projects</h2>
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.id} className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold">{project.name}</h3>
                          <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[10px] rounded font-bold uppercase">{project.health}</span>
                        </div>
                        <span className="text-xs text-primary font-bold uppercase tracking-wider">{project.status}</span>
                      </div>
                      <span className="text-xs text-textMain/30">Updated {project.lastUpdate}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-textMain/50">Overall Progress</span>
                        <span className="text-white font-bold">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          className="h-full bg-primary"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex space-x-4">
                      <button className="px-4 py-2 text-sm bg-white/5 rounded-lg hover:bg-white/10 transition-all">Review Design</button>
                      <button className="px-4 py-2 text-sm bg-white/5 rounded-lg hover:bg-white/10 transition-all">Dev Environment</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-8">Live Activity Feed</h2>
              <div className="bg-surface border border-white/5 rounded-[2rem] p-6 space-y-6">
                {activity.map((act, i) => (
                  <div key={i} className="flex items-center justify-between text-sm border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                        {act.user.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <span className="font-bold text-white">{act.user}</span>
                        <span className="text-textMain/40 mx-2">{act.action}</span>
                        <span className="font-mono text-primary/80">{act.target}</span>
                      </div>
                    </div>
                    <span className="text-xs text-textMain/20">{act.time}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <h2 className="text-2xl font-heading font-bold">Upcoming Milestones</h2>
            <div className="p-8 rounded-3xl bg-surface border border-white/5">
              <div className="space-y-6">
                {[
                  { date: 'Oct 24', label: 'UX Workshop', desc: 'NovaHealth' },
                  { date: 'Oct 28', label: 'Final Asset Delivery', desc: 'Z-Commerce' },
                  { date: 'Nov 02', label: 'UAT Testing Starts', desc: 'NovaHealth' },
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs text-center">
                        {item.date.split(' ')[0]}<br/>{item.date.split(' ')[1]}
                      </div>
                      {i !== 2 && <div className="w-px h-full bg-white/5 my-2"></div>}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{item.label}</h4>
                      <p className="text-xs text-textMain/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/20 border border-white/5 text-center">
              <h3 className="font-heading font-bold mb-4">Direct Channel</h3>
              <p className="text-sm text-textMain/60 mb-6">Need a rapid response? Sahil & Gokul are available for urgent syncs.</p>
              <button className="w-full py-3 bg-white text-background font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-white/10">
                Slack Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
