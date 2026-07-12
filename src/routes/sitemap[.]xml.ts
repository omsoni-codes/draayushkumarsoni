import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/lib/services-data";

const BASE_URL = "https://draayushkumarsoni.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = [
          `  <url><loc>${BASE_URL}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
          ...services.map(
            (s) =>
              `  <url><loc>${BASE_URL}/services/${s.slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`,
          ),
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
