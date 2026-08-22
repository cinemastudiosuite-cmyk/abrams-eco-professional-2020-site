import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/content";

const routes = ["", "/o-nama", "/usluge", "/zasto-mi", "/kontakt", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
