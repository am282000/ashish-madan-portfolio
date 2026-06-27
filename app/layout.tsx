import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Madan | Senior Software Engineer",
  description:
    "Senior Software Engineer with 3.5+ years building scalable frontend systems. Expert in React, Next.js, Vue.js, and microfrontend architectures.",
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Ashish Madan" }],
  creator: "Ashish Madan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashishmadan.dev",
    siteName: "Ashish Madan Portfolio",
    title: "Ashish Madan | Senior Software Engineer",
    description:
      "Showcasing expertise in modern web technologies and scalable systems",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ashish Madan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Madan | Senior Software Engineer",
    description:
      "Building scalable frontend systems with modern web technologies",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop",
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://ashishmadan.dev",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-slate-950 text-white">
        {children}

        {/* JSON-LD Schema for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ashish Madan",
              url: "https://ashishmadan.dev",
              email: "ashishmadan12@gmail.com",
              jobTitle: "Senior Software Engineer",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
              sameAs: [
                "https://github.com/am282000",
                "https://linkedin.com/in/ashish2000",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
