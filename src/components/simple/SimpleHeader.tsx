"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { BsArrowLeft } from "react-icons/bs";

interface Props {
  title: string;
}

export const SimpleHeader: FC<Props> = ({ title }) => {
  const { back } = useRouter();
  return (
    <div className="py-5 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <button
          onClick={back}
          className="p-2 rounded-full hover:bg-secondary transition-colors hover:text-primary"
        >
          <BsArrowLeft />
        </button>
        <span>Назад</span>
      </div>
      <div>
        <span className="font-semibold">{title}</span>
      </div>
      <div></div>
    </div>
  );
};
