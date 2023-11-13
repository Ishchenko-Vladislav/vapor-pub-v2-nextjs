"use client";
import { CartItem } from "@/components/layout/header/menu/desktop-menu/cart/cart-item/CartItem";
import { CheckoutItem } from "@/components/pages/checkout/CheckoutItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
// import { useCheckout } from "@/hooks/checkout/useCheckout";
import { orderSchema } from "@/lib/schema";
import { numberToEUR } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { CheckoutField, CheckoutForm } from "@/components/pages/checkout/CheckoutForm";
import { useCheckout } from "@/context/CheckoutContext";
interface Props {}

const page = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const [promoText, setPromoText] = useState("");
  const { cart, totalPrice } = useCart();

  // 2. Define a submit handler.

  const { checkValidPromo, isActivePromo, shippingPrice, promo, shippingName } = useCheckout();
  useEffect(() => {
    setMounted(true);

    return () => {};
  }, []);
  if (!mounted) return null;

  const promoHandler = () => {
    checkValidPromo(promoText);
  };

  return (
    <div>
      <div className="max-w-6xl w-full mx-auto px-2 py-10">
        <div className="flex gap-10 items-start">
          <div className="w-full">
            <div>
              <span>Оформление заказа</span>
            </div>
            <div>
              <CheckoutForm />
            </div>
          </div>
          <div className="w-full max-w-lg  p-5">
            <div className="pb-2 mb-2 border-b">
              <span>Товары:</span>
            </div>

            {!!cart.length ? (
              <div className="flex flex-col gap-3">
                {cart.map((el) => (
                  <CheckoutItem key={el.id} {...el} />
                ))}
              </div>
            ) : (
              <div>Нет выбранных товаров</div>
            )}
            <div className="w-full mt-5 rounded-xl bg-secondary p-4">
              {isActivePromo ? (
                <div className="flex flex-col">
                  <div>
                    <span>Промокод успешно активирован</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>Скидка:</div>
                    <div className="text-green-500">{promo && promo?.discount}%</div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <div>
                    <Input
                      value={promoText}
                      onChange={({ target }) => setPromoText(target.value)}
                      type="text"
                      placeholder="Введите промокод"
                    />
                  </div>
                  <div>
                    <Button onClick={promoHandler} disabled={!promoText.length} className="w-fit">
                      Использовать промокод
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 rounded-xl bg-secondary mt-5">
              <div className="flex flex-col">
                <div className="flex items-center justify-between border-b py-2">
                  <span>Сумма по товарам:</span>
                  <span>{numberToEUR(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between border-b py-2">
                  <span>Стоимость доставки:</span>
                  <span>{numberToEUR(shippingPrice)}</span>
                </div>
                <div className="flex items-center justify-between pt-2 text-lg">
                  <span>Итого:</span>
                  <span>{numberToEUR(5)}</span>
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
