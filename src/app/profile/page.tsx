"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {} from "firebase/auth";
import { LogoutButton } from "@/components/pages/profile/LogoutButton";
import { AdminHeader } from "@/components/pages/profile/AdminHeader";
import { useLastOrder } from "@/hooks/order/userLastOrder";
import { numberToEUR } from "@/lib/utils";
import { useAuth } from "@/context/Authorization";
import { GoLinkExternal } from "react-icons/go";

interface Props {}

const page = (props: Props) => {
  const { user } = useAuth();
  const { order } = useLastOrder(user && user.uid);
  return (
    <div className="flex flex-col flex-1">
      <div className="max-w-6xl w-full mx-auto px-2 flex flex-col flex-1">
        <div className="flex flex-col flex-1">
          <AdminHeader />
          <div>
            <div className="pb-5">
              <div className="flex justify-between items-center">
                <span>Ваш последний заказ</span>
                {/* {order && order.id ? (
                  <Button variant={"link"} asChild>
                    <Link href={`/profile/orders/${order.id}}`}>Болше</Link>
                  </Button>
                ) : null} */}
              </div>
            </div>

            {order ? (
              <div className="w-full overflow-x-auto flex">
                <div className="w-full py-2 xs:py-6 rounded-xl border-border shadow-md flex bg-secondary justify-around shrink-0 min-w-[600px] overflow-x-auto">
                  <div className="flex flex-col gap-2">
                    <div>
                      <span>Номер заказа</span>
                    </div>
                    <div>
                      <Link
                        className="flex items-center gap-1"
                        href={`/profile/orders/${order.id}`}
                      >
                        #<span className="underline"> {order?.id}</span>
                        <GoLinkExternal />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <span>Кол. Товаров</span>
                    </div>
                    <div>
                      <span>{order?.products.length}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <span>цена:</span>
                    </div>
                    <div>
                      <span>{numberToEUR(order?.totalPrice ?? 0)}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <span>статус: </span>
                    </div>
                    <div>
                      <span>{order?.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full bg-secondary p-3 text-center">
                На данный момент у вас нет заказов
              </div>
            )}

            <div>
              <Button variant={"link"} asChild>
                <Link href="/profile/orders">Все заказы</Link>
              </Button>
            </div>
          </div>
          {/* <div className="flex flex-col xs:flex-row items-stretch justify-between gap-5 py-20">
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
          </div> */}
          <div className="pb-20 mt-auto">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
