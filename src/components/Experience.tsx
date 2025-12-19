import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const education = [
    {
      institution: 'Chitkara University',
      degree: 'B.E. Computer Science & Engineering',
      period: '2021 - 2025',
      achievement: 'CGPA: 8.60',
      description: 'Strong fundamentals in data structures, algorithms, and software engineering concepts',
    },
    {
      institution: 'Nirmala Engineering Hr. Sec. School',
      degree: 'Higher Secondary (PCM)',
      period: '2020 - 2021',
      achievement: '91%',
      description: 'Physics, Chemistry, and Mathematics specialization',
    },
  ];

 const certifications = [
  {
    title: 'Technology Job Simulation – Deloitte',
    link: 'https://drive.google.com/file/d/1-w9pA1T-0plxAuGs2jZIWZT11r25ZVYB/view',
  },
  {
    title: 'Cloud Infrastructure Foundations Associate – Oracle',
    link: 'https://drive.google.com/file/d/1YrOSgoCO6ShxgaZ3OX3Lx6y8BFnI7UH0/view',
  },
  {
    title: 'Introduction to Python – Coding Ninjas',
    link: 'https://drive.google.com/file/d/1o9CDEcSbtlI5FKT5xCAGNB2KfBN8443_/view',
  },
  {
    title: 'Introduction to Cloud Computing – Coursera',
    link: 'https://drive.google.com/file/d/1G3-BorTfq7DXUXvHZCgzlAOIDCyrXWOt/view',
  },
  {
    title: 'Software Engineering – Coursera',
    link: 'https://drive.google.com/file/d/1HWORsH0gsAcBtv2MdVYrHb59s7B3hlfu/view',
  },
];


  return (
    <section ref={ref} className="min-h-screen py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase block mb-4">
            Journey
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-text">
            Education & <span className="bg-gradient-to-r from-primary via-accent to-fruity bg-clip-text text-transparent">Growth</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            style={{ scaleY: scaleProgress }}
            className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-fruity origin-top hidden md:block"
          />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-0 md:pl-24"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background hidden md:block"
                />

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-surface p-8 rounded-3xl border border-primary/10 cursor-pointer"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-background" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-text mb-1">{edu.institution}</h3>
                      <p className="text-accent font-semibold">{edu.degree}</p>
                    </div>
                    <span className="text-text-secondary font-medium">{edu.period}</span>
                  </div>
                  <p className="text-text-secondary mb-2">{edu.description}</p>
                  <div className="inline-block px-4 py-2 bg-background rounded-full border border-primary/10">
                    <span className="text-accent font-bold">{edu.achievement}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fruity to-primary flex items-center justify-center">
              <Award className="w-6 h-6 text-background" />
            </div>
            <h3 className="text-3xl font-bold text-text">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="bg-surface p-6 rounded-2xl border border-primary/10 cursor-pointer block hover:border-accent/40"
                >
                  <p className="text-text-secondary font-medium">
                    {cert.title}
                  </p>
                  <span className="mt-2 inline-block text-sm text-accent opacity-80">
                    View Certificate →
                  </span>
                </motion.a>
              ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
};
