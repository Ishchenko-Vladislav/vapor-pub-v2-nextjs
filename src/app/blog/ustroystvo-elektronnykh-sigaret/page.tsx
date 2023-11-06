import Image from "next/image";
import React from "react";

interface Props {}

const page = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col text-xl">
      <div className="w-full h-[calc(100vh-75px)]">
        <div className="w-screen h-screen fixed -z-10">
          <Image
            className="object-cover brightness-50 object-bottom"
            fill
            quality={100}
            src={"/blog-images/Pod_System_3.jpg"}
            alt="vidy-kalianov"
          />
        </div>
        <div className="pb-20 pt-52 text-center text-white max-w-6xl w-full mx-auto px-2">
          <h1 className="text-lg xs:text-5xl md:text-7xl font-bold mb-10">
            Устройство электронных сигарет
          </h1>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="text-center text-xl xs:text-2xl sm:text-3xl">
            <span>Из чего сделана ваша любимая одноразовая электронная сигарета?</span>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div className="pb-6 xs:pb-10 sm:pb-14">
            <p>
              Устройство одноразовой электронной сигареты. На самом деле идея одноразовой
              электронной сигареты{" "}
              <span className="underline">
                максимально близко подобралась к знакомым всем обычным сигаретам.
              </span>
              Одноразовые курительные устройства компактны, дёшевы, не требуют ухода, просты в
              использовании.
            </p>
          </div>
          <div>
            <p>
              Итак, мы погрузимся внутрь обычной одноразки. Прежде всего: корпус. Сейчас
              производители приходят к общему знаменателю. Все одноразки сейчас делаются с
              металлическим корпусом для защиты аккумулятора и бака жидкости от ударов и
              нежелательных повреждений. Однако, не так давно многие производители делали корпуса
              своих одноразовых электронных сигарет из дешёвого пластика. С одной стороны это не
              плохо, так как такой пластик получатся в ходе переработки пластиковых отходов, а с
              другой - не очень приятно осознавать, что на тебе так экономят. Решением этой сложной
              задачи стало, как ни странно, использование в устройстве электронных сигарет
              металлического корпуса. Таким образом получилось завоевать большее доверие у
              покупателей. К сожалению, не все производители придерживаются этой стратегии,
              некоторые продолжают использовать в своей продукции пластиковый корпус.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-full min-h-[200px] relative">
            <Image
              fill
              className="w-full object-contain"
              src={"/sborka_es.jpg"}
              alt="sborka"
            ></Image>
          </div>
          <div className="text-center ">
            <p className="pb-4 xs:pb-8 sm:pb-10 text-2xl xs:text-3xl sm:text-4xl">
              Устройство одноразки
            </p>
            <p className="text-base xs:text-lg sm:text-xl">
              Давайте поближе познакомимся с электронными девайсами
            </p>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div className="pb-6 xs:pb-10 sm:pb-14">
            <p>
              Но что скрывается под непроницаемой оболочкой? На самом деле, внутреннее строение у
              всех всех одноразовых электронных курительных устройств одинаковое. Отличия
              заключаются лишь в габаритных размерах девайса. Например: рассмотрим строение
              известного всем Joetech eGo (рисунок сверху). Мы имеем металлический корпус, внутри
              которого спрятаны:
            </p>
          </div>
          <ul className="list-decimal ml-5">
            <li>Светодиод, который показывает состояние заряда аккумулятора</li>
            <li>Батарея. от которой питается электроника девайса</li>
            <li>Датчик затяжки и микропроцессор</li>
            <li>Бак с жидкостью</li>
            <li>
              Атомайзер - непосредственно испаритель. Спирали, сетка - то, на чём испаряется
              жидкость.
            </li>
          </ul>
          <div className="pt-3 sm:pt-6">
            <span>
              Как мы видим - ничего супер сложного в устройстве нет. По такому же принципу устроены
              простенькие подики в роде Elf Bar RF350, Mate 500, UpOx, IORE.
            </span>
          </div>
        </div>
      </div>

      <div className="bg-black text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="relative w-full aspect-square">
            <Image
              fill
              className="object-contain w-full"
              src={"/stoenie-sourin-air-m.jpg"}
              alt="stoenie-sourin-air-m"
            />
          </div>
          <div className="text-center text-xl xs:text-2xl sm:text-3xl">
            <span>Устройство Pod - Mod систем.</span>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div className="pb-6 xs:pb-10 sm:pb-14">
            <p>
              Основным отличием такого рода девайсов от простых Pod`ов является наличие платы,
              которая регулирует все процессы, происходящие в системе. Начиная от контроля уровня
              заряда батареи, сопротивления на атомайзере, защиту от короткого замыкания, и
              заканчивая контролем уровня жидкости в баке.
            </p>
          </div>
          <div className="pb-6 xs:pb-10 sm:pb-16 font-bold text-base xs:text-lg sm:text-xl">
            <span>Картриджи таких Pod-систем бывают двух видов:</span>
          </div>
          <div className="flex flex-col gap-2 pb-6 xs:pb-10 sm:pb-16 ">
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 shrink-0 rounded-full bg-foreground text-background flex justify-center items-center ">
                1
              </div>
              <div>
                <span>С несменными испарителями. К таким относbтся Suorin Air Pro.</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 shrink-0 rounded-full bg-foreground text-background flex justify-center items-center ">
                2
              </div>
              <div>
                <span>Со сменными испарителями. Представителем является Suorin Air Mod</span>
              </div>
            </div>
          </div>
          <div>
            <span>
              Ещё одним отличием Pod-Mod`ов от простеньких "подиков" является наличие
              жидкокристаллического дисплея, на который выводится информация о текущей мощности,
              уровень заряда батареи, сопротивление на контактах.
            </span>
          </div>
          <div className="flex flex-col justify-center pb-10 sm:pb-16 pt-10 sm:pt-20 gap-8 xs:gap-14 sm:gap-20 items-center text-center">
            <div className="w-32 h-0.5 bg-foreground"></div>
            <div className="max-w-3xl text-xl xs:text-2xl sm:text-3xl">
              Спасибо за внимание. Вкусного и густого пара
            </div>
            <div className="w-32 h-0.5 bg-foreground"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
