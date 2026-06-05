import surgery from "@/assets/surgery-1.jpg.asset.json";

const timeline = [
  { year: "Present", title: "Assistant Professor, Orthopaedics", place: "RKMC, Bhopal" },
  { year: "Present", title: "Consultant Orthopaedic Surgeon", place: "Lakshya Multispeciality Hospital, Bhopal" },
  { year: "Previously", title: "Senior Resident", place: "ABVGMC, Vidisha" },
  { year: "Previously", title: "Consultant", place: "Bansal Hospital, Bhopal" },
  { year: "Previously", title: "Resident, Orthopaedics", place: "Sri Aurobindo Medical College, Indore" },
  { year: "Previously", title: "Resident, Orthopaedics", place: "AIIMS, Bhopal" },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <img
            src={surgery.url}
            alt="Dr. Aayush Soni performing surgery"
            loading="lazy"
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="eyebrow">Experience & training</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Trained across India's leading institutions.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From AIIMS Bhopal to Sri Aurobindo Indore — six years of focused
            orthopaedic practice, with academic and surgical roles across
            tertiary care hospitals in Madhya Pradesh.
          </p>

          <ol className="mt-8 space-y-5 border-l-2 border-border pl-6">
            {timeline.map((t, i) => (
              <li key={i} className="relative">
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
