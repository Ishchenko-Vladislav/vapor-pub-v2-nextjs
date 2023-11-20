"use client";
import { DataTable } from "@/components/order-table/OrderTable";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/Authorization";
import { useGetAllOrder } from "@/hooks/order/useGetAllOrder";
import { TOrderType } from "@/lib/schema";
import { formatCustomDate, numberToEUR } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { Timestamp } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { GoLinkExternal } from "react-icons/go";
interface Props {}

export const Orders: FC<Props> = () => {
  const { user } = useAuth();
  const { isEmpty, orders } = useGetAllOrder(user && user.uid);
  const columns: ColumnDef<TOrderType>[] = [
    {
      accessorKey: "id",
      header: "Номер заказа",
      cell: ({ row }) => (
        <Link
          href={`/profile/orders/${row.getValue("id")}`}
          className="underline flex items-center gap-1"
        >
          #{row.getValue("id")}
          <GoLinkExternal />
        </Link>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "totalPrice",
      header: "Сумма",
      cell: ({ row }) => <div className="">{numberToEUR(row.getValue("totalPrice"))}</div>,
    },
    {
      accessorKey: "createdAt",
      header: "Дата",
      cell: ({ row }) => {
        const seconds = (row.getValue("createdAt") as Timestamp).seconds;

        return <div className="">{dayjs(seconds * 1000).format("DD.MM.YYYY")}</div>;
      },
    },
    {
      accessorKey: "status",
      header: "Статус",
    },
  ];
  return (
    <div>
      {!isEmpty ? (
        <div>
          <DataTable columns={columns} data={orders} />
        </div>
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
              <Image quality={100} fill sizes="" src={"/no_order_image.jpg"} alt="no order image" />
              {/* <img
                  className="mix-blend-darken"
                  src="/no_order_image.jpg"
                  alt="no_order_image.jpg"
                /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
