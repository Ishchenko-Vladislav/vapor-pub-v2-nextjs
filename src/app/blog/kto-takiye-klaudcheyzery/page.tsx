import Image from "next/image";
import React from "react";

interface Props {}

const page = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col text-xl">
      <div className="w-full h-[calc(100vh-75px)]">
        <div className="w-screen h-screen fixed -z-10">
          <Image
            className="object-cover brightness-50"
            fill
            quality={100}
            src={"/blog-images/maxresdefault.jpg"}
            alt="vidy-kalianov"
          />
        </div>
        <div className="pb-20 pt-52 text-center text-white max-w-6xl w-full mx-auto px-2">
          <h1 className="text-lg xs:text-5xl md:text-7xl font-bold mb-10">
            Кто такие клаудчейзеры?
          </h1>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-sm xs:text-lg md:text-2xl">
              По мере того, как вейпинг обретал свою популярность и мощь в эквиваленте предельных
              ватт и наименьших просадок, в США образовалось движение интузиастов в вейпинге,
              которые прозвали себя охотниками за паром (cloudchasers).
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p>
              Основной деятельностью клаудчейзеров являются соревнования, которые призваны
              определить наиболее умелого, техничного и выносливого участника, а по сути - кто
              выдует большее облако пара. На деле это ещё и и некий психологический самоктроль,
              проверка выдержки и силы воли.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-fit mx-auto">
            <span className="text-center text-xl xs:text-2xl sm:text-3xl">Cloud Competition</span>
          </div>
        </div>
      </div>
      <div className="bg-background text-foreground w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full">
          <span>
            Соревнования по самому объмному облаку пара, выдыхваемому из лёгких. В этом соревновании
            два игрока встают друг к другу спиной, и выдают всё на что способны их лёгкие. На их
            фоне находится баннер-линейка, а из каждой пары участников выходит только один
            победитель. Как правило компетентные судьи единогласны в своих решениях, но если у
            кого-то закрались сомнения - участников просят повторить попытку. Часто такое случается
            из-за ассинхронности в выдохах. Призовые фонды в этой дисциплине, как правило, самые
            большие, но условия и конкуренция тоже достаточно серъёзная. К примеру, есть ограничения
            по сопротивлению намотки, а жидкость строго унифицирована и предоставляется
            производителем исключительно под данный ивент. Также Cloud Competition, при возможности
            , разделяют на подвиды чтобы раззнообразить мероприятие...
          </span>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-fit mx-auto">
            <span className="text-center text-xl xs:text-2xl sm:text-3xl">Classic</span>
          </div>
        </div>
      </div>
      <div className="bg-background text-foreground w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full">
          <span>
            Только механические моды с 1м аккумулятором 18650 и дрипкой (RDA) не ниже 0.1 Ом.
            Намотка девайсов, как правило, происходит перед самим соревнованием. Самый
            распространённый и строгий подвид Cloud Competition.
          </span>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-fit mx-auto">
            <span className="text-center text-xl xs:text-2xl sm:text-3xl">No limits</span>
          </div>
        </div>
      </div>
      <div className="bg-background text-foreground w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full">
          <span>
            Здесь нет каких-либо правил касательно девайса и сопротивления, как собственно и по
            поводу вида испарителя. Все правила в этом соревновании ограничиваются лишь объёмом
            Ваших легких. Так что если вы любитель механического бокса с последовательным
            подключением, или используете плату на 120-150 ватт - это созтязание для Вас.
          </span>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-fit mx-auto">
            <span className="text-center text-xl xs:text-2xl sm:text-3xl">Womans Comp</span>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p className="pb-3 xs:pb-6 sm:pb-10">
              Принадлежность к перкрасному полу является главным правилом в данном соревнования. Как
              правило, сие событие сопровождается лёгкой ухмылкой судей и нескрываемым удовольствием
              со стороны посетителей. На девайсы участниц не накладываются какие-либо ограничения,
              но судьи следят чтобы они были в рамках здоровой конкуренции.
            </p>
          </div>
          <div className="flex flex-col justify-center pb-10 sm:pb-16 pt-10 sm:pt-20 gap-8 xs:gap-14 sm:gap-20 items-center text-center">
            <div className="w-32 h-0.5 bg-foreground"></div>
            <div className="max-w-3xl text-xl xs:text-2xl sm:text-3xl">Парь в кайф с VaporPub</div>
            <div className="w-32 h-0.5 bg-foreground"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
