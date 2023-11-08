import { SimpleHeader } from "@/components/simple/SimpleHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { LiaPhoneSolid, LiaTelegram } from "react-icons/lia";
import { LuUser } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";
interface Props {
  params: { orderId: string };
}

const page: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto">
        <div>
          <SimpleHeader title="Информация о заказе" />
        </div>
        <div className="w-full">
          <div className="py-2">
            <span className="text-2xl font-semibold">Order #{params.orderId}</span>
          </div>
          <div className="w-full flex gap-5 items-start">
            <div className="border rounded-xl bg-background p-4 w-full">
              <div className="w-full flex items-center justify-between text-sm border-b pb-2">
                <div>
                  <span>Описание</span>
                </div>
                <div>
                  <span>jul 14, 2019 at 1:16 PM</span>
                </div>
              </div>
              <div className="w-full py-3 border-b">
                <div className="flex justify-between">
                  <div className="flex flex-col items-center">
                    <span>Заказано товаров</span>
                    <span>5</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>Итого</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span>Информация о товаре</span>
                </div>
                <div className="">
                  <div className="flex p-2 w-full gap-2">
                    <div className="relative aspect-square w-24 rounded-xl overflow-hidden">
                      <Image fill src={"/c_01.webp"} alt="dd" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Button variant={"link"} asChild>
                        <Link href={"/"}>Vozol 10000 Strawberry Kiwi (Клубника-Киви)</Link>
                      </Button>
                      <div className="flex items-center gap-3 px-4 text-sm text-muted-foreground">
                        <div>24.00$</div>
                        <div>x</div>
                        <div>5</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-xl bg-background p-4 w-full max-w-sm">
              <div className="pb-2 border-b">
                <div>
                  <span className="font-medium">Заказчик</span>
                </div>
              </div>
              <div className="flex justify-center  flex-col py-5 gap-1 text-base font-medium border-b">
                <div className="flex gap-5 items-center">
                  <HiOutlineUser />
                  <span>David mudd</span>
                </div>
                <div className="flex gap-5 items-center">
                  <IoMailOutline />
                  <span>devid@gmail.com</span>
                </div>
                <div className="flex gap-5 items-center">
                  <LiaTelegram />
                  <span>@devid</span>
                </div>
                <div className="flex gap-5 items-center">
                  <LiaPhoneSolid />
                  <span>+3747126731</span>
                </div>
              </div>
              <div className="py-2 border-b">
                <div className="pb-3">
                  <span className="font-medium">Адрес доставки</span>
                </div>
                <div className="ml-3 text-base">
                  <div className="grid grid-cols-2 gap-2">
                    <div>Страна:</div>
                    <div>Netherlends</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>Город:</div>
                    <div>Netherlends</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>Улица:</div>
                    <div>Reshetylivska</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>Дом:</div>
                    <div>12 </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>Квартира:</div>
                    <div>12 </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>Почтовый индекс:</div>
                    <div>12345</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
