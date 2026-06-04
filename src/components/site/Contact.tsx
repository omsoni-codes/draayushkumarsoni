import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
            Walk-ins welcome by appointment. Parking available on site.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">Clinic address</p>
                <p className="text-sm text-muted-foreground">
                  Soni Orthopaedic Clinic<br />
                  123 Health Avenue, City Centre<br />
                  PIN — 000000
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">Phone</p>
                <a href="tel:+910000000000" className="text-sm text-muted-foreground hover:text-accent">
                  +91 00000 00000
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">Email</p>
                <a href="mailto:care@draayushsoni.com" className="text-sm text-muted-foreground hover:text-accent">
                  care@draayushsoni.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">Hours</p>
                <p className="text-sm text-muted-foreground">
                  Mon – Sat: 10:00 AM – 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Clinic location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.8200%2C19.0700%2C72.8800%2C19.1100&layer=mapnik"
            className="h-[460px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
