import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {}

export const CartEmpty: FC<Props> = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-10  gap-5 ">
      <div className="relative w-full max-w-xs mx-auto aspect-square shrink-0">
        <Image
          fill
          quality={100}
          className="object-contain w-full"
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

      <Button onClick={close} variant={"default"} asChild>
        <Link href={"/catalog"}>Перейти к каталогу</Link>
      </Button>
    </div>
  );
};
