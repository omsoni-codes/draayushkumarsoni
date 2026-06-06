import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Six months after my knee replacement I'm back to my morning walks pain-free. Dr. Soni explained every step and his team was wonderful.",
    name: "Mrs. Sharma",
    detail: "Total Knee Replacement",
  },
  {
    quote:
      "Tore my ACL playing cricket. The arthroscopic surgery and rehab plan got me back on the pitch within five months.",
    name: "Rohan M.",
    detail: "ACL Reconstruction",
  },
  {
    quote:
      "Honest, patient and never rushed. He suggested non-surgical treatment first and it worked. Truly grateful.",
    name: "Mr. Verma",
    detail: "Frozen Shoulder",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Patient stories</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Trusted by people who needed to move again.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-accent/40"
            >
              <Quote className="h-7 w-7 text-accent/70" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display text-sm font-semibold text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.detail}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
