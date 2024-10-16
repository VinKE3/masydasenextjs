import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "@/scss/index.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
export const metadata: Metadata = {
  title: "Masydase",
  description: "Transformamos ideas en soluciones ágiles de confianza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
