"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePromo } from "@/hooks/promo/usePromo";
import { TPromo } from "@/lib/schema";
import { FC, useState } from "react";

interface Props {}

export const PromoPage: FC<Props> = () => {
  const { promo, isEmpty, addPromo, deletePromo } = usePromo();
  const [promoFields, setPromoFields] = useState<TPromo>({
    discount: 0,
    name: "",
  });
  return (
    <div className="max-w-6xl w-ful mx-auto px-2 pb-20">
      <div className="pb-10 flex flex-col gap-8">
        <div>
          <label htmlFor="">Промо текст</label>
          <Input
            onChange={({ target }) => setPromoFields((prev) => ({ ...prev, name: target.value }))}
            value={promoFields.name}
            className="max-w-sm w-full"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Скидка в процентах</label>
          <Input
            onChange={({ target }) =>
              setPromoFields((prev) => ({ ...prev, discount: target.value }))
            }
            value={promoFields.discount}
            className="max-w-sm w-full"
            type="number"
          />
        </div>
        <div>
          <Button onClick={() => addPromo(promoFields)}>Добавить промокод</Button>
        </div>
      </div>
      <div>
        {isEmpty ? (
          <div>Промокода не существует</div>
        ) : (
          <div className="flex flex-col gap-5">
            {promo.map((el) => (
              <div key={el.id} className="flex gap-5">
                <div className="p-2 border">{el.promo.name}</div>
                <div className="p-2 border">{el.promo.discount}</div>
                <Button onClick={() => deletePromo(el.id)} variant={"destructive"}>
                  Удалить
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
