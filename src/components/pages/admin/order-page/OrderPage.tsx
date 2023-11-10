"use client";
import { useGetAllOrder } from "@/hooks/order/useGetAllOrder";
import { FC } from "react";

interface Props {}

export const OrderPage: FC<Props> = () => {
  const { orders, isEmpty } = useGetAllOrder();
  return (
    <div>
      {isEmpty ? (
        <div>
          <h1>Нет заказов</h1>
        </div>
      ) : (
        <div>have</div>
      )}
    </div>
  );
};
