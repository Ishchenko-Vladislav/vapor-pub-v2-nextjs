import { FC } from "react";

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <div className="w-full border-t-2 border-border pt-5 bg-background px-2 pb-20 md:pb-5">
      <div className="max-w-6xl w-full mx-auto flex gap-5 text-xs flex-wrap">
        <div>&copy;2023</div>
        <div>Оплата и доставка</div>
        <div>Блог</div>
        <div>О нас</div>
        <div>Каталог</div>
      </div>
    </div>
  );
};
