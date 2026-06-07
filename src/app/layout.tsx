import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'Arkonex: AI Systems That Work While You Sleep',
  description: 'Arkonex builds intelligent AI automation systems for businesses, handling leads, follow-ups, and reminders to boost growth and efficiency.',
  keywords: ["AI automation, AI systems, agency, artificial intelligence, machine learning, business growth, lead generation, automated follow-ups, India"],
  openGraph: {
    "title": "Arkonex: AI Systems That Work While You Sleep",
    "description": "Arkonex builds intelligent AI automation systems for businesses, handling leads, follow-ups, and reminders to boost growth and efficiency.",
    "url": "https://www.arkonex.com",
    "siteName": "Arkonex",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/black-background-water-texture-frame_53876-142892.jpg",
        "alt": "Arkonex AI Systems Dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Arkonex: AI Systems That Work While You Sleep",
    "description": "Arkonex builds intelligent AI automation systems for businesses, handling leads, follow-ups, and reminders to boost growth and efficiency.",
    "images": [
      "http://img.b2bpic.net/free-photo/black-background-water-texture-frame_53876-142892.jpg"
    ]
  },
};


const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
