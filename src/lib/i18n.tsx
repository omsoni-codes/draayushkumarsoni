import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

const dict = {
  // Nav
  "nav.about": { en: "About", hi: "परिचय" },
  "nav.services": { en: "Services", hi: "सेवाएँ" },
  "nav.conditions": { en: "Conditions", hi: "रोग" },
  "nav.experience": { en: "Experience", hi: "अनुभव" },
  "nav.patients": { en: "Patients", hi: "मरीज़" },
  "nav.contact": { en: "Contact", hi: "संपर्क" },
  "nav.book": { en: "Book", hi: "बुक करें" },
  "nav.bookAppointment": { en: "Book Appointment", hi: "अपॉइंटमेंट बुक करें" },

  // Hero
  "hero.eyebrow": { en: "Orthopaedic Surgeon · Bhopal", hi: "अस्थि रोग विशेषज्ञ · भोपाल" },
  "hero.title.1": { en: "Movement is medicine.", hi: "गति ही औषधि है।" },
  "hero.title.2": { en: "Restoring yours.", hi: "आपकी वापस लौटा रहे हैं।" },
  "hero.sub": {
    en: "Consultant orthopaedic surgeon at Lakshya Multispeciality Hospital — trauma, joint replacement, arthroscopy and spine.",
    hi: "लक्ष्य मल्टीस्पेशलिटी हॉस्पिटल में परामर्शदाता अस्थि शल्य चिकित्सक — ट्रॉमा, जोड़ प्रत्यारोपण, आर्थ्रोस्कोपी और रीढ़।",
  },
  "hero.cta.book": { en: "Book a consultation", hi: "परामर्श बुक करें" },
  "hero.cta.learn": { en: "Learn more", hi: "और जानें" },
  "hero.connect": { en: "Connect online", hi: "ऑनलाइन जुड़ें" },
  "hero.stats.exp": { en: "Experience", hi: "अनुभव" },
  "hero.stats.surg": { en: "Surgeries", hi: "सर्जरी" },
  "hero.stats.emer": { en: "Emergency", hi: "आपातकाल" },
  "hero.stats.yrs": { en: "+ yrs", hi: "+ वर्ष" },

  // FAQ
  "faq.eyebrow": { en: "FAQ", hi: "प्रश्नोत्तर" },
  "faq.title": { en: "Answers before you ask.", hi: "पूछें उससे पहले उत्तर।" },
  "faq.sub": {
    en: "The most common questions from patients. Still unsure? Message on WhatsApp — we usually reply within the hour.",
    hi: "मरीज़ों के सबसे आम प्रश्न। और कोई सवाल? WhatsApp पर संदेश भेजें — हम आमतौर पर एक घंटे में उत्तर देते हैं।",
  },
  "faq.q1": { en: "What conditions does Dr. Aayush Soni treat?", hi: "डॉ. आयुष सोनी किन बीमारियों का इलाज करते हैं?" },
  "faq.a1": {
    en: "Fractures and complex trauma, arthritis of hip and knee, ligament and cartilage injuries, shoulder problems, spine and back pain, bone tumours, and paediatric orthopaedic issues.",
    hi: "फ्रैक्चर और जटिल ट्रॉमा, कूल्हे और घुटने का गठिया, लिगामेंट और कार्टिलेज चोटें, कंधे की समस्याएँ, रीढ़ और कमर दर्द, हड्डी के ट्यूमर, और बाल अस्थि रोग।",
  },
  "faq.q2": { en: "Do I need a referral to book an appointment?", hi: "क्या अपॉइंटमेंट के लिए रेफरल चाहिए?" },
  "faq.a2": {
    en: "No referral is required. Call +91 86024 20313, message on WhatsApp, or use the appointment form on this page.",
    hi: "किसी रेफरल की आवश्यकता नहीं है। +91 86024 20313 पर कॉल करें, WhatsApp पर संदेश भेजें, या इस पृष्ठ पर फ़ॉर्म भरें।",
  },
  "faq.q3": { en: "What are the consulting hours?", hi: "परामर्श का समय क्या है?" },
  "faq.a3": {
    en: "9:00 AM to 4:00 PM every day at Lakshya Multispeciality Hospital, Kolar Road, Bhopal. 24×7 emergency care is available.",
    hi: "हर दिन सुबह 9:00 से शाम 4:00 बजे तक, लक्ष्य मल्टीस्पेशलिटी हॉस्पिटल, कोलार रोड, भोपाल। 24×7 आपातकालीन सेवा उपलब्ध है।",
  },
  "faq.q4": { en: "Is joint replacement surgery safe?", hi: "क्या जोड़ प्रत्यारोपण सर्जरी सुरक्षित है?" },
  "faq.a4": {
    en: "Modern hip and knee replacements are among the most successful operations performed today, with excellent long-term outcomes.",
    hi: "आधुनिक कूल्हे और घुटने के प्रत्यारोपण आज की सबसे सफल सर्जरी में से एक हैं, जिनके दीर्घकालिक परिणाम उत्कृष्ट हैं।",
  },
  "faq.q5": { en: "How soon can I walk after knee replacement?", hi: "घुटने के प्रत्यारोपण के बाद कब चल सकते हैं?" },
  "faq.a5": {
    en: "Most patients stand and take assisted steps within 24 hours of surgery and walk independently in the following days.",
    hi: "अधिकांश मरीज़ सर्जरी के 24 घंटे के भीतर सहारे से खड़े होकर कदम रखते हैं और कुछ दिनों में स्वतंत्र रूप से चलने लगते हैं।",
  },
  "faq.q6": { en: "Do you accept insurance and cashless treatment?", hi: "क्या बीमा और कैशलेस इलाज उपलब्ध है?" },
  "faq.a6": {
    en: "Lakshya Multispeciality Hospital is empanelled with most major insurance providers and TPAs. Call the clinic to confirm coverage.",
    hi: "लक्ष्य मल्टीस्पेशलिटी हॉस्पिटल अधिकांश बीमा कंपनियों और TPA से मान्यता प्राप्त है। कवरेज की पुष्टि के लिए क्लिनिक पर कॉल करें।",
  },

  // Footer
  "footer.role": { en: "Orthopaedic Surgeon · Bhopal", hi: "अस्थि शल्य चिकित्सक · भोपाल" },
  "footer.rights": { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।" },
  "footer.tag": { en: "Designed for clarity, care and recovery.", hi: "स्पष्टता, देखभाल और पुनर्प्राप्ति के लिए बनाया गया।" },
} as const;

type Key = keyof typeof dict;

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => dict[k]?.en ?? String(k),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "hi" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  const t = (k: Key) => dict[k]?.[lang] ?? dict[k]?.en ?? String(k);

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}
