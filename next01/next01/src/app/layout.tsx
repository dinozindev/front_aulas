import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
