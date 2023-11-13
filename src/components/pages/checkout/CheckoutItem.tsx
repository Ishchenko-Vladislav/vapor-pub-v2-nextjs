import { useCart } from "@/context/CartContext";
import { ProductRef } from "@/hooks/product/useGetAllProducts";
import { cn, numberToEUR } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { MdOutlineImageNotSupported } from "react-icons/md";

interface Props {}

export const CheckoutItem: FC<ProductRef> = ({ id, product }) => {
  const { getItemQuantity } = useCart();
  return (
    <div className="w-full flex items-center gap-2 bg-secondary p-2 rounded-md">
      <div className="w-14 aspect-square relative shrink-0">
        {product.img ? (
          <Image
            className={cn("w-full object-contain mix-blend-darken")}
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
      <div className="">{product.title}</div>
      <div className="flex text-sm items-baseline ml-auto">
        <div>{getItemQuantity(id)}</div>
        <div>x</div>
        <div className="text-base">
          {numberToEUR(
            product.discount
              ? product.discountPrice * getItemQuantity(id)
              : product.price * getItemQuantity(id)
          )}
        </div>
      </div>
    </div>
  );
};
