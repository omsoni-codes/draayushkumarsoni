import { ArrowRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/dr-aayush.jpg.asset.json";
import { Counter } from "./Counter";
import { SocialLinks } from "./SocialLinks";
import { Magnetic } from "./Magnetic";
import { useLang } from "@/lib/i18n";


const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease, delay: 0.15 + i * 0.09 },
  }),
};

export function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springy = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.5 });
  const imgY = useTransform(springy, [0, 1], [0, 180]);
  const imgScale = useTransform(springy, [0, 1], [1, 1.1]);
  const imgRotate = useTransform(springy, [0, 1], [0, -2]);
  const textY = useTransform(springy, [0, 1], [0, -80]);
  const textOpacity = useTransform(springy, [0, 0.7], [1, 0]);

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
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="hue-glow"
          >
            <div className="liquid-glass inline-flex items-center gap-3 rounded-full px-6 py-3 text-base font-semibold tracking-tight text-primary sm:text-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              Dr Aayush Soni
            </div>
          </motion.div>

          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="eyebrow mt-8"
          >
            {t("hero.eyebrow")}
          </motion.span>


          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="display-xl mt-6 max-w-5xl text-balance text-primary"
          >
            {t("hero.title.1")}
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t("hero.title.2")}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >

            <Magnetic>
              <motion.a
                href="#book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant"
              >
                {t("hero.cta.book")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-primary hover:bg-surface"
              >
                {t("hero.cta.learn")}
              </motion.a>
            </Magnetic>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-6 flex flex-col items-center gap-3"
          >
            <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {t("hero.connect")}
            </span>
            <SocialLinks />
          </motion.div>

        </motion.div>


        {/* Parallax portrait */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
          style={{ y: imgY, scale: imgScale, rotate: imgRotate }}
          className="relative mt-16 w-full max-w-2xl"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-transparent to-transparent blur-3xl" />
          <div className="liquid-glass overflow-hidden rounded-[2rem] p-2">
            <img
              src={portrait.url}
              alt="Dr. Aayush Soni, orthopaedic surgeon"
              width={1024}
              height={1280}
              className="aspect-[4/5] h-full w-full rounded-[1.6rem] object-cover object-[center_20%] sm:aspect-[5/6]"
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
            { label: t("hero.stats.exp"), value: <Counter to={6} suffix={t("hero.stats.yrs")} /> },
            { label: t("hero.stats.surg"), value: <Counter to={1000} suffix="+" /> },
            { label: t("hero.stats.emer"), value: "24×7" },
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
