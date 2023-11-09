"use client";
import { FC, useEffect, useState, PropsWithChildren } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { CartModal } from "./cart-modal/CartModal";
import Link from "next/link";
import { useAuth } from "@/context/Authorization";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
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
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.div
      variants={{
        visible: { y: -8 },
        hidden: { y: "100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35 }}
      className="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-xs w-full backdrop-blur-sm"
    >
      <div className=" opacity-90 md:hidden bottom-2 rounded-xl left-1/2 -translate-x-1/2  h-12 bg-background text-foreground flex items-center px-2 justify-around z-40">
        <BiHomeAlt2
          className={cn({
            ["text-primary fill-primary"]: pathname === "/",
          })}
        />
        <CartModal />
        <Link href={authed ? "/profile" : "/login"}>
          <HiOutlineUser className="" />
        </Link>
      </div>
    </motion.div>
  );
};
export default MobileMenu;

// const Mobile: FC<PropsWithChildren> = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   return isMobile ? children : null;
// };
