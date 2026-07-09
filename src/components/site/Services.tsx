import { Bone, Activity, HeartPulse, Spline, Baby, Microscope } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: HeartPulse,
    title: "Trauma & Complex Trauma",
    body: "Emergency and reconstructive care for fractures, polytrauma and post-injury deformities — 24×7 availability.",
  },
  {
    icon: Bone,
    title: "Joint Replacement",
    body: "Total and partial hip & knee arthroplasty using modern implants and minimally invasive techniques.",
  },
  {
    icon: Activity,
    title: "Arthroscopic Surgery",
    body: "Keyhole surgery of the knee and shoulder — ACL reconstruction, meniscus repair, rotator cuff and labral procedures.",
  },
  {
    icon: Spline,
    title: "Spine Surgery & Back Pain",
    body: "Evaluation and surgical management of disc prolapse, sciatica, spinal stenosis and chronic back pain.",
  },
  {
    icon: Microscope,
    title: "Orthopaedic Oncology",
    body: "Diagnosis and surgical management of bone & soft-tissue tumours, including limb-salvage procedures.",
  },
  {
    icon: Baby,
    title: "Paediatric Orthopaedics",
    body: "Care for congenital and developmental conditions, growth-plate fractures and paediatric deformities.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="services" className="relative py-28 lg:py-40">
      <div ref={ref} className="container-x">
        <motion.div style={{ y: titleY }} className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Treatments</span>
          <h2 className="display-lg mt-4 text-balance">
            Everything your bones and joints need.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Comprehensive orthopaedic care — refined by experience, delivered
            with patience.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-accent/40 hover:shadow-elegant"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(80% 60% at 50% 0%, color-mix(in oklab, var(--color-accent) 10%, transparent), transparent 70%)",
                }}
              />
              <motion.span
                whileHover={{ rotate: -6, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent"
              >
                <Icon className="h-5 w-5" />
              </motion.span>
              <h3 className="mt-8 font-display text-xl font-semibold tracking-tight text-primary">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
