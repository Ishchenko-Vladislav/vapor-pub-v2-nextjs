"use client";
import { FC, useState, useEffect, useRef } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiShoppingBagLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi2";
import { LiaShoppingBagSolid } from "react-icons/lia";

import { Cart } from "./cart/Cart";
import { AuthModal } from "./auth-modal/AuthModal";
import { useAuth } from "@/context/Authorization";

interface Props {}

const DesktopMenu: FC<Props> = () => {
  const [openCart, setOpenCart] = useState(false);
  const { authed } = useAuth();
  const close = () => setOpenCart(false);
  return (
    <div className="items-center gap-1 sm:flex hidden">
      {authed ? (
        <Link
          className="hover:text-primary p-2 rounded-full hover:bg-background transition-colors text-base"
          href={"/profile"}
        >
          <HiOutlineUser />
        </Link>
      ) : (
        <AuthModal />
      )}

      <button
        onClick={() => setOpenCart(true)}
        className="hover:text-primary p-2 rounded-full hover:bg-background transition-colors text-base"
      >
        {/* <RiShoppingBagLine /> */}
        {/* <LiaShoppingBagSolid /> */}
        <HiOutlineShoppingBag />
      </button>
      <AnimatePresence>{openCart && <Cart close={close} />}</AnimatePresence>
    </div>
  );
};
export default DesktopMenu;
