import { createContext, useContext, type ReactNode } from "react";

const dict = {
  // Nav
  "nav.about": "About",
  "nav.services": "Services",
  "nav.conditions": "Conditions",
  "nav.experience": "Experience",
  "nav.patients": "Patients",
  "nav.contact": "Contact",
  "nav.book": "Book",
  "nav.bookAppointment": "Book Appointment",

  // Hero
  "hero.eyebrow": "Orthopaedic Surgeon · Bhopal",
  "hero.title.1": "Movement is medicine.",
  "hero.title.2": "Restoring yours.",
  "hero.sub":
    "Consultant orthopaedic surgeon at Lakshya Multispeciality Hospital — trauma, joint replacement, arthroscopy and spine.",
  "hero.cta.book": "Book a consultation",
  "hero.cta.learn": "Learn more",
  "hero.connect": "Connect online",
  "hero.stats.exp": "Experience",
  "hero.stats.surg": "Surgeries",
  "hero.stats.emer": "Emergency",
  "hero.stats.yrs": "+ yrs",

  // FAQ
  "faq.eyebrow": "FAQ",
  "faq.title": "Answers before you ask.",
  "faq.sub":
    "The most common questions from patients. Still unsure? Message on WhatsApp — we usually reply within the hour.",
  "faq.q1": "What conditions does Dr. Aayush Soni treat?",
  "faq.a1":
    "Fractures and complex trauma, arthritis of hip and knee, ligament and cartilage injuries, shoulder problems, spine and back pain, bone tumours, and paediatric orthopaedic issues.",
  "faq.q2": "Do I need a referral to book an appointment?",
  "faq.a2":
    "No referral is required. Call +91 86024 20313, message on WhatsApp, or use the appointment form on this page.",
  "faq.q3": "What are the consulting hours?",
  "faq.a3":
    "9:00 AM to 4:00 PM every day at Lakshya Multispeciality Hospital, Kolar Road, Bhopal. 24×7 emergency care is available.",
  "faq.q4": "Is joint replacement surgery safe?",
  "faq.a4":
    "Modern hip and knee replacements are among the most successful operations performed today, with excellent long-term outcomes.",
  "faq.q5": "How soon can I walk after knee replacement?",
  "faq.a5":
    "Most patients stand and take assisted steps within 24 hours of surgery and walk independently in the following days.",
  "faq.q6": "Do you accept insurance and cashless treatment?",
  "faq.a6":
    "Lakshya Multispeciality Hospital is empanelled with most major insurance providers and TPAs. Call the clinic to confirm coverage.",

  // Footer
  "footer.role": "Orthopaedic Surgeon · Bhopal",
  "footer.rights": "All rights reserved.",
  "footer.tag": "Designed for clarity, care and recovery.",
} as const;

type Key = keyof typeof dict;

const LangCtx = createContext<{ t: (k: Key) => string }>({
  t: (k) => dict[k] ?? String(k),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = (k: Key) => dict[k] ?? String(k);
  return <LangCtx.Provider value={{ t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}
