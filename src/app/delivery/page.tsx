import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Props {}

const page = (props: Props) => {
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto px-2">
        <div className="pb-20">
          <div>
            <div className="py-5">
              <h1 className="text-lg xs:text-xl font-semibold">Способы оплаты:</h1>
            </div>
            <div className="">
              <ul className="list-disc flex flex-col gap-1 ml-5 xs:ml-8 sm:ml-10">
                <li>Возможность оплаты наличными только при самовывозе;</li>
                <li>При заказе с доставкой оплата исключительно банковским переводом;</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="py-5">
              <h1 className="text-lg xs:text-xl font-semibold">Способы доставки:</h1>
            </div>
            <div className="">
              <ul className="list-disc flex flex-col gap-1 ml-5 xs:ml-8 sm:ml-10">
                <li>
                  Самовывоз из городов Маастрихт(Нидерланды) и Киль (Германия). Подробную информацию
                  о самовывозе узнавайте у Администратора в телеграмм канале;
                </li>
                <li>Доставка PostNL (Доставка в течении 1-3 дней. Стоимость доставки 5 EUR.)</li>
                {/* <li>
                  Доставка PostNL* (Доставка в течении 1-3 дней. Стоимость доставки 7 EUR. Оплата за
                  заказ производиться картой**);
                </li> */}
                <li>
                  Доставка в другие страны (Время доставки от 2-5 дней в зависимости от страны
                  заказа. Стоимость доставки 8 EUR.)
                </li>
                {/* <li>
                  Доставка DPD*( Время доставки от 2-5 дней в зависимости от страны заказа.
                  Стоимость доставки 10 EUR.Оплата за заказ производиться картой** )
                </li> */}
              </ul>
            </div>
          </div>
          <div>
            <div className="py-5">
              <h1 className="text-lg xs:text-xl font-semibold">
                Доставка доступна в такие страны:
              </h1>
            </div>
            <div className="">
              <ul className="list-disc flex flex-col gap-1 ml-5 xs:ml-8 sm:ml-10 text-base">
                <li>
                  Бельгия, Франция, Германия, Люксембург (Доставка в эти страны бесплатная при
                  заказе от 150EUR.)
                </li>
                <li>Нидерланды (Доставка бесплатная при заказе от 100EUR.)</li>
              </ul>
            </div>
          </div>
          {/* <div>
            <div className="py-5">
              <h1 className="text-xl font-semibold">Бесплатная доставка</h1>
            </div>
            <div className="">
              <ul className="list-disc flex flex-col gap-1 ml-10">
                <li>Бельгию</li>
                <li>Францию</li>
                <li>Германию</li>
                <li>Люксембург</li>
              </ul>
            </div>
          </div> */}
          <div className="py-5">
            <div className="">
              <span className="text-base font-semibold">
                Что бы получить номер счета или карты на которую сделать перевод пишите
                администратору канала{" "}
                <Button className="p-0 w-fit h-fit inline-block" variant={"link"} asChild>
                  <Link
                    // className="text-primary hover:text-blue-400 underline"
                    target="_blank"
                    href="https://t.me/vaporpubpost"
                  >
                    @vaporpubpost
                  </Link>
                </Button>
                (Telegram) свой номер заказа.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
