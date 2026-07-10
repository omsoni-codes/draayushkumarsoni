import { Instagram, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/dr.bone8055?igsh=MTdocDdrMDh6eTU2ZA==",
    icon: Instagram,
  },
  {
    name: "Justdial",
    href: "https://jsdl.in/RSL-UZQ1783726053",
    icon: ExternalLink,
  },
  {
    name: "Google",
    href: "https://share.google/tT8IBydPU7t5ZyeIt",
    icon: ExternalLink,
  },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s, i) => (
        <motion.a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-primary transition-colors hover:text-accent"
        >
          <s.icon className="h-4 w-4" />
          <span>{s.name}</span>
        </motion.a>
      ))}
    </div>
  );
}
