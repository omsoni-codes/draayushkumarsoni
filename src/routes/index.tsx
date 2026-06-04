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
      { title: "Dr. Aayush Soni — Orthopaedic & Joint Replacement Surgeon" },
      {
        name: "description",
        content:
          "Dr. Aayush Soni is a consultant orthopaedic surgeon specialising in joint replacement, arthroscopy and sports injuries. Book a consultation today.",
      },
      { property: "og:title", content: "Dr. Aayush Soni — Orthopaedic Surgeon" },
      {
        property: "og:description",
        content:
          "Expert orthopaedic care for joint pain, sports injuries and fractures. Modern minimally invasive techniques.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
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
          url: "/",
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
