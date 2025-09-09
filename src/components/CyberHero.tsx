import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function CyberHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(232, 244, 253, 0.15) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(232, 244, 253, 0.15) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} 
        />
      </div>

      {/* Matrix Rain Effect - Japanese Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-ice-blue text-sm opacity-30 animate-matrix-scroll font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: 10 }, () => 
              String.fromCharCode(0x30A0 + Math.random() * 96)
            ).join('')}
          </div>
        ))}
      </div>

      {/* Floating Particles Around */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-ice-white rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center z-10"
      >
        <motion.div variants={titleVariants} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-4 text-glow hover-tilt">
            <span className="text-ice">HARDIK</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-ice mx-auto mb-6 glow-ice" />
        </motion.div>

        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-4xl font-rajdhani font-light mb-6 text-ice-blue"
        >
          Freelance Frontend Web Developer
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl font-rajdhani mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          I craft <span className="text-ice-blue font-semibold">interactive</span>, 
          <span className="text-ivory font-semibold"> cinematic</span> web experiences with code.
          <br />
          Specializing in <span className="text-ice">React • Next.js • Three.js • GSAP</span>
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button variant="ice-glow" size="lg" className="hover-glow group">
            <Mail className="w-5 h-5 mr-2" />
            Hire Me
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="ice" size="lg" className="hover-glow">
            View Portfolio
          </Button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-8"
        >
          {[
            { icon: Github, label: "GitHub" },
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Mail, label: "Email" },
          ].map(({ icon: Icon, label }) => (
            <motion.a
              key={label}
              href="#"
              className="group flex flex-col items-center space-y-2 text-muted-foreground hover:text-ice-blue transition-all duration-300 hover-tilt"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-3 border border-ice-blue/50 rounded-lg group-hover:border-ice-blue group-hover:shadow-glow-ice transition-all duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-rajdhani">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-16 h-16 border border-ivory rounded-lg flex items-center justify-center text-ivory opacity-40">
            <span className="font-mono text-xs">{'</>'}</span>
          </div>
        </motion.div>

        <motion.div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 border border-ice-blue rounded-lg flex items-center justify-center text-ice-blue opacity-40">
            <span className="font-mono text-xs">JS</span>
          </div>
        </motion.div>

        <motion.div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-14 h-14 border border-frost rounded-lg flex items-center justify-center text-frost opacity-40">
            <span className="font-mono text-xs">3D</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ice-blue rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ivory rounded-full opacity-10 blur-3xl" />
    </div>
  );
}