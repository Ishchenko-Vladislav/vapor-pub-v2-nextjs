import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {} from "firebase/auth";
import { LogoutButton } from "@/components/pages/profile/LogoutButton";
import { AdminHeader } from "@/components/pages/profile/AdminHeader";
interface Props {}

const page = (props: Props) => {
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto px-2">
        <div>
          <AdminHeader />
          <div>
            <div className="pb-5">
              <span>Ваш последний заказ</span>
            </div>
            <div className="w-full py-10 rounded-xl border-border shadow-md flex bg-secondary justify-around">
              <div>#223</div>
              <div>кол. 10</div>
              <div>цена: 210$</div>
              <div>статус: в ожидании отправки</div>
            </div>
            <div>
              <Button variant={"link"} asChild>
                <Link href="/profile/orders">Все заказы</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col xs:flex-row items-stretch justify-between gap-5 py-20">
            <div className="p-2 sm:p-3 md:p-5 bg-secondary rounded-xl shadow-md text-center max-w-xs w-full xs:mx-0 mx-auto">
              <div className="flex flex-col justify-center items-center h-full">
                <span>Количество завершенных заказов</span>
                <div className="mt-auto">
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="p-2 sm:p-3 md:p-5 bg-secondary rounded-xl shadow-md text-center max-w-xs w-full xs:mx-0 mx-auto">
              <div className="flex flex-col justify-center items-center h-full">
                <span>Количество купленных товаров</span>
                <div className="mt-auto">
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="p-2 sm:p-3 md:p-5 bg-secondary rounded-xl shadow-md text-center max-w-xs w-full xs:mx-0 mx-auto">
              <div className="flex flex-col justify-center items-center h-full">
                <span>Общая сумма всех заказов</span>
                <div className="mt-auto">
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-20">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;