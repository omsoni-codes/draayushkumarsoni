import { Phone, MessageCircle, Calendar } from "lucide-react";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 px-3 py-2 backdrop-blur-xl sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+918602420313"
          className="flex items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2.5 text-xs font-semibold text-primary-foreground"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href="https://wa.me/918602420313"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2.5 text-xs font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a
          href="#book"
          className="flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-3 py-2.5 text-xs font-semibold text-primary"
        >
          <Calendar className="h-4 w-4" /> Book
        </a>
      </div>
    </div>
  );
}
