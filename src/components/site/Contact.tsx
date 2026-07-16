import { MapPin, Phone, Mail, Clock, Link2 } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  return (
    <section id="contact" className="bg-surface py-20 lg:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="eyebrow">Visit the clinic</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Find us & get in touch.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Walk-ins welcome by appointment. 24×7 emergency care available.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">Clinic address</p>
                <p className="text-sm text-muted-foreground">
                  Lakshya Multispeciality Hospital
                  <br />
                  Danish Kunj, Kolar Road
                  <br />
                  Bhopal — 462042, Madhya Pradesh
                </p>
                <a
                  href="https://maps.app.goo.gl/UZjmUjTC1wG4FSeN7?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs font-semibold text-accent hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">Phone</p>
                <a
                  href="tel:+918602420313"
                  className="text-sm text-muted-foreground hover:text-accent"
                >
                  +91 86024 20313
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">Email</p>
                <a
                  href="mailto:aayushkumarsoni95@gmail.com"
                  className="text-sm text-muted-foreground hover:text-accent"
                >
                  aayushkumarsoni95@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">Consulting hours</p>
                <p className="text-sm text-muted-foreground">
                  Every day · 9:00 AM – 4:00 PM
                  <br />
                  24×7 emergency visits available
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Link2 className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">Connect online</p>
                <SocialLinks className="mt-2 flex-wrap" />
              </div>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Lakshya Multispeciality Hospital, Bhopal"
            src="https://www.google.com/maps?q=Lakshya+Multispeciality+Hospital+Danish+Kunj+Kolar+Road+Bhopal&output=embed"
            className="h-[460px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
