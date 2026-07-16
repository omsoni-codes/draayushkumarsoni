import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { getService, services, type ServiceDetail } from "@/lib/services-data";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileCTABar } from "@/components/site/MobileCTABar";

const BASE = "https://draayushkumarsoni.lovable.app";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — Dr. Aayush Soni" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const url = `${BASE}/services/${params.slug}`;
    return {
      meta: [
        { title: `${service.title} in Bhopal — Dr. Aayush Soni` },
        { name: "description", content: service.tagline + " " + service.intro.slice(0, 120) },
        { property: "og:title", content: `${service.title} — Dr. Aayush Soni, Bhopal` },
        { property: "og:description", content: service.tagline },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: service.title,
            description: service.intro,
            performer: {
              "@type": "Physician",
              name: "Dr. Aayush Soni",
              medicalSpecialty: "Orthopedic",
            },
          }),
        },
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: NotFoundPage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug);
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <Nav />
      <main className="pt-32">
        <section className="container-x">
          <Link
            to="/"
            hash="services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All treatments
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-3xl"
          >
            <span className="eyebrow">Treatment</span>
            <h1 className="display-lg mt-4 text-balance">{service.title}</h1>
            <p className="mt-4 text-lg text-accent">{service.tagline}</p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{service.intro}</p>
          </motion.div>
        </section>

        <section className="container-x mt-20 grid gap-12 lg:grid-cols-2">
          <div className="liquid-glass rounded-3xl p-8">
            <h2 className="font-display text-2xl font-semibold text-primary">Procedures offered</h2>
            <ul className="mt-6 space-y-3">
              {service.procedures.map((p: string) => (
                <li key={p} className="flex items-start gap-3 text-[15px]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="liquid-glass rounded-3xl p-8">
            <h2 className="font-display text-2xl font-semibold text-primary">Recovery</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{service.recovery}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+918602420313"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Call the clinic
              </a>
              <Link
                to="/"
                hash="booking"
                className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary"
              >
                Book an appointment
              </Link>
            </div>
          </div>
        </section>

        {service.faqs.length > 0 && (
          <section className="container-x mt-20">
            <h2 className="font-display text-2xl font-semibold text-primary">Common questions</h2>
            <div className="mt-6 divide-y divide-border">
              {service.faqs.map((f: ServiceDetail["faqs"][number]) => (
                <div key={f.q} className="py-5">
                  <p className="font-display font-semibold text-primary">{f.q}</p>
                  <p className="mt-2 text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="container-x mt-24 mb-24">
          <h2 className="font-display text-2xl font-semibold text-primary">
            Explore other treatments
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="liquid-glass group rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <p className="font-display text-lg font-semibold text-primary group-hover:text-accent">
                  {o.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{o.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileCTABar />
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <h1 className="font-display text-3xl font-semibold">Treatment not found</h1>
        <Link to="/" className="mt-4 inline-block text-accent underline">
          Return home
        </Link>
      </div>
    </div>
  );
}
