"use client";

import dynamic from "next/dynamic";

// Import komponen kamera tanpa SSR
const Kamera = dynamic(() => import("@/components/Kamera"), { ssr: false });

export default function KameraClient() {
  return <Kamera />;
}
