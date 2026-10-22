import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static export -> upload the generated `out/` folder to any
  // shared hosting (Hostinger File Manager drag-drop). No Node server needed.
  output: "export",
  // NOTE (Vercel/GitHub canonical source): no basePath — deploys at domain root.
  // The Hostinger preview build used basePath "/codehubb" (see deploy zips); for
  // /codehubb/ preview rebuilds, re-add: basePath: "/codehubb",
  // Emit /services/index.html style files so every route works on plain hosts.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
