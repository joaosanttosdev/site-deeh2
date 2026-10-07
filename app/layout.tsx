import type { Metadata, Viewport } from "next";
import { Inter, Poppins, League_Spartan, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Títulos do Portfólio e do FAQ (abaixo da dobra: sem preload, para não
// disputar banda com o hero).
const poppins = Poppins({
  variable: "--font-heading",
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// Substituta da Geometric 415 BT Black usada no design do hero.
// Fonte variável: um arquivo só com todos os pesos.
const leagueSpartan = League_Spartan({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// Fonte cursiva do "projeto?" na seção de contato (abaixo da dobra).
const greatVibes = Great_Vibes({
  variable: "--font-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const siteUrl = "https://deehzigner.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DeehZigner | Design gráfico que transforma sua ideia em sucesso",
    template: "%s | DeehZigner",
  },
  description:
    "Anderson Nogueira Silva — Designer Gráfico e Arte Finalista com mais de 12 anos de experiência. Identidade visual, logotipos, design digital, comunicação visual, rótulos e estampas.",
  keywords: [
    "design gráfico",
    "identidade visual",
    "criação de logotipo",
    "design digital",
    "comunicação visual",
    "DeehZigner",
    "Anderson designer",
  ],
  authors: [{ name: "Anderson Nogueira Silva" }],
  creator: "Anderson Nogueira Silva",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "DeehZigner",
    title: "DeehZigner | Transformando sua ideia em sucesso",
    description:
      "Design gráfico, identidade visual e comunicação visual com mais de 12 anos de experiência.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeehZigner | Transformando sua ideia em sucesso",
    description:
      "Design gráfico, identidade visual e comunicação visual com mais de 12 anos de experiência.",
  },
};

export const viewport: Viewport = {
  themeColor: "#04060d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} ${poppins.variable} ${leagueSpartan.variable} ${greatVibes.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-black text-foreground">
        {children}
      </body>
    </html>
  );
}
