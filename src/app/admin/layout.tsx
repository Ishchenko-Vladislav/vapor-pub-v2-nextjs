import { AdminLayout } from "@/components/pages/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

interface Props {}

const layout = (props: PropsWithChildren<Props>) => {
  return (
    <div>
      <AdminLayout>{props.children}</AdminLayout>
    </div>
  );
};

export default layout;
