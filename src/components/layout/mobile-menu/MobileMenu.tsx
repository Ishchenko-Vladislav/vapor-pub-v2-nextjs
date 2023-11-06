"use client";
import { FC, useEffect, useState, PropsWithChildren } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CartModal } from "./cart-modal/CartModal";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
// import MediaQuery from "react-responsive";
// const MediaQuery = dynamic(() => import("react-responsive"), {
//   ssr: false,
// });

interface Props {}

const MobileMenu: FC<Props> = () => {
  const pathname = usePathname();

  return (
    <div className="fixed md:hidden bottom-0 left-0 w-screen h-12 bg-background text-foreground flex items-center px-2 justify-around z-40">
      <BiHomeAlt2
        className={cn({
          ["text-primary fill-primary"]: pathname === "/",
        })}
      />
      <CartModal />
      <HiOutlineUser className="" />
    </div>
  );
};
export default MobileMenu;

// const Mobile: FC<PropsWithChildren> = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   return isMobile ? children : null;
// };
