import type { Metadata } from "next";
import { Inter, Bitter, Montserrat, Raleway, Nunito, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });
const alexandria = Roboto_Flex({ subsets: ["latin"] });
const andika = Bitter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VaporPub - Магазин электронных сигарет: качество и выбор по выгодным ценам",
  description:
    "Покупайте качественные электронные сигареты и аксессуары в нашем магазине. У нас вы найдете широкий выбор продукции для электронного парения по доступным ценам",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={alexandria.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
