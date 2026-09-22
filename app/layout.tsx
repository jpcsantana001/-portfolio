import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { personal } from "@/lib/data";

const siteUrl = "https://joaopedrosantana.dev"; // TODO: trocar pela URL final do domínio

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — ${personal.role}`,
    template: `%s — ${personal.name}`,
  },
  description: personal.tagline,
  keywords: [
    "João Pedro Santana",
    "Software Engineer",
    "Full Stack Developer",
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: personal.fullName }],
  creator: personal.fullName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: `${personal.name} — ${personal.role}`,
    description: personal.tagline,
    siteName: personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.role}`,
    description: personal.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d12" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#top"
            className="fixed left-2 top-2 z-[100] -translate-y-16 rounded-md bg-signal px-4 py-2 text-sm text-white transition-transform focus:translate-y-0"
          >
            Pular para o conteúdo
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
