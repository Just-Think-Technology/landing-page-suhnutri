import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/seo/json-ld";
import { siteContent } from "@/content/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: siteContent.hero.image.src,
        width: siteContent.hero.image.width,
        height: siteContent.hero.image.height,
        alt: siteContent.hero.image.alt,
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
