import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tchau, tchau, tetê | Desmame gentil com a Duda Bertocco",
  description:
    "Desmamar com carinho é possível, e o vínculo de vocês continua inteiro. Método ABC do desmame, com a Duda Bertocco.",
  // Mantém fora do Google enquanto a página está em teste contra a atual.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
