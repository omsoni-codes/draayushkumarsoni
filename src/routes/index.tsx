import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { ScrollShowcase } from "@/components/site/ScrollShowcase";
import { Services } from "@/components/site/Services";
import { Conditions } from "@/components/site/Conditions";
import { Experience } from "@/components/site/Experience";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { CursorGlow } from "@/components/site/CursorGlow";
import { FAQ } from "@/components/site/FAQ";
import { GoogleReviews } from "@/components/site/GoogleReviews";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileCTABar } from "@/components/site/MobileCTABar";

const faqEntries = [
  { q: "What conditions does Dr. Aayush Soni treat?", a: "Fractures and complex trauma, arthritis of hip and knee, ligament and cartilage injuries, shoulder problems, spine and back pain, bone tumours and paediatric orthopaedics." },
  { q: "Do I need a referral to book an appointment?", a: "No referral is required. Call +91 86024 20313, message on WhatsApp, or use the appointment form." },
  { q: "What are the consulting hours?", a: "9:00 AM to 4:00 PM every day at Lakshya Multispeciality Hospital, Kolar Road, Bhopal. 24×7 emergency care is available." },
  { q: "Is joint replacement surgery safe?", a: "Modern hip and knee replacements are among the most successful operations performed today, with excellent long-term outcomes." },
  { q: "How soon can I walk after knee replacement?", a: "Most patients stand and take assisted steps within 24 hours of surgery and walk independently in the following days with guided physiotherapy." },
  { q: "Do you accept insurance and cashless treatment?", a: "Lakshya Multispeciality Hospital is empanelled with most major insurance providers and TPAs. Call the clinic to confirm coverage." },
];

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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntries.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <ScrollShowcase />
        <Services />
        <Conditions />
        <Experience />
        <Testimonials />
        <GoogleReviews />
        <FAQ />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileCTABar />
      <Toaster position="top-center" richColors />
    </div>
  );
}
