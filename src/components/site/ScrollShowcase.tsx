import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";
import s1 from "@/assets/surgery-1.jpg.asset.json";
import s2 from "@/assets/surgery-2.jpg.asset.json";
import s3 from "@/assets/surgery-3.jpg.asset.json";
import s4 from "@/assets/surgery-4.jpg.asset.json";

const scenes = [
  {
    img: s1.url,
    kicker: "Precision",
    title: "Surgery that respects your body.",
    body: "Minimally invasive techniques, modern implants and evidence-based protocols — refined across thousands of cases.",
  },
  {
    img: s2.url,
    kicker: "Team",
    title: "A theatre built on trust.",
    body: "Every procedure runs on a coordinated team — anaesthesia, nursing and rehab — trained in the smallest details.",
  },
  {
    img: s3.url,
    kicker: "Focus",
    title: "Nothing left to chance.",
    body: "Pre-op planning, intra-op navigation and post-op checks — designed to get you back on your feet, faster.",
  },
  {
    img: s4.url,
    kicker: "Recovery",
    title: "You move again.",
    body: "Personalised recovery plans and physiotherapy support that keep momentum going long after you leave the OT.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Scene({
  index,
  total,
  progress,
  scene,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  scene: (typeof scenes)[number];
}) {
  const step = 1 / total;
  const start = index * step;
  const end = start + step;
  const mid = start + step / 2;

  const opacity = useTransform(
    progress,
    [start, mid - step * 0.15, mid + step * 0.15, end],
    [0, 1, 1, 0],
  );
  const scale = useTransform(progress, [start, end], [1.15, 0.95]);
  const y = useTransform(progress, [start, end], [40, -40]);
  const textY = useTransform(progress, [start, end], [30, -30]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
    >
      <motion.div
        style={{ scale, y }}
        className="col-span-1 h-[55vh] overflow-hidden rounded-3xl border border-primary-foreground/10 lg:col-span-7 lg:h-[72vh]"
      >
        <img
          src={scene.img}
          alt={scene.title}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div style={{ y: textY }} className="col-span-1 lg:col-span-5 lg:pl-4">
        <span className="eyebrow !text-accent">{scene.kicker}</span>
        <h3 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight !text-primary-foreground sm:text-4xl lg:text-5xl">
          {scene.title}
        </h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
          {scene.body}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function ScrollShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  // Progress bar fill across scenes
  const barScale = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative bg-primary text-primary-foreground"
      style={{ height: `${scenes.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 10%, color-mix(in oklab, var(--color-accent) 30%, transparent), transparent 65%), radial-gradient(50% 40% at 10% 90%, color-mix(in oklab, var(--color-accent) 20%, transparent), transparent 70%)",
          }}
        />

        <div className="container-x relative flex items-center justify-between pt-8">
          <span className="eyebrow !text-accent">Inside the practice</span>
          <div className="hidden items-center gap-2 sm:flex">
            {scenes.map((_, i) => (
              <span
                key={i}
                className="h-1 w-8 overflow-hidden rounded-full bg-primary-foreground/15"
              >
                <motion.span
                  className="block h-full bg-accent"
                  style={{
                    scaleX: useTransform(
                      smooth,
                      [i / scenes.length, (i + 1) / scenes.length],
                      [0, 1],
                    ),
                    transformOrigin: "0% 50%",
                  }}
                />
              </span>
            ))}
          </div>
        </div>

        <div className="container-x relative flex-1">
          <div className="relative h-full">
            {scenes.map((scene, i) => (
              <Scene
                key={i}
                index={i}
                total={scenes.length}
                progress={smooth}
                scene={scene}
              />
            ))}
          </div>
        </div>

        <div className="container-x relative pb-6">
          <div className="h-[2px] overflow-hidden rounded-full bg-primary-foreground/10">
            <motion.div
              style={{ scaleX: barScale, transformOrigin: "0% 50%" }}
              className="h-full bg-accent"
            />
          </div>
        </div>
      </div>

      {/* Ensures the section actually looks like it's part of dark canvas */}
      <div className="sr-only">{ease.length}</div>
    </section>
  );
}
