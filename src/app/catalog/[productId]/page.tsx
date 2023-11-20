import { NextPage } from "next";
import React from "react";

interface Props {
  params: { productId: string };
}

const page: NextPage<Props> = ({ params }) => {
  return <div>page</div>;
};

export default page;
