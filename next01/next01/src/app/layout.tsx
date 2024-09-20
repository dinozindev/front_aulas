import type { Metadata } from "next";
import Header from "./Header/header";
import Footer from "./Footer/footer";

import "../../public/assets/css/style.css"

export const metadata: Metadata = {
  title: "NEXT",
  description: "Minha primeira aplicação em NEXT.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
