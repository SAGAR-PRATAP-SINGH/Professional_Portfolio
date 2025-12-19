import { motion } from 'framer-motion';
import { useState } from 'react';
import { Eye, Brain, Mail, Car, X } from 'lucide-react';

interface Project {
  icon: React.ElementType;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  gradient: string;
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      icon: Brain,
      title: 'AI-Powered Facial Recognition',
      tagline: 'Intelligent attendance tracking system',
      problem: 'Manual attendance tracking is time-consuming and prone to errors in educational and workplace environments.',
      solution: 'Designed a system to recognize faces with 95% accuracy using Python & OpenCV. Applied computer vision techniques for real-time identification and automated attendance tracking.',
      tech: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning'],
      impact: '95% accuracy in face recognition with real-time processing',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Mail,
      title: 'Email Onebox Platform',
      tagline: 'Smart email management with AI',
      problem: 'Email overload makes it difficult to prioritize and respond efficiently to important messages.',
      solution: 'Built an email management platform with AI categorization, smart reply suggestions, and Elasticsearch-based search. Developed scalable backend with Node.js & Express and integrated real-time notifications.',
      tech: ['Node.js', 'Express', 'Elasticsearch', 'AI Integration', 'Real-time'],
      impact: 'Streamlined email workflow with intelligent categorization and search',
      gradient: 'from-accent to-fruity',
    },
    {
      icon: Car,
      title: 'ParkingLot Management API',
      tagline: 'Smart parking operations system',
      problem: 'Inefficient parking management leads to poor space utilization and difficulty locating vehicles.',
      solution: 'Developed a RESTful API with NestJS, TypeScript, and Node.js for parking operations. Implemented nearest-slot allocation, real-time status monitoring, and vehicle search by color or registration number.',
      tech: ['NestJS', 'TypeScript', 'Node.js', 'RESTful API', 'Real-time'],
      impact: 'Optimized parking slot allocation with real-time monitoring',
      gradient: 'from-fruity to-primary',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-fruity/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase block mb-4">
            Featured Work
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-text">
            Projects That <span className="bg-gradient-to-r from-primary via-accent to-fruity bg-clip-text text-transparent">Matter</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="bg-surface rounded-3xl border border-primary/10 overflow-hidden cursor-pointer group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="p-8 relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6`}>
                  <project.icon className="w-8 h-8 text-background" />
                </div>

                <h3 className="text-2xl font-bold text-text mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-6">{project.tagline}</p>

                <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                  <span className="font-medium">View Case Study</span>
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface rounded-3xl border border-primary/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <X className="w-5 h-5 text-text" />
            </button>

            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center mb-6`}>
              <selectedProject.icon className="w-10 h-10 text-background" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">{selectedProject.title}</h2>
            <p className="text-xl text-accent mb-8">{selectedProject.tagline}</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text mb-3">Problem</h3>
                <p className="text-text-secondary leading-relaxed">{selectedProject.problem}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text mb-3">Solution</h3>
                <p className="text-text-secondary leading-relaxed">{selectedProject.solution}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-background rounded-full text-text-secondary text-sm font-medium border border-primary/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text mb-3">Impact</h3>
                <p className="text-accent font-semibold text-lg">{selectedProject.impact}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
