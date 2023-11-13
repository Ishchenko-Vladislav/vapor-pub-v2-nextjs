"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CartEmpty } from "./cart-empty/CartEmpty";
import { RiCloseLine } from "react-icons/ri";
import { CartItem } from "./cart-item/CartItem";
import { useCart } from "@/context/CartContext";
import { numberToEUR } from "@/lib/utils";
type CartProps = {
  close: () => void;
};
export const Cart: FC<CartProps> = ({ close }) => {
  const [style, setStyle] = useState("");
  const { cart, totalPrice, reset } = useCart();
  useEffect(() => {
    const theCSSprop = window.getComputedStyle(document.body, null).overflow;
    document.body.style.overflow = "hidden";
    setStyle(theCSSprop);
    return () => {
      document.body.style.overflow = style;
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black/70 fixed inset-0 z-50"
      onClick={close}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          ease: "easeInOut",
        }}
        className="max-w-lg w-full h-[100dvh] absolute top-0 right-0 bg-white  flex flex-col "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto flex flex-col pb-10 px-4 h-full">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center ">
              <button onClick={close} className="p-1 flex justify-center items-center">
                <RiCloseLine className="text-2xl" />
              </button>

              <div>Корзина</div>
            </div>
            {!!cart.length ? (
              <Button onClick={reset} variant={"destructive"}>
                Очистить
              </Button>
            ) : null}
          </div>
          {!!cart.length ? (
            <div className="flex flex-col">
              <div className="flex flex-col gap-3">
                {cart.map((el) => (
                  <CartItem key={el.id} {...el} />
                ))}
              </div>
            </div>
          ) : (
            <CartEmpty />
          )}
        </div>
        {cart.length ? (
          <div className="mt-auto w-full p-4 border-t border-border">
            <div className="text-lg font-semibold">
              <span>Итого: </span>
              <span>{numberToEUR(totalPrice)}</span>
            </div>
            <Button onClick={close} asChild className="w-full">
              <Link href={"/checkout"}>Оформить заказ</Link>
            </Button>
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
};
