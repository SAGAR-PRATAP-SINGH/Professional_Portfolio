import { motion } from 'framer-motion';
import { Code, Layers, Database, Wrench } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
      color: 'from-primary to-accent',
    },
    {
      icon: Layers,
      title: 'Frameworks',
      skills: ['React.js', 'Node.js', 'NestJS', 'Express.js'],
      color: 'from-accent to-fruity',
    },
    {
      icon: Database,
      title: 'Tools & Cloud',
      skills: ['AWS', 'MongoDB', 'Docker', 'Power BI', 'Tableau'],
      color: 'from-fruity to-primary',
    },
    {
      icon: Wrench,
      title: 'Core Concepts',
      skills: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
      color: 'from-primary via-accent to-fruity',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-fruity/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase block mb-4">
            Technical Arsenal
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-text">
            Skills & <span className="bg-gradient-to-r from-primary via-accent to-fruity bg-clip-text text-transparent">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-surface p-8 rounded-3xl border border-primary/10 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-text">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-background/50 rounded-full text-text-secondary text-sm font-medium border border-primary/10 hover:border-accent/30 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary text-lg">
            <span className="text-accent font-semibold">Soft Skills:</span> Teamwork · Problem-Solving · Communication · Adaptability
          </p>
        </motion.div>
      </div>
    </section>
  );
};
