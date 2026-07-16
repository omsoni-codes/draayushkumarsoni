import { motion } from "framer-motion";

const conditions = [
  "Complex Fractures",
  "Polytrauma",
  "Knee Arthritis",
  "Hip Arthritis",
  "ACL & Meniscus Tear",
  "Rotator Cuff Tear",
  "Shoulder Dislocation",
  "Slipped Disc",
  "Sciatica & Back Pain",
  "Spinal Stenosis",
  "Bone Tumours",
  "Paediatric Fractures",
  "Congenital Deformities",
  "Osteoporosis",
  "Sports Injuries",
  "Ligament Reconstruction",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Conditions() {
  return (
    <section
      id="conditions"
      className="relative overflow-hidden bg-primary py-28 text-primary-foreground lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(50% 40% at 20% 20%, color-mix(in oklab, var(--color-accent) 40%, transparent), transparent 60%), radial-gradient(40% 30% at 90% 100%, color-mix(in oklab, var(--color-accent) 30%, transparent), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow !text-accent">Conditions treated</span>
          <h2 className="display-lg mt-4 text-balance !text-primary-foreground">
            From everyday aches to complex injuries.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
            If your pain limits how you move, work or sleep — it's worth a proper evaluation.
          </p>
        </motion.div>

        <ul className="mt-16 flex flex-wrap justify-center gap-2.5">
          {conditions.map((c, i) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.03, ease }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="cursor-default rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-2.5 text-sm font-medium text-primary-foreground/90 backdrop-blur-sm transition-colors hover:border-accent hover:bg-accent/25"
            >
              {c}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
