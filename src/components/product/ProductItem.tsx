"use client";
import { useCart } from "@/context/CartContext";
import { ProductRef } from "@/hooks/product/useGetAllProducts";
import { cn, numberToEUR } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { RiShoppingBagLine, RiCloseLine } from "react-icons/ri";
import { Button } from "../ui/button";

interface Props {}

export const ProductItem: FC<ProductRef> = ({ id, product }) => {
  const { removeFromCart, increaseCartQuantity, cart, getItemQuantity } = useCart();
  return (
    <div className=" w-full h-auto p-1 xs:p-2 border border-border rounded-xl bg-secondary max-w-xs relative flex flex-col">
      {product.discount ? (
        <Image
          width={30}
          height={30}
          className="absolute top-3 right-3 z-10 w-5 xs:w-8 h-5 xs:h-8"
          src={"/discount.png"}
          alt="discount"
        />
      ) : null}
      {product.topSeller || product.newProduct ? (
        <div className="absolute top-2 left-2 flex flex-col gap-1 xs:gap-2 text-center z-10">
          {product.topSeller ? (
            <div className=" bg-red-500 text-white text-sm px-2 rounded-lg">Топ продаж</div>
          ) : null}
          {product.newProduct ? (
            <div className=" bg-blue-500 text-white text-sm px-2 rounded-lg">Новинка</div>
          ) : null}
        </div>
      ) : null}
      <div className="w-full mx-auto aspect-square relative shrink-0">
        {/* <img src="1.jpg" alt="dd" className="w-full object-contain mix-blend-darken" /> */}
        {product.img ? (
          <Image
            className={cn("w-full object-contain mix-blend-darken", {
              ["grayscale"]: !product.status,
            })}
            src={product.img.url}
            fill
            alt="product image"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <MdOutlineImageNotSupported className="w-32 h-32" />
          </div>
        )}
      </div>
      <div className="pt-4 px-1 flex flex-col h-full">
        <div className="text-sm">
          <span>{product.title}</span>
        </div>
        {product.status ? (
          <div className="flex items-center justify-between pt-1 mt-auto ">
            <div>
              {product.discount ? (
                <div className="flex  items-baseline gap-1">
                  <div className="line-through text-muted-foreground text-xs xs:text-sm">
                    {numberToEUR(product.price)}
                  </div>
                  <div className="text-red-500 text-sm xs:text-base">
                    {numberToEUR(product.discountPrice)}
                  </div>
                </div>
              ) : (
                <div>{numberToEUR(product.price)}</div>
              )}
            </div>
            {cart.find((el) => el.id === id) ? (
              <Button
                variant={"default"}
                size={"icon"}
                onClick={() => increaseCartQuantity(id, product)}
                className="w-8 h-8 xs:w-9 xs:h-9"
              >
                +{getItemQuantity(id)}
              </Button>
            ) : (
              <Button
                size={"icon"}
                variant={"ghost"}
                onClick={() => increaseCartQuantity(id, product)}
                className="hover:text-primary hover:bg-background w-8 h-8 xs:w-9 xs:h-9"
              >
                <RiShoppingBagLine />
              </Button>
            )}
          </div>
        ) : (
          <div className="mt-auto py-2 text-center">Нет в наличии</div>
        )}
      </div>
    </div>
  );
};
