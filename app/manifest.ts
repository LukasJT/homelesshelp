import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HomelessHelp — Find help. Volunteer. Understand.",
    short_name: "HomelessHelp",
    description:
      "Free directory of homeless shelters and crisis resources across the US and Canada.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf7",
    theme_color: "#0f766e",
    orientation: "portrait",
    categories: ["social", "lifestyle", "utilities"],
    icons: [
      {
        src: "/icon",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Find help near me",
        short_name: "Find help",
        description: "Locate the nearest shelters and crisis services",
        url: "/find-help",
      },
      {
        name: "Crisis hotlines",
        short_name: "Hotlines",
        description: "211, 988, and population-specific crisis lines",
        url: "/get-help",
      },
      {
        name: "Volunteer near me",
        short_name: "Volunteer",
        description: "Find shelters that need volunteers",
        url: "/volunteer",
      },
    ],
  };
}
