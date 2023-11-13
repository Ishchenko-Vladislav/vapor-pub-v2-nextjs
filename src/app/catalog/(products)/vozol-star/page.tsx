"use client";
import { BreadCrumb } from "@/components/breadcrumb/BreadCrumb";
import { ProductItem } from "@/components/product/ProductItem";
import { useCatalog } from "@/context/CatalogContext";
import React from "react";

interface Props {}

const page = (props: Props) => {
  const { isEmpty, productsByType } = useCatalog();
  const products = productsByType("vozol-star");
  return (
    <div className="max-w-6xl w-full mx-auto px-2 py-10">
      <div className="pb-10">
        <BreadCrumb homeElement="d" />
      </div>
      <div>
        <div className="grid xs:mx-0 mx-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-4 w-full">
          {!isEmpty ? (
            products.map((el) => <ProductItem key={el.id} {...el} />)
          ) : (
            <div>Нет товаров</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
