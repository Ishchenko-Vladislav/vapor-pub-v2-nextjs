"use client";
import { FC, useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine, RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {}

const MobileMenu: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="md:hidden block">
      <button onClick={() => setOpen(true)}>
        <FaBarsStaggered className="text-xl" />
      </button>
      <AnimatePresence>{open && <Menu close={close} />}</AnimatePresence>
    </div>
  );
};
export default MobileMenu;

type MenuProps = {
  close: () => void;
};
const Menu: FC<MenuProps> = ({ close }) => {
  const [style, setStyle] = useState("");
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    const theCSSprop = window.getComputedStyle(document.body, null).overflow;
    // console.log("theCSSprop", theCSSprop);
    document.body.style.overflow = "hidden";
    setStyle(theCSSprop);
    return () => {
      document.body.style.overflow = style;
    };
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      className={cn("fixed inset-0 w-screen h-screen bg-background z-10", {
        ["z-50"]: open,
      })}
    >
      <div className="flex flex-col p-4">
        <div className="flex gap-2 items-center justify-end">
          <div className="text-xl">Меню</div>
          <button onClick={close} className="text-3xl">
            <RiCloseLine />
          </button>
        </div>
        <div className="flex gap-6 py-5 justify-center">
          <Button onClick={close} variant={"outline"} size={"icon"}>
            <RiShoppingBagLine />
          </Button>
          <Button onClick={close} variant={"outline"} size={"icon"}>
            <AiOutlineHeart />
          </Button>
          <Button onClick={close} variant={"outline"} size={"icon"}>
            <HiOutlineUser />
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Link onClick={close} href={"/blog"}>
            Блог
          </Link>
          <Link onClick={close} href={"/catalog"}>
            Каталог
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
