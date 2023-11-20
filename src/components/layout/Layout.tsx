import { FC, PropsWithChildren } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { MobileMenuContainer } from "./mobile-menu/MobileMenuContainer";
import { RootProvider } from "@/providers";

interface Props {}

export const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <RootProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 relative z-0 flex flex-col">{children}</main>
        <Footer />
      </div>
      <MobileMenuContainer />
    </RootProvider>
  );
};
