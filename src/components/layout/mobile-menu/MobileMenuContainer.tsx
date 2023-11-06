"use client";
import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";
// import { ReturnNull } from "@/components/ReturnNull";

const MobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false, // Отключаем SSR для динамической загрузки
});
const ReturnNull = dynamic(() => import("../../ReturnNull"), {
  ssr: false, // Отключаем SSR для динамической загрузки
});
interface Props {}

export const MobileMenuContainer: FC<Props> = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // if (!isMobile) return null;
  //   if (isMobile) return <MobileMenu />;
  // if (isServer()) return <div>d</div>;
  // return null;
  if (isMobile) return <MobileMenu />;
  return <ReturnNull />;
};
