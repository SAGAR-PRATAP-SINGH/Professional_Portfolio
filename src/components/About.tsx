import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lines = [
    { text: "I don't just write code—", highlight: "I solve problems." },
    { text: "Every project is a chance to", highlight: "learn, build, and improve." },
    { text: "From AI-powered systems to", highlight: "scalable APIs," },
    { text: "I focus on creating solutions that", highlight: "work and matter." },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            About Me
          </span>
        </motion.div>

        <div className="space-y-12">
          {lines.map((line, index) => {
            const start = index * 0.2;
            const end = start + 0.3;
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const y = useTransform(scrollYProgress, [start, end], [50, 0]);

            return (
              <motion.div
                key={index}
                style={{ opacity, y }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                <span className="text-text-secondary">{line.text} </span>
                <span className="bg-gradient-to-r from-primary via-accent to-fruity bg-clip-text text-transparent">
                  {line.highlight}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-8 bg-surface rounded-3xl border border-primary/10"
        >
          <p className="text-lg text-text-secondary leading-relaxed">
            Computer Science graduate from <span className="text-accent font-semibold">Chitkara University</span> (CGPA: 8.60)
            with strong fundamentals in data structures, algorithms, and software engineering.
            Skilled in <span className="text-primary font-semibold">Java, Python, JavaScript, TypeScript, Node.js, and React.js</span>,
            with hands-on experience building web applications, RESTful APIs, and computer vision solutions.
            Quick learner with a collaborative mindset, eager to apply technical knowledge to real-world challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
