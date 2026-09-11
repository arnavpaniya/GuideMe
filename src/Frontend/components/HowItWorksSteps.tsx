"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Step = {
  number: string;
  title: string;
  copy: string;
};

export function HowItWorksSteps({ items }: { items: Step[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-px overflow-hidden rounded-[2rem] border border-violet-100 bg-violet-100 shadow-[0_20px_60px_-45px_rgba(30,27,75,0.25)] sm:grid-cols-2">
      {items.map((item, index) => (
        <motion.article
          key={item.number}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`group bg-white p-6 sm:p-7 ${
            index < 2 ? "border-b border-violet-100 sm:border-b-0" : ""
          } ${
            index % 2 === 0 ? "sm:border-r sm:border-violet-100" : ""
          } ${
            index >= 2 ? "border-t border-violet-100 sm:border-t-0" : ""
          } transition duration-200 hover:bg-[#FAF5FF]`}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="text-3xl font-bold tracking-[-0.04em] text-violet-200 transition-colors duration-200 group-hover:text-violet-300">
              {item.number}
            </span>
            <ArrowRight className="size-4 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#7C3AED]" />
          </div>

          <h3 className="mt-10 text-lg font-semibold tracking-tight text-[#1E1B4B]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-500">{item.copy}</p>
        </motion.article>
      ))}
    </div>
  );
}
