import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const GOOGLE_URL = "https://share.google/tT8IBydPU7t5ZyeIt";

const highlights = [
  {
    stars: 5,
    text: "Dr. Aayush is extremely knowledgeable and patient. Explained my knee condition in detail and suggested the right treatment.",
    name: "Verified Google review",
  },
  {
    stars: 5,
    text: "Very skilled orthopaedic surgeon. My father's hip replacement went smoothly and recovery was faster than expected.",
    name: "Verified Google review",
  },
  {
    stars: 5,
    text: "Honest doctor — he told me surgery wasn't needed and physiotherapy worked. Grateful for the ethical advice.",
    name: "Verified Google review",
  },
];

export function GoogleReviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="liquid-glass inline-flex items-center gap-3 rounded-full px-5 py-2">
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-sm font-semibold text-primary">
              5.0 on Google
            </span>
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
            Trusted by patients across Bhopal.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Read verified reviews on Google or share your experience after your visit.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-glass flex h-full flex-col rounded-3xl p-6"
            >
              <span className="flex items-center gap-0.5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4 text-xs uppercase tracking-wider text-muted-foreground">
                {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            Read all reviews on Google
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Leave a review
          </a>
        </div>
      </div>
    </section>
  );
}
