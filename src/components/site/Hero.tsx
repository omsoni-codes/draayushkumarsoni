import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import portrait from "@/assets/dr-aayush.jpg.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="order-2 lg:order-1">
          <span className="eyebrow">Orthopaedic Surgeon · MBBS, MS Ortho</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
            Movement is medicine.
            <span className="block text-accent">Restoring yours.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dr. Aayush Soni is a consultant orthopaedic surgeon at Lakshya
            Multispeciality Hospital, Bhopal — specialising in trauma, joint
            replacement, arthroscopy and spine surgery, with experience across
            AIIMS Bhopal, Bansal Hospital and SAMC Indore.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+918602420313"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-primary hover:bg-surface"
            >
              Call +91 86024 20313
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Experience</dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-primary">6+ yrs</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Surgeries</dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-primary">1,000+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Emergency</dt>
              <dd className="mt-1 flex items-center gap-1 font-display text-2xl font-semibold text-primary">
                24×7 <Star className="h-4 w-4 fill-accent text-accent" />
              </dd>
            </div>
          </dl>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-secondary/10 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-elegant">
              <img
                src={portrait.url}
                alt="Dr. Aayush Soni, orthopaedic surgeon"
                width={1024}
                height={1280}
                className="aspect-[4/5] h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-accent">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">Ex-AIIMS Bhopal</p>
                <p className="text-xs text-muted-foreground">Assistant Professor, RKMC Bhopal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
