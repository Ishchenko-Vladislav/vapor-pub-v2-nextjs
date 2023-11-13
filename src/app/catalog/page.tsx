"use client";
import { Filter } from "@/components/pages/catalog/filter/Filter";
import { ProductItem } from "@/components/product/ProductItem";
import { Input } from "@/components/ui/input";
import { useCatalog } from "@/context/CatalogContext";
import { useGetAllProducts } from "@/hooks/product/useGetAllProducts";
import Image from "next/image";
import React from "react";
import { CgOptions } from "react-icons/cg";
import { RiShoppingBagLine } from "react-icons/ri";

const im = "";
interface Props {}

const page = (props: Props) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  // const { isEmpty, products } = useGetAllProducts();
  const { products, isEmpty } = useCatalog();
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto pb-10 px-2">
        <div className="flex flex-col">
          <div className="w-full py-10 relative">
            <Image
              className="w-full object-contain rounded-sm xs:rounded-lg md:rounded-xl"
              width={1000}
              height={200}
              src={"/012.webp"}
              alt="bg"
            />
            <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-fit whitespace-nowrap">
              <span className="text-xs xs:text-base sm:text-xl font-bold">
                Одноразовые електронные сигареты
              </span>
            </div>
          </div>

          <div className="grid xs:mx-0 mx-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-4 w-full">
            {!isEmpty ? (
              products.map((el) => <ProductItem key={el.id} {...el} />)
            ) : (
              <div>Нет товаров</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
