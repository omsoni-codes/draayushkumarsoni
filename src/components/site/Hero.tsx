import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/dr-aayush.jpg.asset.json";
import { Counter } from "./Counter";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: 0.15 + i * 0.08 },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-24"
    >
      {/* Soft radial ambience */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, color-mix(in oklab, var(--color-accent) 12%, transparent), transparent 70%), radial-gradient(50% 40% at 0% 100%, color-mix(in oklab, var(--color-accent) 8%, transparent), transparent 60%)",
        }}
      />

      <div className="container-x flex flex-col items-center pt-8 text-center">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="flex flex-col items-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow"
          >
            Orthopaedic Surgeon · Bhopal
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="display-xl mt-6 max-w-5xl text-balance text-primary"
          >
            Movement is medicine.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Restoring yours.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Consultant orthopaedic surgeon at Lakshya Multispeciality Hospital —
            trauma, joint replacement, arthroscopy and spine.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              href="#book"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-primary hover:bg-surface"
            >
              Learn more
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Parallax portrait */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.4 }}
          style={{ y: imgY, scale: imgScale }}
          className="relative mt-16 w-full max-w-3xl"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-transparent to-transparent blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-elegant">
            <img
              src={portrait.url}
              alt="Dr. Aayush Soni, orthopaedic surgeon"
              width={1024}
              height={1280}
              className="aspect-[4/3] h-full w-full object-cover object-top sm:aspect-[16/10]"
            />
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-4 border-t border-border pt-10"
        >
          {[
            { label: "Experience", value: <Counter to={6} suffix="+ yrs" /> },
            { label: "Surgeries", value: <Counter to={1000} suffix="+" /> },
            { label: "Emergency", value: "24×7" },
          ].map((s) => (
            <div key={s.label} className="text-left sm:text-center">
              <dt className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </dt>
              <dd className="mt-2 font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
