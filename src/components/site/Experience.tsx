import clinic from "@/assets/clinic-interior.jpg";

const timeline = [
  { year: "2024 — Present", title: "Consultant Orthopaedic Surgeon", place: "Private Practice & Affiliated Hospitals" },
  { year: "2020 — 2024", title: "Senior Consultant, Joint Replacement", place: "Tertiary Care Hospital" },
  { year: "2018 — 2020", title: "Arthroscopy & Sports Medicine Fellowship", place: "International Training" },
  { year: "2015 — 2018", title: "MS Orthopaedics", place: "Premier Medical College" },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <img
            src={clinic}
            alt="Dr. Aayush Soni's orthopaedic clinic"
            width={1600}
            height={1024}
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="eyebrow">Experience & training</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            A decade of focused orthopaedic practice.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Continual learning across India and abroad — bringing the latest
            techniques home to patients.
          </p>

          <ol className="mt-8 space-y-5 border-l-2 border-border pl-6">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {t.year}
                </p>
                <p className="mt-1 font-display text-base font-semibold text-primary">
                  {t.title}
                </p>
                <p className="text-sm text-muted-foreground">{t.place}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
