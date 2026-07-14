import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bone, Stethoscope, Syringe, Activity, Scissors, HeartPulse } from "lucide-react";

const instruments = [
  { Icon: Bone, angle: 0 },
  { Icon: Stethoscope, angle: 60 },
  { Icon: Syringe, angle: 120 },
  { Icon: Scissors, angle: 180 },
  { Icon: Activity, angle: 240 },
  { Icon: HeartPulse, angle: 300 },
];

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Prevent scroll during loader
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      document.body.style.overflow = original;
      setShow(false);
    }, 2600);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.15, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
        >
          {/* Ambient background glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 70%)",
            }}
          />

          {/* Bubble */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="relative h-64 w-64 sm:h-80 sm:w-80"
          >
            {/* Glass sphere */}
            <div
              className="absolute inset-0 rounded-full border border-white/40"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, color-mix(in oklab, white 55%, transparent), color-mix(in oklab, var(--color-accent) 18%, transparent) 55%, color-mix(in oklab, var(--color-primary) 22%, transparent) 100%)",
                boxShadow:
                  "inset 0 4px 30px color-mix(in oklab, white 55%, transparent), inset 0 -20px 60px color-mix(in oklab, var(--color-accent) 30%, transparent), 0 30px 90px -20px color-mix(in oklab, var(--color-accent) 40%, transparent)",
              }}
            />

            {/* Specular highlight */}
            <div
              aria-hidden
              className="absolute left-6 top-6 h-16 w-16 rounded-full opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), transparent 60%)",
                filter: "blur(6px)",
              }}
            />

            {/* Orbiting instruments */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {instruments.map(({ Icon, angle }, i) => {
                const rad = (angle * Math.PI) / 180;
                const radius = 92;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-1/2"
                    style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/40 text-primary shadow-lg backdrop-blur"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Center monogram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 bg-white/60 backdrop-blur-md sm:h-24 sm:w-24"
              >
                <span className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  A
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Doctor name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.6, times: [0, 0.25, 0.7, 0.85] }}
            className="absolute bottom-[22%] flex flex-col items-center gap-2"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Orthopaedic Care
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-primary sm:text-xl">
              Dr. Aayush Soni
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
