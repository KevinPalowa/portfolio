import { motion } from "framer-motion";
import { contactContent } from "../../data/content";
import SectionHeading from "../common/SectionHeading";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const { heading, copy, availability, email, phone, socials } =
    contactContent;

  return (
    <section id="contact" className="space-y-10 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <SectionHeading eyebrow="Contact" title={heading} description={copy} />
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          className="space-y-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={fadeIn}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Availability
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-200">
            {availability}
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Email
              </p>
              <a
                href={`mailto:${email}`}
                className="text-xl font-semibold text-slate-900 hover:text-teal-600 dark:text-white dark:hover:text-teal-300"
              >
                {email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Phone / WhatsApp
              </p>
              <a
                href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`}
                className="text-xl font-semibold text-slate-900 hover:text-teal-600 dark:text-white dark:hover:text-teal-300"
              >
                {phone}
              </a>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Prefer email for briefs and documentation, WhatsApp for quick sync.
          </p>
        </motion.div>
        <motion.div
          className="space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Social links
          </p>
          <ul className="space-y-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition hover:border-teal-400 hover:text-teal-600 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-200 dark:hover:text-teal-300"
                >
                  <span>{social.label}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {social.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="rounded-xl bg-gradient-to-r from-teal-500/20 to-teal-400/10 p-4 text-sm text-slate-700 dark:text-slate-200">
            Send over a short brief (problem, timeline, stack) and I&apos;ll
            reply with next steps and availability.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
