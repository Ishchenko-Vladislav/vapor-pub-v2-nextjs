import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { RiShoppingBagLine, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {}

export const CartModal: FC<Props> = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <RiShoppingBagLine />
      </DialogTrigger>
      <DialogContent className="w-screen h-[100dvh] max-w-full border-none ">
        <div className="bg-white w-full h-full flex flex-col">
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
            <DialogClose asChild>
              <button
                className="rounded-full w-8 h-8 border-t-2 border-primary flex justify-center items-center"
                onClick={close}
              >
                <RiCloseLine className="scale-150" />
              </button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
