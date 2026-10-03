import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { MotionConfig } from "framer-motion";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const monsterrant = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

const siteName = "Tech-Spark Visionary Initiative"
const description =
  "The Tech-Spark Visionary Initiative (TVI) is a faith-rooted technology initiative bridging purpose, education, and innovation — building the next generation of tech leaders through the TVI Academy, the Innovation Lab, scholarships and community outreach."
const shortDescription =
  "Technology with Purpose. Innovation with Impact. Learn, build and lead with the TVI Academy, Innovation Lab and scholarships."


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Elevate Your Tech Future`,
    template: `%s | TVI`,
  },
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  description,
  keywords: [
    "Tech-Spark Visionary Initiative",
    "TVI",
    "TVI Academy",
    "TVI Innovation Lab",
    "Sparks",
    "Technology education",
    "Learn to code",
    "Tech scholarships",
    "Faith-rooted technology",
    "Tech leadership",
    "AI skills",
    "Mentorship",
    "Volunteer",
    "Community outreach",
    "Africa tech talent",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description: shortDescription,
    images: [
      {
        url: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1791068377/image_yeluag.png",
        alt: "A technologist interacting with a holographic city interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "shortDescription",
    images: ["https://res.cloudinary.com/djrp3aaq9/image/upload/v1791068377/image_yeluag.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${monsterrant.variable} h-full antialiased motion-safe:scroll-smooth`}
    >
      <MotionConfig reducedMotion="user">
        <body className="min-h-full flex flex-col">{children}</body>
      </MotionConfig>
    </html>
  );
}
