"use client";
import Link from "next/link";
import { FC } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
// import { Menu } from "./menu/Menu";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { Button, buttonVariants } from "@/components/ui/button";
// import { MobileMenu } from "./menu/MobileMenu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface Props {}
const MobileMenu = dynamic(() => import("./menu/mobile-menu/MobileMenu"), {
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
    <div className="border-b border-border py-3 sticky top-0 bg-secondary z-50 w-full h-fit px-2">
      <div className="flex items-center max-w-6xl w-full mx-auto gap-4 font-medium justify-between">
        <Link className="text-xl" href={"/"}>
          Vapor{" "}
          <sup>
            <span className="text-primary">P</span>ub
          </sup>
          {/* <div className="relative">
            <Image
              src={"/image_2.png"}
              alt=""
              width={500}
              height={500}
              className="object-contain w-20"
              quality={100}
            />
          </div> */}
        </Link>
        <div className="text-sm md:flex hidden">
          {/* <Button className="text-foreground" variant={"link"} asChild>
            <Link className="" href={"/catalog"}>
              Каталог
            </Link>
          </Button> */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent !text-foreground",
                    buttonVariants({ variant: "link" })
                  )}
                >
                  Каталог
                </NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <div className="flex flex-col max-w-xs w-full">
                    <NavigationMenuLink className="py-2 w-32 text-center hover:bg-accent" asChild>
                      <Link href="/catalog">Все</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="py-2 w-32 text-center hover:bg-accent" asChild>
                      <Link href="/catalog/vozol-gear">Vozol Gear</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="py-2 w-32 text-center hover:bg-accent" asChild>
                      <Link href="/catalog/vozol-star">Vozol Star</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="py-2 w-32 text-center hover:bg-accent" asChild>
                      <Link href="/catalog/elfbar-ebdesign">Elfbar EBdesing</Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="text-foreground" variant={"link"} asChild>
            <Link className="" href={"/garantiya"}>
              Гарантия
            </Link>
          </Button>
          <Button className="text-foreground" variant={"link"} asChild>
            <Link className="" href={"/delivery"}>
              Оплата и доставка
            </Link>
          </Button>
          <Button className="text-foreground" variant={"link"} asChild>
            <Link className=" " href={"/blog"}>
              Блог
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
