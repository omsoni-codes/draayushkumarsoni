import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Conditions } from "@/components/site/Conditions";
import { Experience } from "@/components/site/Experience";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Aayush Soni — Orthopaedic Surgeon, Bhopal | Lakshya Hospital" },
      {
        name: "description",
        content:
          "Dr. Aayush Soni (MBBS, MS Ortho) — consultant orthopaedic surgeon at Lakshya Multispeciality Hospital, Kolar Road, Bhopal. Trauma, joint replacement, arthroscopy, spine. Call +91 86024 20313.",
      },
      { property: "og:title", content: "Dr. Aayush Soni — Orthopaedic Surgeon, Bhopal" },
      {
        property: "og:description",
        content:
          "Expert orthopaedic care in Bhopal — trauma, joint replacement, arthroscopy, spine and paediatric orthopaedics. 24×7 emergency.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Aayush Soni",
          medicalSpecialty: "Orthopedic",
          telephone: "+91-8602420313",
          email: "aayushkumarsoni95@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lakshya Multispeciality Hospital, Danish Kunj, Kolar Road",
            addressLocality: "Bhopal",
            postalCode: "462042",
            addressRegion: "MP",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 09:00-16:00",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Conditions />
        <Experience />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
