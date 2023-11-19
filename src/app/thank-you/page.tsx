"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Props {}

const page = (props: Props) => {
  const params = useSearchParams();
  const orderId = params.get("order");
  const [copied, setCopied] = useState<boolean>(false);
  const { totalPrice, cart, reset } = useCart();
  useEffect(() => {
    reset();

    return () => {};
  }, []);
  const copylink = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Успешно скопировано");
    } catch (error) {
      toast.error("Не удалось скопировать");
    }
  };
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }

    return () => {};
  }, [copied]);
  if (!orderId) return <div>Order not found</div>;
  return (
    <div>
      <div className="flex flex-col justify-between items-center max-w-6xl w-full mx-auto py-5 px-2">
        <div className="w-full flex flex-col justify-center gap-8">
          <div className="text-center">
            <span className="text-lg xs:text-2xl sm:text-3xl md:text-4xl font-semibold">
              Ваш заказ был размещен
            </span>
          </div>
          <div className="flex items-center flex-col xs:flex-row  gap-2 text-2xl">
            <span>Номер вашего заказа:</span>
            <span>#{orderId}</span>
          </div>
          <div>
            <Button onClick={() => copylink(orderId)}>Cкопировать</Button>
          </div>
          <div>
            <p>
              Скопируйте номер заказа и отправьте оператору в телеграм{" "}
              <a
                className="text-blue-600 hover:text-blue-400 underline"
                target="_blank"
                href="https://t.me/vaporpubpost"
              >
                @vaporpubpost
              </a>{" "}
              для дальнейших инструкций.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
