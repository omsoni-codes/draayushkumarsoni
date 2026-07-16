import { SocialLinks } from "./SocialLinks";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-14">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div className="space-y-2">
            <p className="font-display text-sm font-semibold tracking-tight text-primary">
              Dr. Aayush Soni
            </p>
            <p className="text-[13px] text-muted-foreground">{t("footer.role")}</p>
          </div>

          <SocialLinks />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-[13px] text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Dr. Aayush Soni. {t("footer.rights")}
          </p>
          <p className="tracking-tight">{t("footer.tag")}</p>
        </div>
      </div>
    </footer>
  );
}
