import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: (stagger: number = 0.04) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.1 },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  stagger?: number;
}

export function SplitText({
  text,
  className,
  as: Tag = "h2",
  stagger = 0.05,
}: SplitTextProps) {
  const MotionTag = motion[Tag] as typeof motion.h2;
  const words = text.split(" ");
  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      custom={stagger}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
