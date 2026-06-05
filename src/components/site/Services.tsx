import { Bone, Activity, HeartPulse, Spline, Baby, Microscope, Zap } from "lucide-react";

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
