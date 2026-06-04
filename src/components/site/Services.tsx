import { Bone, Activity, Zap, HeartPulse, Syringe, Footprints } from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Joint Replacement",
    body: "Total and partial knee, hip and shoulder replacements using modern implants and minimally invasive techniques.",
  },
  {
    icon: Activity,
    title: "Arthroscopy",
    body: "Keyhole surgery for knee, shoulder and ankle — ACL reconstruction, meniscus repair and rotator cuff procedures.",
  },
  {
    icon: Zap,
    title: "Sports Injuries",
    body: "Evidence-based care for ligament tears, cartilage damage and overuse injuries with return-to-play protocols.",
  },
  {
    icon: HeartPulse,
    title: "Trauma & Fractures",
    body: "Fracture fixation, complex trauma and post-injury reconstruction for adults and the elderly.",
  },
  {
    icon: Syringe,
    title: "Regenerative Therapy",
    body: "PRP, viscosupplementation and image-guided injections for early arthritis and tendon problems.",
  },
  {
    icon: Footprints,
    title: "Spine & Posture",
    body: "Non-surgical management of back pain, sciatica and posture-related musculoskeletal conditions.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Treatments offered</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Comprehensive orthopaedic care, under one roof.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
