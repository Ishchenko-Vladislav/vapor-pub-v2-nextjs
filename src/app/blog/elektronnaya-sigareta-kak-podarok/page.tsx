import Image from "next/image";
import React from "react";

interface Props {}

const page = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col text-xl">
      <div className="w-full h-[calc(100vh-75px)]">
        <div className="w-screen h-screen fixed -z-10">
          <Image
            className="object-cover brightness-25"
            fill
            quality={100}
            src={"/blog-images/_-5werq23rwefawegaer.png"}
            alt="vidy-kalianov"
          />
        </div>
        <div className="pb-20 pt-52 text-center text-white max-w-6xl w-full mx-auto px-2">
          <h1 className="text-lg xs:text-5xl md:text-6xl font-bold ">
            Электронная сигарета - как подарок на праздник.
          </h1>
          <div className="w-32 h-0.5 bg-white mx-auto my-10 "></div>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-sm xs:text-lg md:text-2xl">
              В преддверии Нового года многие люди не могут придумать удачный подарок своим близким
              и родным. Интернет-магазин VaporPub поможет вам с выбором новогодних подарков.
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p>
              Многим может показаться, что дарить сигареты - это плохая идея. Что ж, так и есть, в
              случае с обыкновенными сигаретами. Однако, мы говорим про электронные сигареты -
              устройство, призвание которого избавить человека от вредных привычек. В наше время
              электронные сигареты используют 30% всех людей в Украине, что говорит об их
              популярности. Следовательно - такой подарок будет мало того что полезным, так ещё и
              модным, современным.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-fit mx-auto mb-3 xs:mg-6 sm:mb-10">
            <span>﻿по порядку</span>
          </div>
          <div className="w-fit mx-auto">
            <span className="text-center text-xl xs:text-2xl sm:text-3xl">
              Как выбрать одноразовую электронную сигарету на подарок?
            </span>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2 flex flex-col gap-4 xs:gap-6 sm:gap-10">
          <div>
            <p>
              Для начала стоит понимать вкусы человека. За время своей работы я выделил для себя
              несколько типов предпочтений людей:
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 shrink-0 rounded-full bg-foreground text-background flex justify-center items-center ">
              1
            </div>
            <div>
              <span className="underline">Любители приторных</span>{" "}
              <span>
                сладких, очень насыщенных вкусов. Например: Elf Bar Neon Rain, BMOR Watermelon
                Bubble gum, Vaal - Lush Ice
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 shrink-0 rounded-full bg-foreground text-background flex justify-center items-center ">
              2
            </div>
            <div>
              <span className="underline">Почитатели менее ярких</span>{" "}
              <span>
                одиночных вкусов, как правило, с холодком. Например: Elf Bar Strawberry Ice, BMOR
                Guava Ice, Vaal Lush Ice
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 shrink-0 rounded-full bg-foreground text-background flex justify-center items-center ">
              3
            </div>
            <div>
              <span className="underline">Избиратели неординарных вкусов</span>{" "}
              <span>
                Например: Elf Bar Coffe Tobacco, BMOR Fantasy Jungle, Vaal Aloe Blackurrant
              </span>
            </div>
          </div>
          <div>
            <span>
              Важно понимать! У каждого человека свои предпочтения и Вам стоит обращать внимание на
              личные предпочтения каждого человека. Можете не сомневаться, если Вы точно попадёте с
              вкусом и человеку понравится - это подарит вам и одариваемому незабываемые эмоции.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-fit mx-auto mb-3 xs:mg-6 sm:mb-10">
            <span>поды и под-системы</span>
          </div>
          <div className="w-fit mx-auto ">
            <span className="text-center text-xl xs:text-2xl sm:text-3xl">
              Как выбрать под-систему?
            </span>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2 ">
          <div className="flex flex-col gap-4 xs:gap-6 sm:gap-10">
            <p>
              Хоть в наше время разнообразие электронных сигарет поражает воображение, я могу
              выделить несколько самых достойных представителей электронных под-систем:
            </p>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 shrink-0 rounded-full bg-foreground text-background flex justify-center items-center ">
                1
              </div>
              <div>
                <span>
                  Suorin Air Pro. Девайс отличается ёмкостью бака - 4(!) мл. Кроме того, что вы
                  можете залить в него треть баночки жижи, он так же не разрядится у вас за
                  считанные часы. Ёмкость батареи составляет 2000 mAh, чего достаточно для двух дней
                  полноценной работы. Так же электронная сигарета выполнена в стальном корпусе, что
                  гарантирует её сохранность.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 shrink-0 rounded-full bg-foreground text-background flex justify-center items-center ">
                2
              </div>
              <div>
                <span>
                  Suorin Air Mod. Данная электронка является смесью мод-системы и под-системы. На
                  этом устройстве вы можете парить как органическую, так и солевую жидкость, нужно
                  лишь сменить тип испарителей. Как и старшем брате, эта система отличается своей
                  батареей. А в довершение ко всему - девайс обладает возможностью регулировать
                  мощность и обдув!
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 shrink-0 rounded-full bg-foreground text-background flex justify-center items-center ">
                3
              </div>
              <div>
                <span>
                  Закрывает тройку лидером по моему мнению, самая простенькая, однако очень
                  практичная электронная курительная система - Elf Bar RF350. Отличительной чертой
                  этого устройства является его простота. Тут нет ничего лишнего - только батарея,
                  контакты и микросхема. В комплекте идёт картридж, который можно перезаправлять до
                  10 раз.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-fit mx-auto mb-3 xs:mg-6 sm:mb-10">
            <span>итак</span>
          </div>
          <div className="w-fit mx-auto ">
            <span className="text-center text-xl xs:text-2xl sm:text-3xl">
              Что же подарить "ему" на Новый год?
            </span>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2 flex flex-col gap-4 xs:gap-6 sm:gap-10">
          <div>
            <p>Кратко подведём итоги:</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 shrink-0 rounded-full bg-foreground text-background flex justify-center items-center ">
              1
            </div>
            <div>
              <span>
                Если тот, кому вы делаете подарок уже вейпер - лучшим выбором будет набор жидкостей,
                в купе с испарителями для его любимого девайса.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 shrink-0 rounded-full bg-foreground text-background flex justify-center items-center ">
              2
            </div>
            <div>
              <span>
                Но начинающему парильщику лучше подойдёт набор каких-нибудь вкусных одноразовых
                электронных сигарет типа Elf Bar, Vaal, BMor.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-fit mx-auto text-center">
            <span className="text-center text-xl xs:text-2xl sm:text-3xl">
              VaporPub поздравляет Вас с наступающим Новым Годом и Рождеством!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
