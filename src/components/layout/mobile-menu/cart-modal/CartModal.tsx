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
import { useCart } from "@/context/CartContext";
import { CartItem } from "../../header/menu/desktop-menu/cart/cart-item/CartItem";

interface Props {}

export const CartModal: FC<Props> = () => {
  const { cart, reset } = useCart();
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col gap-1 justify-center items-center">
          <RiShoppingBagLine />
          <div>
            <span>Корзина</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-screen h-[100dvh] max-w-full border-none overflow-y-auto flex flex-col">
        <div className="w-full h-full flex flex-col flex-1 max-h-full overflow-y-auto">
          {!!cart.length ? (
            <div className="pb-20">
              <div>
                <h2>Корзина</h2>
              </div>
              <div className="flex flex-col gap-4 py-4">
                {cart.map((el) => (
                  <CartItem key={el.id} {...el} />
                ))}
              </div>
            </div>
          ) : (
            <div className="p-10 flex flex-col w-full h-full pb-20">
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
                <DialogClose asChild>
                  <Button variant={"default"} asChild>
                    <Link href={"/catalog"}>Перейти к каталогу</Link>
                  </Button>
                </DialogClose>
              </div>
            </div>
          )}
        </div>
        <div className="fixed left-1/2 -translate-x-1/2 bottom-5 flex items-center gap-8">
          {!!cart.length && (
            <DialogClose asChild>
              <Button onClick={reset} variant={"destructive"} className="">
                Очистить
              </Button>
            </DialogClose>
          )}

          <DialogClose asChild>
            <button className="rounded-full w-8 h-8 border border-primary flex justify-center items-center">
              <RiCloseLine className="scale-150" />
            </button>
          </DialogClose>
          {!!cart.length && (
            <DialogClose asChild>
              <Button variant={"default"} className="">
                Оформить
              </Button>
            </DialogClose>
          )}
        </div>

        {/* <div className="bg-white w-full h-full flex flex-col">
          <div className="flex flex-col w-full h-full pb-10">
            {!!cart.length ? (
              <div className="flex flex-col w-full h-full ">
                <div>
                  <h2>Корзина</h2>
                </div>
                <div className="flex flex-col gap-4 py-4">
                  {cart.map((el) => (
                    <CartItem key={el.id} {...el} />
                  ))}
                </div>
              </div>
            ) : (
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
                  <DialogClose asChild>
                    <Button variant={"default"} asChild>
                      <Link href={"/catalog"}>Перейти к каталогу</Link>
                    </Button>
                  </DialogClose>
                </div>
              </div>
            )}
          </div>
          <div className="fixed left-1/2 -translate-x-1/2 bottom-6">
            <DialogClose asChild>
              <button className="rounded-full w-8 h-8 border-t-2 border-primary flex justify-center items-center">
                <RiCloseLine className="scale-150" />
              </button>
            </DialogClose>
          </div>
        </div> */}
      </DialogContent>
    </Dialog>
  );
};
