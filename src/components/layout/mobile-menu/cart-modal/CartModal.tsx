"use client";
import { FC, useState, useEffect } from "react";
import { RiShoppingBagLine, RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface Props {}

export const CartModal: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)}>
        {open ? <RiCloseLine className="scale-150" /> : <RiShoppingBagLine />}
      </button>
      <AnimatePresence>{open && <Modal close={close} />}</AnimatePresence>
    </>
  );
};
type ModalProps = {
  close: () => void;
};
const Modal: FC<ModalProps> = ({ close }) => {
  const [style, setStyle] = useState("");
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
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{
        ease: "linear",
      }}
      className="fixed inset-0 bg-black/80 z-10 w-screen h-screen "
    >
      <motion.div className="bg-white w-full h-full flex flex-col">
        <div className="p-10 flex flex-col w-full h-full">
          <div className="relative w-full max-w-xs mx-auto aspect-square shrink-0">
            <Image
              fill
              quality={100}
              className="object-contain"
              src={"/empty_cart.svg"}
              alt="cart is empty"
            ></Image>
          </div>
          <div className="w-full h-full flex justify-center items-center flex-col text-center">
            <div className="mb-4">
              <span className="text-2xl font-bold">Ваша корзина пуста</span>
            </div>
            <div>
              <span>Похоже, что вы еще не добавили ничего в корзину</span>
            </div>
          </div>
          <div className="mx-auto">
            <Button onClick={close} variant={"default"} asChild>
              <Link href={"/"}>Перейти к каталогу</Link>
            </Button>
          </div>
        </div>
        <div className="border-border h-12 flex justify-center items-center">
          <button
            className="rounded-full w-8 h-8 border-t-2 border-primary flex justify-center items-center"
            onClick={close}
          >
            <RiCloseLine className="scale-150" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
