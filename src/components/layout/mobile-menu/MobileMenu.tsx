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

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const previous = scrollY.getPrevious();
  //   console.log("motion value", previous, latest);
  //   if (latest > previous && latest > 200) {
  //     setHidden(true);
  //   } else {
  //     setHidden(false);
  //   }
  // });
  return (
    <motion.div
      // variants={{
      //   visible: { y: -8, x: "-50%" },
      //   hidden: { y: "100%", x: "-50%" },
      // }}
      // animate={hidden ? "hidden" : "visible"}
      // transition={{ duration: 0.35 }}
      className="fixed   bottom-0 left-1/2 -translate-x-1/2 max-w-sm w-full bg-background  md:hidden rounded-xl h-14 text-foreground flex items-end px-2 justify-around py-1 z-40"
    >
      <CatalogModal />
      <CartModal />
      <div>
        <Link
          href={authed ? "/profile" : "/login"}
          className="flex flex-col gap-1 justify-center items-center webkit-highlight active:text-primary"
        >
          <div>
            <HiOutlineUser className="" />
          </div>
          <div>
            <span>Профиль</span>
          </div>
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
