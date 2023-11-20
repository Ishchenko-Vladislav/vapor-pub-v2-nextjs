import { OrderPage } from "@/components/pages/admin/order-page/OrderPage";
import { Button } from "@/components/ui/button";
import React from "react";

interface Props {}

const page = (props: Props) => {
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto pb-20">
        <OrderPage />
      </div>
    </div>
  );
};

export default page;
