import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Props {}

const page = (props: Props) => {
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto px-2">
        <div className="pb-20">
          <div>
            <div className="py-5">
              <h1 className="text-lg xs:text-xl font-semibold uppercase">
                Обслуживание и возвращение товара
              </h1>
            </div>
            <div className="flex flex-col gap-3 xs:gap-4 sm:gap-6">
              {/* <p>
                Обмену или возврату подлежит только новый товар, который не был в употреблении и нет
                следов использования: царапин, сколов, потертостей, других повреждений, защитные
                пленки не были удалены, программное обеспечение не претерпевало изменений и тому
                подобное. Обязательно должна быть сохранена целостностью упаковка товара и ее
                компоненты. Жидкости не подлежат возврату в любом случае.
              </p> */}
              <p>
                Гарантия, обмен и возврат действует только в случае, если клиент зарегистрирован в
                системе и за ним зафиксирована покупка.
              </p>
              <p>Обратная доставка товаров осуществляется за счет покупателя.</p>
            </div>
          </div>
          <div>
            <div className="py-5">
              <h1 className="text-lg xs:text-xl font-semibold">
                Гарантии не подлежат определенные товары:
              </h1>
            </div>
            <div className="">
              <ul className="list-disc flex flex-col gap-1 ml-5 xs:ml-8 sm:ml-10">
                <li>девайсы с внешним или механическим повреждением;</li>
                {/* <li>распакованный товар, где были сняты все защитные пленки.</li> */}
              </ul>
            </div>
          </div>

          <div>
            <div className="py-5">
              <h1 className="text-lg xs:text-xl font-semibold">Гарантии подлежит такой товар:</h1>
            </div>
            <div className="">
              <ul className="list-disc flex flex-col gap-1 ml-5 xs:ml-8 sm:ml-10">
                <li>На все товары гарантия 2 дня с момента получения клиентом;</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="py-5">
              <h1 className="text-lg xs:text-xl font-semibold">Условия для гарантийного обмена:</h1>
            </div>
            <div className="">
              <ul className="list-disc flex flex-col gap-1 ml-5 xs:ml-8 sm:ml-10">
                <li>
                  обмен и возврат возможно осуществить только в течение 2 дней с момента покупки
                  устройства;
                </li>
                <li>товар должен быть без внешних повреждений;</li>
                {/* <li>девайс должен быть без следов вскрытия;</li> */}
                <li>наличие полной комплектации и коробки.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="py-5">
              <h1 className="text-lg xs:text-xl font-semibold">
                Срок и условия гарантийного возврата в случае брака:
              </h1>
            </div>
            <div className="">
              <ul className="list-disc flex flex-col gap-1 ml-5 xs:ml-8 sm:ml-10">
                <li>товар нужно отправить в полной комплектации;</li>
                <li>
                  доставка осуществляется за счет компании VaporPub (если брака не будет обнаружено
                  - обратную доставку оплачивает покупатель);
                </li>
                <li>
                  при обнаружении брака будет осуществлена замена на аналогичное устройство или, по
                  желанию покупателя, возврат средств;
                </li>
                <li>диагностика девайса будет происходить до 3-х рабочих дней.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="py-5">
              <h1 className="text-lg xs:text-xl font-semibold">Важная информация:</h1>
            </div>
            <div className="">
              <ul className="list-disc flex flex-col gap-1 ml-5 xs:ml-8 sm:ml-10">
                <li>
                  Мы в праве отказать вам в замене если вы не записали видео-отчёт распаковки;
                </li>
                <li>
                  При покупке устройство работало, а через какое то время, по каким-то причинам
                  перестало работать (т.к. продукт является одноразовым);
                </li>
                <li>
                  Сделано это из за учащения случаев мошенничества, при которых были возвращены
                  старые устройства под видом новых;
                </li>
                <li>
                  Если вы получаете товар службой доставки, просим вас вскрывать устройство на
                  ВИДЕО;
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="py-5">
              <span className="text-lg xs:text-xl font-semibold">
                При возникновении проблем с определенным товаром свяжитесь с нами:
              </span>
            </div>
            <div>
              <div>
                <span>Телеграм оператор:</span>
                <Button variant={"link"} asChild>
                  <Link
                    // className="text-primary hover:text-blue-400 underline"
                    target="_blank"
                    href="https://t.me/vaporpubpost"
                  >
                    @vaporpubpost
                  </Link>
                </Button>
              </div>
              <div>
                <span>Телеграм канал:</span>

                <Button variant={"link"} asChild>
                  <Link target="_blank" href="https://t.me/vaporpub">
                    @vaporpub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
