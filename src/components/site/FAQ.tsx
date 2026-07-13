import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "@/lib/i18n";

const keys = [
  ["faq.q1", "faq.a1"],
  ["faq.q2", "faq.a2"],
  ["faq.q3", "faq.a3"],
  ["faq.q4", "faq.a4"],
  ["faq.q5", "faq.a5"],
  ["faq.q6", "faq.a6"],
] as const;

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={i} className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-base font-semibold text-primary sm:text-lg">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/10 text-accent"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

export function FAQ() {
  const { t } = useLang();
  return (
    <section id="faq" className="bg-surface py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">{t("faq.eyebrow")}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("faq.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("faq.sub")}</p>
        </div>
        <div className="lg:col-span-8">
          {keys.map(([qk, ak], i) => (
            <Item key={qk} q={t(qk)} a={t(ak)} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
