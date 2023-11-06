import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CartEmpty } from "./cart-empty/CartEmpty";
import { RiCloseLine } from "react-icons/ri";
import { CartItem } from "./cart-item/CartItem";
type CartProps = {
  close: () => void;
};
export const Cart: FC<CartProps> = ({ close }) => {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black/70 fixed inset-0"
      onClick={close}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          ease: "easeInOut",
        }}
        className="max-w-lg w-full h-screen absolute top-0 right-0 bg-white  flex flex-col "
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
            {!!arr.length ? <Button variant={"destructive"}>Очистить</Button> : null}
          </div>
          {!!arr.length ? (
            <div className="flex flex-col">
              <div className="flex flex-col gap-3">
                {arr.map((el) => (
                  <CartItem key={el} />
                ))}
              </div>
            </div>
          ) : (
            <CartEmpty />
          )}
        </div>
        <div className="mt-auto w-full p-4 border-t rounded-t-xl border-border">
          <div className="text-lg font-semibold">
            <span>Итого:</span>
            <span>200</span>
          </div>
          <Button className="w-full">Оформить заказ</Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
