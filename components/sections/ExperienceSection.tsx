import { motion } from "framer-motion";
import { experienceTimeline } from "../../data/content";
import SectionHeading from "../common/SectionHeading";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-10 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <SectionHeading
          eyebrow="Experience"
          title="Relevant experience"
          description="A track record of shipping for agencies and enterprise contexts—leading the frontend layer from brief to release."
        />
      </motion.div>
      <div className="space-y-10">
        {experienceTimeline.map((experience, index) => (
          <motion.div
            key={experience.company}
            className="relative pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={fadeIn}
          >
            <span className="absolute left-0 top-1 flex flex-col items-center">
              <span className="h-4 w-4 rounded-full border-2 border-teal-400 bg-white dark:bg-slate-950" />
              {index !== experienceTimeline.length - 1 && (
                <span className="mt-1 block h-full w-px bg-slate-300 dark:bg-slate-700" />
              )}
            </span>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-slate-900/40">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {experience.period}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {experience.role}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300">
                    {experience.company}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                {experience.summary}
              </p>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-200">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-2 text-sm md:text-base">
                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-300" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
