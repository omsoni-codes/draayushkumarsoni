const conditions = [
  "Knee Arthritis",
  "Hip Arthritis",
  "ACL Tear",
  "Meniscus Injury",
  "Rotator Cuff Tear",
  "Frozen Shoulder",
  "Tennis & Golfer's Elbow",
  "Carpal Tunnel",
  "Slipped Disc",
  "Sciatica",
  "Heel Pain & Plantar Fasciitis",
  "Sports Fractures",
  "Osteoporosis",
  "Bursitis",
  "Ligament Sprains",
  "Cartilage Damage",
];

export function Conditions() {
  return (
    <section id="conditions" className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow !text-accent-foreground/80">Conditions treated</span>
          <h2 className="mt-3 font-display text-3xl font-semibold !text-primary-foreground sm:text-4xl">
            From everyday aches to complex injuries.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
            If your pain limits how you move, work or sleep — it's worth a
            proper evaluation. Dr. Soni regularly treats:
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2.5">
          {conditions.map((c) => (
            <li
              key={c}
              className="rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-sm font-medium text-primary-foreground/90 transition-colors hover:border-accent hover:bg-accent/20"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
