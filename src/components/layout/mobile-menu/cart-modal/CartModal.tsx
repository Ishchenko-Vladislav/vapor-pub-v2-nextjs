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
import { numberToEUR } from "@/lib/utils";

interface Props {}

export const CartModal: FC<Props> = () => {
  const { cart, totalPrice, reset } = useCart();
  return (
    <Dialog>
      <DialogTrigger className="webkit-highlight active:text-primary">
        <div className="flex flex-col gap-1 justify-center items-center relative">
          <RiShoppingBagLine />
          <div>
            <span>Корзина</span>
          </div>
          {cart && cart.length > 0 ? (
            <div className="w-5 h-5 absolute -top-1 -right-2 flex justify-center items-center rounded-full text-white bg-primary text-sm">
              {cart.length}
            </div>
          ) : null}
        </div>
      </DialogTrigger>
      <DialogContent className="w-screen h-[100dvh] max-w-full border-none overflow-y-auto flex flex-col">
        <div className="w-full h-full flex flex-col flex-1 max-h-full overflow-y-auto pb-10">
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
        {cart.length > 0 ? (
          <div className="w-full h-fit fixed left-0 bottom-0 bg-background pt-2 px-2">
            <div className="flex items-center gap-2">
              <div>Итого:</div>
              <div>{numberToEUR(totalPrice)}</div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <DialogClose asChild>
                <Button asChild>
                  <Link href={"/checkout"}>Оформить заказ</Link>
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant={"outline"}>Закрыть</Button>
              </DialogClose>
            </div>
          </div>
        ) : (
          <DialogClose asChild>
            <button className="rounded-full mx-auto bg-background w-8 h-8 border border-primary flex justify-center items-center webkit-highlight active:text-primary">
              <RiCloseLine className="scale-150" />
            </button>
          </DialogClose>
        )}
        {/* <div className="fixed left-1/2 -translate-x-1/2 bottom-5 flex items-center gap-8">
          {!!cart.length && (
            <DialogClose asChild>
              <Button onClick={reset} variant={"destructive"} className="">
                Очистить
              </Button>
            </DialogClose>
          )}

          <DialogClose asChild>
            <button className="rounded-full bg-background w-8 h-8 border border-primary flex justify-center items-center webkit-highlight active:text-primary">
              <RiCloseLine className="scale-150" />
            </button>
          </DialogClose>
          {!!cart.length && (
            <DialogClose asChild>
              <Button variant={"default"} className="relative">
                <div className="p-2 absolute -top-5 bg-background flex flex-col text-foreground">
                  <div>{numberToEUR(totalPrice)}</div>
                  <div>Итого</div>
                </div>
                Оформить
              </Button>
            </DialogClose>
          )}
        </div> */}

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
