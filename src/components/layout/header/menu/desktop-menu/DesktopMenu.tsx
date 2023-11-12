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
import { useCart } from "@/context/CartContext";

interface Props {}

const DesktopMenu: FC<Props> = () => {
  const [openCart, setOpenCart] = useState(false);
  const { authed } = useAuth();
  const { cart } = useCart();
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
        className="hover:text-primary p-2 rounded-full hover:bg-background transition-colors text-base relative"
      >
        {/* <RiShoppingBagLine /> */}
        {/* <LiaShoppingBagSolid /> */}
        <HiOutlineShoppingBag />
        {cart && cart.length > 0 ? (
          <div className="absolute w-5 h-5 rounded-full bg-primary flex justify-center items-center -top-1 -right-2 text-sm text-white select-none pointer-events-none z-0">
            {cart.length}
          </div>
        ) : null}
      </button>
      <AnimatePresence>{openCart && <Cart close={close} />}</AnimatePresence>
    </div>
  );
};
export default DesktopMenu;
