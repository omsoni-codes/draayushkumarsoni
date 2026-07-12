import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What conditions does Dr. Aayush Soni treat?",
    a: "Dr. Soni treats the full spectrum of orthopaedic conditions — fractures and complex trauma, arthritis of hip and knee, ligament and cartilage injuries, shoulder problems, spine and back pain, bone tumours, and paediatric orthopaedic issues.",
  },
  {
    q: "Do I need a referral to book an appointment?",
    a: "No referral is required. You can book directly by calling +91 86024 20313, messaging on WhatsApp, or filling out the appointment form on this page.",
  },
  {
    q: "What are the consulting hours?",
    a: "Consultations run every day from 9:00 AM to 4:00 PM at Lakshya Multispeciality Hospital, Kolar Road, Bhopal. 24×7 emergency care is available.",
  },
  {
    q: "Is joint replacement surgery safe?",
    a: "Modern hip and knee replacements are among the most successful operations performed today, with excellent long-term outcomes. Dr. Soni uses evidence-based protocols, modern implants and structured rehabilitation to help you return to activity safely.",
  },
  {
    q: "How soon can I walk after knee replacement?",
    a: "Most patients stand and take assisted steps within 24 hours of surgery and walk independently in the following days with the guided physiotherapy plan.",
  },
  {
    q: "Do you accept insurance and cashless treatment?",
    a: "Lakshya Multispeciality Hospital is empanelled with most major insurance providers and TPAs. Please call the clinic to confirm coverage before your visit.",
  },
];

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={i} className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-base font-semibold text-primary sm:text-lg">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/10 text-accent"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-surface py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Answers before you ask.
          </h2>
          <p className="mt-4 text-muted-foreground">
            The most common questions from patients. Still unsure? Message on
            WhatsApp — we usually reply within the hour.
          </p>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
