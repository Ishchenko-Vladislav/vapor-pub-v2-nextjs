import Image from "next/image";
import { FC } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Popover, PopoverContent, PopoverTrigger, PopoverClose } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/lib/schema";
import { CartType, useCart } from "@/context/CartContext";
import { MdOutlineImageNotSupported, MdDeleteOutline } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { numberToEUR } from "@/lib/utils";
interface Props {}

export const CartItem: FC<CartType> = ({ id, product, quantity }) => {
  const { decreaseCartQuantity, increaseCartQuantity, getItemQuantity, removeFromCart } = useCart();
  return (
    <div className="w-full px-3 py-2 rounded-md bg-accent flex gap-2">
      <div className="w-16 xs:w-20 aspect-square relative shrink-0">
        {/* <Image fill className="w-full object-contain" src={"/c_01.webp"} alt="image" /> */}
        {product.img ? (
          <Image
            fill
            className="w-full object-contain mix-blend-darken"
            src={product.img.url}
            alt="image"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <MdOutlineImageNotSupported className="w-24 h-24" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between items-start">
          <div className="text-xs xs:text-sm md:text-base">{product.title}</div>
          <button
            onClick={() => removeFromCart(id)}
            className="p-2 rounded-full hover:bg-background hover:text-primary"
          >
            <MdDeleteOutline />
            {/* <RiCloseLine /> */}
          </button>
        </div>
        <div className=" justify-end w-full gap-3 items-end md:flex hidden">
          <div className="bg-background flex items-center w-fit h-fit p-px gap-1.5 rounded">
            <button
              onClick={() => decreaseCartQuantity(id)}
              className="p-1 hover:bg-primary rounded hover:text-background"
            >
              <FiChevronLeft />
            </button>
            <div className="pointer-events-none select-none w-6 text-center">{quantity}</div>
            <button
              onClick={() => increaseCartQuantity(id, product)}
              className="p-1 hover:bg-primary rounded hover:text-background"
            >
              <FiChevronRight />
            </button>
          </div>
          <div className="text-sm font-light w-24 flex  flex-col items-end">
            <div>
              {numberToEUR(
                product.discount ? product.discountPrice * quantity : product.price * quantity
              )}
            </div>
            <div className="text-muted-foreground">
              {product.discount ? (
                <div className="flex items-baseline flex-col">
                  <div className="whitespace-nowrap text-red-500">
                    {numberToEUR(product.discountPrice)} /шт
                  </div>
                  <div className="line-through whitespace-nowrap">
                    {numberToEUR(product.price)} /шт
                  </div>
                </div>
              ) : (
                <div>{numberToEUR(product.price)} /шт</div>
              )}
            </div>
          </div>
        </div>

        <div className="md:hidden block">
          <div className="mt-3 flex justify-between items-end">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => decreaseCartQuantity(id)}
                className="w-7 h-7 border flex justify-center items-center hover:border-primary text-xl hover:text-primary rounded"
              >
                -
              </button>
              <div className="w-7 h-7 border flex justify-center items-center rounded select-none pointer-events-none">
                {getItemQuantity(id)}
              </div>
              <button
                onClick={() => increaseCartQuantity(id, product)}
                className="w-7 h-7 border flex justify-center items-center hover:border-primary text-xl hover:text-primary rounded"
              >
                +
              </button>
            </div>
            <div className="text-sm font-light">
              <div>{numberToEUR(product.price * quantity)}</div>
              <div className="text-muted-foreground">
                {product.discount ? (
                  <div className="flex items-baseline flex-col">
                    <div className="whitespace-nowrap text-red-500">
                      {numberToEUR(product.discountPrice)} /шт
                    </div>
                    <div className="line-through whitespace-nowrap">
                      {numberToEUR(product.price)} /шт
                    </div>
                  </div>
                ) : (
                  <div>{numberToEUR(product.price)} /шт</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
