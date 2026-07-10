import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-14">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div className="space-y-2">
            <p className="font-display text-sm font-semibold tracking-tight text-primary">
              Dr. Aayush Soni
            </p>
            <p className="text-[13px] text-muted-foreground">
              Orthopaedic Surgeon · Bhopal
            </p>
          </div>

          <SocialLinks />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-[13px] text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Dr. Aayush Soni. All rights reserved.</p>
          <p className="tracking-tight">Designed for clarity, care and recovery.</p>
        </div>
      </div>
    </footer>
  );
}
