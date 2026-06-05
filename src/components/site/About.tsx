import { GraduationCap, Award, Stethoscope, Users } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "MBBS, MS Orthopaedics" },
  { icon: Award, label: "Assistant Professor, RKMC Bhopal" },
  { icon: Stethoscope, label: "Ex-Resident, AIIMS Bhopal" },
  { icon: Users, label: "1,000+ surgeries performed" },
];

export function About() {
  return (
    <section id="about" className="bg-surface py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">About the doctor</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Care that respects your time, body and goals.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dr. Aayush Soni (MBBS, MS Orthopaedics) is a consultant orthopaedic
            surgeon based in Bhopal with over 6 years of clinical and surgical
            experience. He currently practices at Lakshya Multispeciality
            Hospital, Kolar Road and serves as Assistant Professor at RKMC
            Bhopal.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            His training spans premier institutions including AIIMS Bhopal,
            Sri Aurobindo Medical College Indore, ABVGMC Vidisha and Bansal
            Hospital — covering trauma, joint replacement, arthroscopy, spine,
            paediatric and orthopaedic oncology care.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {credentials.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-primary">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
