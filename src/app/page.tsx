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
            При заказе от 100 EUR доставка по Нидерландам бесплатная (при заказе в другие страны от
            150 EUR)
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

        <div className="w-full flex flex-col gap-6 py-10">
          <div>Так же вы можете посетить наш блог для дополнительной информации</div>
          <div>
            <div className="flex gap-10 overflow-x-auto">
              <Link
                href="/blog/vred-kalyanov"
                className="w-full flex flex-col gap-4 xs:min-w-[auto] min-w-[80%] max-w-[80%]"
              >
                <div className="w-full aspect-video relative">
                  <Image
                    fill
                    className="object-cover"
                    src={"/blog-images/vidy-kalianov1597448.jpg"}
                    alt="vidy-kalianov"
                  />
                </div>
                <div className="font-bold text-xl">"Что вреднее?" Кальяны vs вейпы</div>
              </Link>
              <Link
                href="/blog/vred-odnorazok"
                className="w-full flex flex-col gap-4 xs:min-w-[auto] min-w-[80%] max-w-[80%]"
              >
                <div className="w-full aspect-video relative">
                  <Image
                    fill
                    src={"/blog-images/Elf-Bar-1500-Disposa.jpg"}
                    alt="Elf-Bar-1500-Disposa"
                    className="object-cover"
                  />
                </div>
                <div className="font-bold text-xl">"Что вреднее?" HQD против сигарет</div>
              </Link>
              <Link
                href="/blog/kto-takiye-klaudcheyzery"
                className="w-full flex flex-col gap-4 xs:min-w-[auto] min-w-[80%] max-w-[80%]"
              >
                <div className="w-full aspect-video relative">
                  <Image
                    fill
                    src={"/blog-images/maxresdefault.jpg"}
                    alt="Elf-Bar-1500-Disposa"
                    className="object-cover"
                  />
                </div>
                <div className="font-bold text-xl">Вейпинговые соревания</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
