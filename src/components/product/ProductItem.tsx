"use client";
import { useCart } from "@/context/CartContext";
import { ProductRef } from "@/hooks/product/useGetAllProducts";
import { numberToEUR } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { RiShoppingBagLine, RiCloseLine } from "react-icons/ri";

interface Props {}

export const ProductItem: FC<ProductRef> = ({ id, product }) => {
  const { removeFromCart, increaseCartQuantity, cart } = useCart();
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
      <div className="w-full mx-auto aspect-square relative shrink-0">
        {/* <img src="1.jpg" alt="dd" className="w-full object-contain mix-blend-darken" /> */}
        {product.img ? (
          <Image
            className="w-full object-contain mix-blend-darken"
            src={product.img.url}
            fill
            alt=""
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
        <div className="flex items-center justify-between pt-3 mt-auto">
          <div>
            {product.discount ? (
              <div className="flex items-baseline gap-1">
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
            <button
              onClick={() => removeFromCart(id)}
              className="p-2 rounded-full hover:bg-background text-red-500 cursor-pointer transition-colors "
            >
              <RiCloseLine />
            </button>
          ) : (
            <button
              onClick={() => increaseCartQuantity(id, product)}
              className="p-2 rounded-full hover:bg-background cursor-pointer transition-colors hover:text-primary"
            >
              <RiShoppingBagLine />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
