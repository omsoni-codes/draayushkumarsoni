import { GraduationCap, Award, Stethoscope, Users } from "lucide-react";
import { motion } from "framer-motion";

const credentials = [
  { icon: GraduationCap, label: "MBBS, MS Orthopaedics" },
  { icon: Award, label: "Assistant Professor, RKMC Bhopal" },
  { icon: Stethoscope, label: "Ex-Resident, AIIMS Bhopal" },
  { icon: Users, label: "1,000+ surgeries performed" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="relative bg-surface py-28 lg:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="lg:col-span-5 lg:sticky lg:top-24"
        >
          <span className="eyebrow">About</span>
          <h2 className="display-lg mt-4 text-balance">
            Care that respects your time, body and goals.
          </h2>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
            className="text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Dr. Aayush Soni (MBBS, MS Orthopaedics) is a consultant orthopaedic
            surgeon based in Bhopal with over 6 years of clinical and surgical
            experience. He currently practices at Lakshya Multispeciality
            Hospital, Kolar Road and serves as Assistant Professor at RKMC
            Bhopal.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            His training spans premier institutions including AIIMS Bhopal,
            Sri Aurobindo Medical College Indore, ABVGMC Vidisha and Bansal
            Hospital.
          </motion.p>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {credentials.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                whileHover={{ y: -3 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="pt-2 text-sm font-medium text-primary">{label}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
