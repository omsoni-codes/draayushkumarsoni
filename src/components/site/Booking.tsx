import { Calendar, Clock, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export function Booking() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const dateStr = String(fd.get("date") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || name.length > 100) {
      toast.error("Please enter a valid name.");
      return;
    }
    if (!phone || phone.length < 5 || phone.length > 30) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    if (message.length > 2000) {
      toast.error("Message is too long.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("appointments").insert({
      name,
      phone,
      preferred_date: dateStr || null,
      message: message || null,
    });
    setSubmitting(false);

    if (error) {
      toast.error("Could not send request. Please call +91 86024 20313.");
      return;
    }
    form.reset();
    toast.success("Request received. We'll call you back shortly.");
  };

  return (
    <section id="book" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-elegant">
          <div className="grid gap-10 p-8 lg:grid-cols-2 lg:p-14">
            <div>
              <span className="eyebrow !text-accent">Book an appointment</span>
              <h2 className="mt-3 font-display text-3xl font-semibold !text-primary-foreground sm:text-4xl">
                Take the first step toward pain-free movement.
              </h2>
              <p className="mt-4 text-primary-foreground/75">
                Request a consultation — our team will confirm a slot that suits you, usually within
                the same day.
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Open every day · By appointment</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>9:00 AM – 4:00 PM · 24×7 emergency</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <a href="tel:+918602420313" className="hover:underline">
                    +91 86024 20313
                  </a>
                </li>
              </ul>
            </div>

            <form
              onSubmit={onSubmit}
              className="liquid-glass space-y-4 rounded-2xl bg-background/70 p-6 text-foreground sm:p-8"
            >
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Full name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="mt-1.5 w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    className="mt-1.5 w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Preferred date
                  </label>
                  <input
                    name="date"
                    type="date"
                    className="mt-1.5 w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Describe your concern
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                  placeholder="Briefly tell us about the pain or injury"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Request appointment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
