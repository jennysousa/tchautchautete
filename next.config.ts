import type { NextConfig } from "next";

// Se a página for publicada em uma subpasta (ex.: dudabertocco.com.br/tchautchautete),
// defina NEXT_PUBLIC_BASE_PATH=/tchautchautete antes do build.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Exportação estática: gera a pasta "out" para subir no cPanel (public_html).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
