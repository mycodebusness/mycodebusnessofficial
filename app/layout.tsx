import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Fira_Code } from "next/font/google";

export const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "MyCodeBusness",
  description:
    "un site d'apprentissage des bases de la programmations multiplateformes et de maitrise de la souris, du clavier et.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
