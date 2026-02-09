import { ReactNode } from "react";

type Props = {
  eyebrow?: ReactNode;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: Props) {
  return (
    <div className={`space-y-4 ${className}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
