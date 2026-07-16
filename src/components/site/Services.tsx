import { Bone, Activity, HeartPulse, Spline, Baby, Microscope, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: HeartPulse,
    slug: "trauma",
    title: "Trauma & Complex Trauma",
    body: "Emergency and reconstructive care for fractures, polytrauma and post-injury deformities — 24×7 availability.",
  },
  {
    icon: Bone,
    slug: "joint-replacement",
    title: "Joint Replacement",
    body: "Total and partial hip & knee arthroplasty using modern implants and minimally invasive techniques.",
  },
  {
    icon: Activity,
    slug: "arthroscopy",
    title: "Arthroscopic Surgery",
    body: "Keyhole surgery of the knee and shoulder — ACL reconstruction, meniscus repair, rotator cuff and labral procedures.",
  },
  {
    icon: Spline,
    slug: "spine",
    title: "Spine Surgery & Back Pain",
    body: "Evaluation and surgical management of disc prolapse, sciatica, spinal stenosis and chronic back pain.",
  },
  {
    icon: Microscope,
    slug: "oncology",
    title: "Orthopaedic Oncology",
    body: "Diagnosis and surgical management of bone & soft-tissue tumours, including limb-salvage procedures.",
  },
  {
    icon: Baby,
    slug: "paediatric",
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
          <h2 className="display-lg mt-4 text-balance">Everything your bones and joints need.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Comprehensive orthopaedic care — refined by experience, delivered with patience.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body, slug }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease }}
              whileHover={{ y: -8 }}
            >
              <Link
                to="/services/$slug"
                params={{ slug }}
                className="liquid-glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:shadow-elegant"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(80% 60% at 50% 0%, color-mix(in oklab, var(--color-accent) 10%, transparent), transparent 70%)",
                  }}
                />
                <div className="flex items-start justify-between">
                  <motion.span
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100" />
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-tight text-primary">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Learn more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
