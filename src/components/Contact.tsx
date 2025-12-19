import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Code } from 'lucide-react';

export const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'singhsagarpratap04@gmail.com',
      href: 'mailto:singhsagarpratap04@gmail.com',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View Profile',
      href: 'https://github.com/singhsagarpratap04',
      gradient: 'from-accent to-fruity',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect',
      href: 'https://linkedin.com/in/singhsagarpratap04',
      gradient: 'from-fruity to-primary',
    },
    {
      icon: Code,
      label: 'LeetCode',
      value: 'View Solutions',
      href: 'https://leetcode.com/singhsagarpratap04',
      gradient: 'from-primary via-accent to-fruity',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fruity/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase block mb-4">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-text mb-6">
            Let's Build <span className="bg-gradient-to-r from-primary via-accent to-fruity bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-surface p-8 rounded-3xl border border-primary/10 cursor-pointer group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10 flex items-center gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="w-8 h-8 text-background" />
                </div>
                <div className="flex-1">
                  <p className="text-text-secondary text-sm mb-1">{contact.label}</p>
                  <p className="text-text font-semibold text-lg">{contact.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary">
            Available for freelance projects and full-time opportunities
          </p>
          <p className="text-accent font-semibold mt-2">+91 8269710025</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-primary/10 text-center"
        >
          <p className="text-text-secondary text-sm">
            Designed & Built by Sagar Pratap Singh
          </p>
        </motion.div>
      </div>
    </section>
  );
};
