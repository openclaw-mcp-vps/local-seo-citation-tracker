import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local SEO Citation Tracker — Monitor 50+ Directories",
  description: "Track and monitor your business listings across 50+ directories. Get alerted on inconsistencies and keep your local SEO citations accurate."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dafccb3e-b573-45b9-be24-bcd401857d74"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
