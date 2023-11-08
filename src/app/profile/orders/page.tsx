import { SimpleHeader } from "@/components/simple/SimpleHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {}

const page = (props: Props) => {
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto px-2">
        <SimpleHeader title="История заказов" />
        {false ? (
          <div></div>
        ) : (
          <div>
            <div className="flex gap-10 md:flex-row flex-col-reverse justify-around items-center py-10">
              <div className="flex gap-3 md:mt-0 mt-20 flex-col max-w-md relative">
                <div className="absolute -top-16 xs:-top-24 left-0 -z-10">
                  <span className="text-7xl xs:text-8xl lg:text-9xl text-secondary">Пусто</span>
                </div>
                <div>
                  <span className="font-bold text-3xl">Вы еще не сделали не одного заказа</span>
                </div>
                <div>
                  <span>Предлагаем вам посетить наш каталог для выбора товаров</span>
                </div>
                <Button asChild>
                  <Link href={"/catalog"}>Каталог</Link>
                </Button>
              </div>
              <div className="relative max-w-md w-full aspect-square bg-secondary">
                {/* <Image
                  quality={100}
                  fill
                  sizes=""
                  src={"/no_order_image.jpg"}
                  alt="no order image"
                  className="mix-blend-color-burn"
                /> */}
                <img
                  className="mix-blend-darken"
                  src="/no_order_image.jpg"
                  alt="no_order_image.jpg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
