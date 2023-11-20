"use client";
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
import { useOrder } from "@/hooks/order/useOrder";
import { Skeleton } from "@/components/ui/skeleton";
import dayjs from "dayjs";
import { Timestamp } from "firebase/firestore";
import { numberToEUR } from "@/lib/utils";
interface Props {
  params: { orderId: string };
}

const page: NextPage<Props> = ({ params }) => {
  const { exist, order } = useOrder(params.orderId);
  return (
    <div className="pb-20">
      <div className="max-w-6xl w-full mx-auto">
        <div>
          <SimpleHeader title="Информация о заказе" />
        </div>
        <div className="w-full px-2">
          <div className="py-2">
            <span className="text-2xl font-semibold">Заказ #{params.orderId}</span>
          </div>
          {order && exist === "exist" ? (
            <div className="w-full flex gap-5 items-start md:flex-row flex-col-reverse">
              <div className="border rounded-xl bg-background p-4 w-full">
                <div className="w-full flex items-center justify-between text-sm border-b pb-2">
                  <div>
                    <span>Описание</span>
                  </div>
                  <div>
                    {/* <span>jul 14, 2019 at 1:16 PM</span> */}
                    <span>
                      {dayjs((order.createdAt as Timestamp).seconds * 1000).format(
                        "MMM DD, YYYY [at] h:mm A"
                      )}
                    </span>
                  </div>
                </div>
                <div className="w-full py-3 border-b">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Заказано товаров:</span>
                      <span>{order.products.length}</span>
                    </div>
                    <div className="flex  items-center gap-2">
                      <span className="font-semibold">Итого:</span>
                      <span>{numberToEUR(order.totalPrice)}</span>
                    </div>
                    {order.promo.isActive ? (
                      <div>
                        <div className="flex flex-col gap-2">
                          <span className="font-semibold">Был использован промокод:</span>
                          <ul className="list-disc ml-5 max-w-sm w-fit">
                            <li className="grid grid-cols-2 gap-3">
                              <span>Промо:</span>
                              <span>{order.promo.name}</span>
                            </li>
                            <li className="grid grid-cols-2 gap-3">
                              <span>Скидка:</span>
                              <span>{order.promo.discount}</span>
                            </li>
                            <li className="grid grid-cols-2 gap-3">
                              <span>Цена без промокода:</span>
                              <span>{order.promo.priceWithoutPromo}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="py-5">
                  <div>
                    <span>Информация о товаре</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {order.products && order.products.length > 0
                      ? order.products.map((product) => (
                          <div className="flex p-2 w-full gap-2">
                            <div className="relative aspect-square w-14 xs:w-24 rounded-xl overflow-hidden shrink-0">
                              <Image fill src={(product.img && product.img.url) ?? ""} alt="dd" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <Button variant={"link"} asChild>
                                <Link href={`/catalog/${product.id}}`}>{product.title}</Link>
                              </Button>
                              <div className="flex items-center gap-1 xs:gap-3 px-4 text-sm text-muted-foreground">
                                <div>
                                  {product.discount ? (
                                    <div className="flex gap-1 xs:gap-2">
                                      <span className="line-through">
                                        {numberToEUR(product.price)}
                                      </span>
                                      <span className="text-red-500">
                                        {numberToEUR(product.discountPrice)}
                                      </span>
                                    </div>
                                  ) : (
                                    <div>
                                      <span>{numberToEUR(product.price)}</span>
                                    </div>
                                  )}
                                </div>
                                <div>x</div>
                                <div>{product.quantity}</div>
                                <div className="flex gap-2">
                                  <span>=</span>
                                  <span>{numberToEUR(product.totalPriceForProduct)}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-5"></div>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
              <div className="border rounded-xl bg-background p-4 w-full max-w-sm md:sticky relative mx-auto md:top-20">
                <div className="pb-2 border-b">
                  <div>
                    <span className="font-medium">Заказчик</span>
                  </div>
                </div>
                <div className="flex justify-center  flex-col py-5 gap-1 text-base font-medium border-b">
                  <div className="flex gap-5 items-center">
                    <HiOutlineUser />
                    <span>{order.userName}</span>
                  </div>
                  <div className="flex gap-5 items-center">
                    <IoMailOutline />
                    <span>{order.email}</span>
                  </div>
                  <div className="flex gap-5 items-center">
                    <LiaTelegram />
                    <span>{order.telegram}</span>
                  </div>
                  <div className="flex gap-5 items-center">
                    <LiaPhoneSolid />
                    <span>{order.phoneNumber}</span>
                  </div>
                </div>
                <div className="py-2 border-b">
                  <div className="pb-3">
                    <span className="font-medium">Доставки</span>
                  </div>
                  <div className="ml-3 text-base">
                    {order.delivery.shippingMethod === "HAND" ? (
                      <div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>Метод доставки:</div>
                          <div>Самовывоз</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>Страна:</div>
                          <div>{order.country}</div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>Страна:</div>
                          <div>
                            {order.delivery.shippingMethod === "COUNTRY"
                              ? "Доставка в другие страны"
                              : "Доставка PostNL"}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>Страна:</div>
                          <div>{order.country}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>Город:</div>
                          <div>{order.city}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>Улица:</div>
                          <div>{order.delivery.street}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>Дом:</div>
                          <div>{order.delivery.house}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>Квартира:</div>
                          <div>{order.delivery.apartment}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>Почтовый индекс:</div>
                          <div>{order.delivery.postcode}</div>
                        </div>
                      </div>
                    )}
                    {/* <div className="grid grid-cols-2 gap-2">
                      <div>Страна:</div>
                      <div>{order.delivery.shippingMethod}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>Страна:</div>
                      <div>{order.country}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>Город:</div>
                      <div>{order.city}</div>
                    </div> */}
                    {/* <div className="grid grid-cols-2 gap-2">
                      <div>Улица:</div>
                      <div>{order.delivery}</div>
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ) : exist === "not-exist" ? (
            <div>
              <span>Такого заказа не существует</span>
            </div>
          ) : (
            <div className="w-full flex gap-5 items-start h-96">
              <Skeleton className="border rounded-xl bg-background p-4 w-full h-full"></Skeleton>
              <Skeleton className="border rounded-xl bg-background p-4 w-full max-w-sm h-full"></Skeleton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
