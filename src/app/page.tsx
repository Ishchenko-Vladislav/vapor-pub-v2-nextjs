"use client";
import { ProductItem } from "@/components/product/ProductItem";
import { Slider } from "@/components/slider/Slider";
import { Button } from "@/components/ui/button";
import { useCatalog } from "@/context/CatalogContext";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { topSellers } = useCatalog();
  return (
    <main>
      <div className="max-w-5xl w-full  mx-auto py-5 overflow-hidden relative flex items-center px-2 flex-col gap-5">
        <Slider />

        <div className="bg-[#181818]  p-4 text-white font-semibold rounded-xl w-fit mx-auto max-w-4xl text-center">
          <div>
            Так же у нас действует акция, при заказе от 100 EUR доставка по нидерландам бесплатная
            (при заказе в другие страны от 180 EUR)
          </div>
        </div>

        <div className="w-full">
          {topSellers && topSellers.length > 0 ? (
            <div>
              <div className="flex flex-col w-full gap-5">
                <div className="flex justify-between gap-2 items-center w-full">
                  <div>Топ Продаж</div>
                  <div>
                    <Button variant={"link"} asChild>
                      <Link href={"/catalog"}>Перейти к каталогу</Link>
                    </Button>
                  </div>
                </div>
                <div className="grid xs:mx-0 mx-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-4 w-full">
                  {topSellers.map((el) => (
                    <ProductItem key={el.id} {...el} />
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
