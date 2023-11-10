"use client";
import { FC, useEffect, useState, PropsWithChildren } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { CartModal } from "./cart-modal/CartModal";
import Link from "next/link";
import { useAuth } from "@/context/Authorization";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { CatalogModal } from "./catalog-modal/CatalogModal";
// import MediaQuery from "react-responsive";
// const MediaQuery = dynamic(() => import("react-responsive"), {
//   ssr: false,
// });

interface Props {}

const MobileMenu: FC<Props> = () => {
  const pathname = usePathname();
  const { authed } = useAuth();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log("motion value", previous, latest);
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.div
      variants={{
        visible: { y: -8, x: "-50%" },
        hidden: { y: "100%", x: "-50%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35 }}
      className="fixed bottom-0 left-1/2 max-w-xs w-full bg-background opacity-90 md:hidden rounded-xl h-12 text-foreground flex items-center px-2 justify-around z-40"
    >
      <CatalogModal />
      <CartModal />
      <Link href={authed ? "/profile" : "/login"}>
        <HiOutlineUser className="" />
      </Link>
    </motion.div>
  );
};
export default MobileMenu;

// const Mobile: FC<PropsWithChildren> = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   return isMobile ? children : null;
// };
