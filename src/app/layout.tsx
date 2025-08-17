import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Next.js Exercise",
  description: "Learn Next.js by pages (HeroUI + Tailwind)",
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}