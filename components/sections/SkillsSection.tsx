import { motion } from "framer-motion";
import { skillCategories } from "../../data/content";
import SectionHeading from "../common/SectionHeading";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-10 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <SectionHeading
          eyebrow="Skills"
          title="Toolset to scale digital products"
          description="Modern frontend strategies that bridge business goals with measurable UX. Built with strong DX so teams can ship faster."
        />
      </motion.div>
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        variants={fadeIn}
      >
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-6 dark:border-white/10 dark:from-slate-900/80 dark:to-slate-900/40"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h3>
              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs uppercase tracking-widest text-slate-700 dark:bg-white/10 dark:text-slate-300">
                {category.skills.length} skills
              </span>
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-300" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
