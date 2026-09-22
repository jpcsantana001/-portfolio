import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://joaopedrosantana.dev", // TODO: atualizar com o domínio final
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
