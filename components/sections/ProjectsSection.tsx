import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import projectsData from "../../data/projects.json";
import { Project } from "../../types/content";

const projects = projectsData as Project[];
const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-10 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <SectionHeading
          eyebrow="Projects"
          title="Representative deliveries"
          description="A curated look at initiatives that required slicing high-fidelity designs, integrating mission-critical APIs, and keeping performance measurable across devices."
        />
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur dark:border-white/10 dark:bg-slate-950/40 dark:shadow-black/30"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                  {project.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-widest text-slate-600 dark:bg-white/10 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-slate-600 dark:text-slate-200">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm md:text-base">
                  <span className="mt-1 h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

          </motion.article>
        ))}
      </div>
    </section>
  );
}
