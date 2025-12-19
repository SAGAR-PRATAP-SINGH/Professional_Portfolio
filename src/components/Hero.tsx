import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fruity/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div style={{ y }} className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            Computer Science Engineer
          </span>
        </motion.div>

        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-8 leading-[0.9]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="block text-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sagar Pratap
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-primary via-accent to-fruity bg-clip-text text-transparent"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Singh
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Building intelligent systems with clean code and creative thinking.
          <span className="block mt-2 text-accent">
            Full-stack developer specializing in scalable solutions.
          </span>
        </motion.p>

        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-primary text-background font-semibold rounded-full hover:bg-accent transition-colors cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-background transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-accent rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
