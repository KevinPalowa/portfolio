import { motion } from "framer-motion";
import { aboutContent } from "../../data/content";
import SectionHeading from "../common/SectionHeading";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const { heading, intro, paragraphs, stackTitle, stackItems, quickFacts } =
    aboutContent;

  return (
    <section id="about" className="space-y-10 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <SectionHeading eyebrow="About" title={heading} description={intro} />
      </motion.div>
      <motion.div
        className="grid gap-10 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        variants={fadeIn}
      >
        <div className="space-y-6 md:col-span-2">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
          <div className="space-y-8 rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur dark:border-white/10 dark:bg-slate-900/40">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              {stackTitle}
            </p>
            <ul className="mt-4 space-y-2 text-slate-900 dark:text-slate-100">
              {stackItems.map((item) => (
                <li key={item} className="text-base">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {fact.label}
                </p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
