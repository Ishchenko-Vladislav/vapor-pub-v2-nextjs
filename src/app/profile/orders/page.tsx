import { Orders } from "@/components/pages/profile/Orders";
import { SimpleHeader } from "@/components/simple/SimpleHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {}

const page = (props: Props) => {
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto px-2 pb-20">
        <SimpleHeader title="История заказов" />
        <Orders />
      </div>
    </div>
  );
};

export default page;
