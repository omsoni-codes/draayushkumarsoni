import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import portrait from "@/assets/dr-aayush.jpg.asset.json";
import { Counter } from "./Counter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Animated ambient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[24rem] w-[24rem] rounded-full bg-secondary/20 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="order-2 lg:order-1">
          <motion.span variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow">
            Orthopaedic Surgeon · MBBS, MS Ortho
          </motion.span>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-primary sm:text-5xl lg:text-6xl"
          >
            Movement is medicine.
            <span className="block text-accent">Restoring yours.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Dr. Aayush Soni is a consultant orthopaedic surgeon at Lakshya
            Multispeciality Hospital, Bhopal — specialising in trauma, joint
            replacement, arthroscopy and spine surgery, with experience across
            AIIMS Bhopal, Bansal Hospital and SAMC Indore.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              href="#book"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="tel:+918602420313"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-primary hover:bg-surface"
            >
              Call +91 86024 20313
            </motion.a>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8"
          >
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Experience</dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-primary">
                <Counter to={6} suffix="+ yrs" />
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Surgeries</dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-primary">
                <Counter to={1000} suffix="+" />
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Emergency</dt>
              <dd className="mt-1 flex items-center gap-1 font-display text-2xl font-semibold text-primary">
                24×7 <Star className="h-4 w-4 fill-accent text-accent" />
              </dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <motion.div
            className="relative mx-auto max-w-md lg:max-w-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-secondary/10 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-elegant">
              <img
                src={portrait.url}
                alt="Dr. Aayush Soni, orthopaedic surgeon"
                width={1024}
                height={1280}
                className="aspect-[4/5] h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-accent">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">Ex-AIIMS Bhopal</p>
                <p className="text-xs text-muted-foreground">Assistant Professor, RKMC Bhopal</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
