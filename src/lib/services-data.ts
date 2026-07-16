export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  procedures: string[];
  recovery: string;
  faqs: { q: string; a: string }[];
};

export const services: ServiceDetail[] = [
  {
    slug: "trauma",
    title: "Trauma & Complex Trauma",
    tagline: "24×7 emergency orthopaedic care in Bhopal.",
    intro:
      "From simple fractures to high-energy polytrauma and post-injury deformities, Dr. Aayush Soni offers round-the-clock trauma care at Lakshya Multispeciality Hospital — using modern fixation techniques and evidence-based protocols to restore alignment and function.",
    procedures: [
      "Closed & open reduction of fractures",
      "Intramedullary nailing (femur, tibia, humerus)",
      "Plate & screw fixation",
      "External fixation for open fractures",
      "Malunion & non-union correction",
      "Pelvic & acetabular reconstruction",
    ],
    recovery:
      "Most simple fractures allow partial weight-bearing within days. Complex reconstructions follow a staged rehab plan tailored to your injury and goals.",
    faqs: [
      {
        q: "Do you handle emergencies at night?",
        a: "Yes — 24×7 emergency orthopaedic care is available. Call +91 86024 20313.",
      },
      {
        q: "How soon should I come after a fall or accident?",
        a: "The sooner the better. Early fixation reduces swelling, pain and long-term stiffness.",
      },
    ],
  },
  {
    slug: "joint-replacement",
    title: "Hip & Knee Replacement",
    tagline: "Modern implants, faster recovery, lasting relief.",
    intro:
      "Total and partial hip and knee replacement using contemporary implants and minimally invasive techniques. Dr. Soni focuses on precise alignment, soft-tissue balance and rapid rehabilitation to help you walk pain-free again.",
    procedures: [
      "Total Knee Replacement (TKR)",
      "Partial (Unicondylar) Knee Replacement",
      "Total Hip Replacement (THR)",
      "Bipolar Hemiarthroplasty",
      "Revision Joint Replacement",
    ],
    recovery:
      "Most patients stand within 24 hours, walk with support in 2–3 days, and return to daily activity within 4–6 weeks with structured physiotherapy.",
    faqs: [
      {
        q: "How long does a modern knee last?",
        a: "Contemporary implants routinely last 15–20 years with normal activity.",
      },
      {
        q: "Will I need both knees done together?",
        a: "It depends on your symptoms, weight and general health — Dr. Soni will discuss single vs. bilateral replacement in your consultation.",
      },
    ],
  },
  {
    slug: "arthroscopy",
    title: "Arthroscopic (Keyhole) Surgery",
    tagline: "Sports-injury recovery with tiny incisions.",
    intro:
      "Arthroscopy uses a pencil-sized camera and instruments to treat joint problems through 4–5 mm keyholes — meaning less pain, faster healing and a quicker return to sport.",
    procedures: [
      "ACL & PCL Reconstruction",
      "Meniscus Repair / Trimming",
      "Rotator Cuff Repair",
      "Shoulder Labral (Bankart / SLAP) Repair",
      "Recurrent Shoulder Dislocation Surgery",
      "Cartilage Restoration Procedures",
    ],
    recovery:
      "Discharge is usually same-day or next-day. Return to running typically 3–4 months post-ACL, and to contact sport 6–9 months with rehabilitation.",
    faqs: [
      {
        q: "Is ACL surgery necessary?",
        a: "For active people or those with instability, reconstruction protects the knee from further meniscus & cartilage damage.",
      },
    ],
  },
  {
    slug: "spine",
    title: "Spine Surgery & Back Pain",
    tagline: "Get back to a life without back pain.",
    intro:
      "From non-surgical treatment of chronic back pain to advanced spine surgery for disc prolapse and stenosis — a stepwise, conservative-first approach tailored to your imaging and lifestyle.",
    procedures: [
      "Microdiscectomy for slipped disc",
      "Decompression for spinal stenosis",
      "Spinal fusion & instrumentation",
      "Vertebroplasty for osteoporotic fractures",
      "Pain management & epidural injections",
    ],
    recovery:
      "Most microsurgical procedures allow you to walk the same day and go home within 1–2 days. Structured core-strengthening follows.",
    faqs: [
      {
        q: "Do all slipped discs need surgery?",
        a: "No — most improve with medication, physiotherapy and posture correction. Surgery is reserved for persistent pain or neurological weakness.",
      },
    ],
  },
  {
    slug: "oncology",
    title: "Orthopaedic Oncology",
    tagline: "Expert care for bone & soft-tissue tumours.",
    intro:
      "Diagnosis and surgical management of benign and malignant bone tumours, with a focus on limb-salvage — preserving function without compromising cancer clearance.",
    procedures: [
      "Biopsy & staging of bone lesions",
      "Curettage & bone grafting for benign tumours",
      "Wide excision for malignant tumours",
      "Limb-salvage reconstruction with megaprostheses",
    ],
    recovery:
      "Recovery is highly individual. Dr. Soni coordinates with medical oncology and physiotherapy for a comprehensive plan.",
    faqs: [
      {
        q: "How is a bone tumour diagnosed?",
        a: "Through clinical exam, X-ray, MRI and — when needed — a biopsy performed in a planned oncology setting.",
      },
    ],
  },
  {
    slug: "paediatric",
    title: "Paediatric Orthopaedics",
    tagline: "Gentle, growth-aware care for children.",
    intro:
      "Care for congenital deformities, growth-plate injuries and paediatric musculoskeletal problems — with a parent-friendly approach and non-surgical treatment wherever possible.",
    procedures: [
      "Clubfoot (Ponseti method)",
      "DDH (Developmental Dysplasia of Hip)",
      "Growth-plate fracture management",
      "Correction of angular deformities",
      "Paediatric limb-length equalisation",
    ],
    recovery:
      "Children heal fast — most treatments allow return to school within days to weeks depending on the procedure.",
    faqs: [
      {
        q: "At what age should clubfoot be treated?",
        a: "Ideally within the first few weeks of life for best results with the Ponseti technique.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
