import { motion } from "framer-motion";

const items = [
  "AIIMS Bhopal",
  "Bansal Hospital",
  "Sri Aurobindo Indore",
  "ABVGMC Vidisha",
  "RKMC Bhopal",
  "Lakshya Multispeciality",
  "MS Orthopaedics",
  "1,000+ Surgeries",
  "24×7 Emergency",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section
      aria-label="Credentials"
      className="border-y border-border bg-background py-8 overflow-hidden"
    >
      <motion.div
        className="flex gap-14 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl font-semibold tracking-tight text-muted-foreground/60 sm:text-3xl"
          >
            {t}
            <span className="mx-8 text-accent">·</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
