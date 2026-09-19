export const adsEnabled = process.env.NEXT_PUBLIC_THIRD_PARTY_ADS_ENABLED === "true";
export const adFrames = {
  mobile: { src: "/ads/320x50.html", width: 320, height: 50 },
  tablet: { src: "/ads/468x60.html", width: 468, height: 60 },
  desktop: { src: "/ads/728x90.html", width: 728, height: 90 },
  rectangle: { src: "/ads/300x250.html", width: 300, height: 250 },
  rail: { src: "/ads/160x600.html", width: 160, height: 600 },
  native: { src: "/ads/native.html", width: 728, height: 250 },
} as const;
export const popunderEnabled = false;
export const socialBarEnabled = false;
