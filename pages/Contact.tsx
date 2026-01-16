
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';

const projectTypes = [
  'Consultation',
  'AI Integration',
  'Web Platform',
  'UI/UX Design',
  'Cloud Infrastructure',
];

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [budget, setBudget] = useState(5000);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Consultation',
    message: ''
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData({ ...formData, email: val });
    if (val && !validateEmail(val)) {
      setEmailError("Please enter a valid work email address.");
    } else {
      setEmailError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError("A valid email is required to proceed.");
      return;
    }

    setIsSending(true);
    setError(null);

    try {
      // NEW VERIFIED ACCESS KEY for veloxcodeagency@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Verified public key
          access_key: "62366b44-934d-4447-9f65-987413861595", 
          name: formData.name,
          email: formData.email,
          subject: `NEW INQUIRY: ${formData.projectType} from ${formData.name}`,
          from_name: "VeloxCode Digital Gateway",
          message: `
Client Profile: ${formData.name}
Response Email: ${formData.email}
Requested Service: ${formData.projectType}
Budget Threshold: $${budget}+

Detailed Project Context:
${formData.message}
          `,
          // Standard Web3Forms attributes
          redirect: "",
          botcheck: ""
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        // Log the exact error from API for debugging
        console.error("Web3Forms Response:", result);
        throw new Error(result.message || "Key validation failed.");
      }
    } catch (err: any) {
      console.error("Transmission Error Details:", err);
      setError("Delivery Error: " + (err.message || "The transmission was blocked. Please email us directly at veloxcodeagency@gmail.com"));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <SEO 
        title="Book a Consultation" 
        description="Let's build something extraordinary. Reach out to VeloxCodeAgency for AI-native web platforms and digital engineering."
      />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              Start your <br />
              <span className="text-primary">evolution.</span>
            </h1>
            <p className="text-xl text-textMain/50 mb-12 max-w-md leading-relaxed">
              Ready to architect something massive? Our lead engineers Sahil and Gokul are ready to review your vision.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Direct Channel</h4>
                  <a href="mailto:veloxcodeagency@gmail.com" className="text-textMain/50 hover:text-primary transition-colors font-mono">
                    veloxcodeagency@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-surface border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                </div>
                <h4 className="font-bold mb-2">Technical Review</h4>
                <p className="text-sm text-textMain/40 leading-relaxed">
                  Every inquiry is personally reviewed by our lead engineers to ensure technical feasibility and architectural alignment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-surface border border-white/5 p-8 md:p-12 rounded-[2.5rem] space-y-8 relative overflow-hidden"
                >
                  {isSending && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-4">
                      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-primary font-mono text-xs uppercase tracking-[0.3em] animate-pulse">Establishing Secure Route...</p>
                    </div>
                  )}

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm font-medium">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-textMain/40">Full Name</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-textMain/40">Work Email</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleEmailChange}
                        className={`w-full bg-background border rounded-2xl px-6 py-4 focus:outline-none transition-colors text-white ${
                          emailError ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'
                        }`}
                      />
                      {emailError && (
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{emailError}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-textMain/40">Objective</label>
                    <div className="flex flex-wrap gap-3">
                      {projectTypes.map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({...formData, projectType: type})}
                          className={`px-4 py-2 border rounded-xl text-sm transition-all active:scale-95 ${
                            formData.projectType === type 
                              ? 'bg-primary text-background border-primary font-bold shadow-[0_0_15px_rgba(0,212,255,0.2)]' 
                              : 'bg-background border-white/10 text-textMain/50 hover:border-white/30'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold uppercase tracking-widest text-textMain/40">Scale (Budget)</label>
                      <span className="text-primary font-bold font-heading">${budget.toLocaleString()}+</span>
                    </div>
                    <input 
                      type="range" 
                      min="5000" 
                      max="100000" 
                      step="5000"
                      value={budget}
                      onChange={(e) => setBudget(parseInt(e.target.value))}
                      className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-textMain/40">Brief Context</label>
                    <textarea 
                      required
                      name="message"
                      rows={4}
                      placeholder="Outline your challenges or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none text-white"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSending || !!emailError}
                    className="w-full py-5 bg-primary text-background font-bold rounded-2xl hover:bg-white transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm Consultation Request
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-surface border border-white/5 p-12 rounded-[2.5rem] text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-4 text-white">Transmission Successful</h3>
                  <p className="text-textMain/50 mb-8 leading-relaxed max-w-sm mx-auto">
                    Your request has been routed to Sahil and Gokul. You will receive a technical brief at <span className="text-white">{formData.email}</span> within 24 hours.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href={`mailto:veloxcodeagency@gmail.com?subject=Consultation: ${formData.projectType}&body=Name: ${formData.name}%0D%0AMessage: ${formData.message}`}
                      className="inline-block px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-all text-white"
                    >
                      Instant Mail Backup
                    </a>
                    <br />
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-bold text-sm hover:underline"
                    >
                      Send another request
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
