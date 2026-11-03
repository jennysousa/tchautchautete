import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CheckoutOrigin } from "@/components/CheckoutOrigin";
import { CookieBanner } from "@/components/CookieBanner";
import { SHOW_COOKIE_BANNER } from "@/lib/config";

// Container do Google Tag Manager. GA4 e pixel da Meta entram como tags dentro dele.
const GTM_ID = "GTM-NS4WV9MN";

// ID do projeto desta página no Microsoft Clarity (um projeto por página de venda).
// Fica no código de propósito, para gravar sempre, sem depender do GTM.
const CLARITY_ID = "z7dt32p72b";

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

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const TITLE = "Tchau, tchau, tetê | Desmame gentil com a Duda Bertocco";
const DESCRIPTION =
  "Desmamar com carinho é possível, e o vínculo de vocês continua inteiro. Método ABC do desmame, com a Duda Bertocco.";

export const metadata: Metadata = {
  // Domínio de produção. A imagem de compartilhamento precisa de endereço completo.
  metadataBase: new URL("https://dudabertocco.com.br"),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: `${BASE}/img/favicon-32.png`, sizes: "32x32", type: "image/png" },
      { url: `${BASE}/img/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: `${BASE}/img/apple-touch-icon.png`, sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${BASE}/`,
    siteName: "Duda Bertocco",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${BASE}/img/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Duda Bertocco, psicóloga e consultora de amamentação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${BASE}/img/og.jpg`],
  },
  // Página aberta para o Google. O endereço oficial evita conteúdo duplicado se houver outras cópias.
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE}/` },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <head>
        {/* Consent Mode v2. Padrão concedido enquanto o aviso de cookies estiver escondido.
            Se a pessoa tiver recusado antes pelo aviso, a recusa vale. Precisa rodar antes do GTM. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
var v=null;try{v=localStorage.getItem('cookie-consent')}catch(e){}
var s=v==='denied'?'denied':'granted';
gtag('consent','default',{ad_storage:s,analytics_storage:s,ad_user_data:s,ad_personalization:s});`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <CheckoutOrigin />
        {SHOW_COOKIE_BANNER ? <CookieBanner /> : null}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");`}
        </Script>
      </body>
    </html>
  );
}
