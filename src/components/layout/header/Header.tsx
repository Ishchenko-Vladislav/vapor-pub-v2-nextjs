"use client";
import Link from "next/link";
import { FC } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
// import { Menu } from "./menu/Menu";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
// import { MobileMenu } from "./menu/MobileMenu";
interface Props {}
const MobileMenu = dynamic(() => import("./menu/mobile-menu/Example"), {
  ssr: false, // Отключаем SSR для динамической загрузки
  loading: () => <div></div>,
});
const DesktopMenu = dynamic(() => import("./menu/desktop-menu/DesktopMenu"), {
  ssr: false, // Отключаем SSR для динамической загрузки
  loading: () => <div></div>,
});
export const Header: FC<Props> = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="border-b-2 border-border py-5 sticky top-0 bg-background z-50 w-full h-fit px-2">
      <div className="flex items-center max-w-6xl w-full mx-auto gap-4 font-medium justify-between">
        <Link className="text-xl" href={"/"}>
          Vapor{" "}
          <sup>
            <span className="text-primary">P</span>ub
          </sup>
        </Link>
        <div className="text-sm md:flex hidden">
          <Button className="text-foreground" variant={"link"} asChild>
            <Link className=" " href={"/blog"}>
              Блог
            </Link>
          </Button>
          <Button className="text-foreground" variant={"link"} asChild>
            <Link className="" href={"/catalog"}>
              Каталог
            </Link>
          </Button>
        </div>
        {/* <div className="items-center gap-2 sm:flex hidden">
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <button>Авторизация</button>
          </div>
          <button className="hover:text-primary p-2 rounded-full hover:bg-accent transition-colors text-base">
            <RiShoppingBagLine />
          </button>
        </div> */}
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </div>
  );
};
