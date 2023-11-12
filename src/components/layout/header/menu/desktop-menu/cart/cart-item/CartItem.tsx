import Image from "next/image";
import { FC } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Popover, PopoverContent, PopoverTrigger, PopoverClose } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/lib/schema";
import { CartType, useCart } from "@/context/CartContext";
import { MdOutlineImageNotSupported, MdDeleteOutline } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
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
        <div>
          <div className="text-xs xs:text-sm ">
            Цена: <span>{numberToEUR(product.price)}</span>
          </div>
        </div>
        {/* <div className="flex gap-1 items-center">
          <div>{numberToEUR(32)}</div>
          <div>x</div>
          <div>{numberToEUR(64)}</div>
        </div> */}
        <div className="mt-3">
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
        </div>
      </div>
    </div>
  );
};
