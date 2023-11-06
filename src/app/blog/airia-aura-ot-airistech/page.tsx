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
            src={"/blog-images/_-7.png"}
            alt="vidy-kalianov"
          />
        </div>
        <div className="pb-20 pt-52 text-center text-white max-w-6xl w-full mx-auto px-2">
          <h1 className="text-lg xs:text-5xl md:text-7xl font-bold mb-10">
            Airis Aura от Airistech
          </h1>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-sm xs:text-lg md:text-2xl">
              Привет, мир! Сегодня поговорим о том, откуда взялись Airis Aura и почему вам стоит
              обратить внимание на их продукцию?
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p>
              В последнее время всё больше людей стали обращаться к электронным курительным
              устройствам и заменять ими обычные сигареты. Это связано в первую очередь с
              популяризацией здорового образа жизни и желанием избавиться от вредной привычки.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-fit mx-auto mb-3 xs:mg-6 sm:mb-10">
            <span>Сперва</span>
          </div>
          <div className="w-fit mx-auto">
            <span className="text-center text-xl xs:text-2xl sm:text-3xl">
              Кто такие AirisTech?
            </span>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p>
              Airistech была основана в 2013 году в Шэньчжэне, городе высоких технологий. С момента
              своего основания Airistech занимается разработкой, производством и продажей
              электронных испарителей, вейпов и аксессуаров. За годы инноваций и развития Airistech
              стала настоящим пионером вейп-индустрии. Производственный центр Airistech расположен в
              Фуйонге, район Баоань, и занимает площадь более 15 000 м². Производственный центр был
              оборудован и управляется в соответствии со стандартом FDA, стандартной
              производственной средой GMP и системой управления качеством ISO9001, чтобы
              гарантировать высокое качество, надежную безопасность нашей продукции и предложить
              лучший опыт вейпинга для сообществ вейперов. До сих пор вся серия продуктов Airistech
              прошла тесты CE, Rohs, FCC.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-fit mx-auto mb-3 xs:mg-6 sm:mb-10">
            <span className="text-center text-xl xs:text-2xl sm:text-3xl">
              Что говорит о себе компания Airistech?
            </span>
          </div>
          <div className="w-fit mx-auto ">
            <span>Информация взята с официального сайта Airistech</span>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p>
              "Мы также придаем большое значение защите интеллектуальной собственности. Мы получили
              более 50 патентов на изобретения и дизайн, а наши товарные знаки зарегистрированы
              более чем в 20 странах. Сегодня продукты под брендом Airistech продаются более чем в
              20 странах и 60 регионах по всему миру и пользуются большой популярностью среди
              дистрибьюторов и вейперов из Северной Америки, Европы, Австралии, Южной Америки,
              Ближнего Востока и т. д. Чтобы получить больше доступа к нашим потребителей и поощрять
              лучшие решения, которые может предложить отрасль. Мы часто посещаем выставки по всему
              миру. Наше видение состоит в том, чтобы стать компанией-производителем вейп-брендов
              мирового класса, пользующейся наибольшим уважением и похвалой в отрасли. Мы никогда не
              перестанем к этому стремиться."
            </p>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10">
        <div className="max-w-4xl w-full mx-auto px-2">
          <div className="w-fit mx-auto mb-3 xs:mg-6 sm:mb-10">
            <span className="text-center text-xl xs:text-2xl sm:text-3xl">
              Почему Airis Aura так популярны на рынке?
            </span>
          </div>
          <div className="w-fit mx-auto text-center">
            <p>Причин здесь две:</p>
            <ul className="list-decimal ml-5">
              <li>
                Цена. Устройство совершенно не дорогое, картриджи продаются по 3 штуки и стоят как
                два картриджа JUUL.
              </li>
              <li>Простота использования. Картриджи очень просто сменить.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p>
              Когда-то давно люди курили самокрутки даже не думали, что придёт время, когда сигареты
              станут настолько легкодоступными и простыми. Вот в вейпинге всё так же. Всего два года
              назад все парили большие и громоздкие устройства, а сейчас все переходят на простые и
              удобные поды. Airis Aura как раз является представителем таких подов. Быстрая замена
              картриджа, мощная батарея, большой выбор вкусов - это всё про Аирис Аура. История у
              этой электронной сигареты не такая уж богатая. Устройство было спроектировано в 2019
              году, в Китае, а в начале 2020 поступило на рынки Европы и Америки. Под-система
              является прямым конкурентом таким гигантам как Juul, Flex и подобным им девайсам.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-transparent py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2 text-background text-center">
          <div className="mb-3 xs:mb-6 sm:mb-10">
            <span className="text-xl xs:text-2xl sm:text-4xl">
              ПРЕИМУЩЕСТВА ПОД-СИСТЕМ АИРИС АУРА
            </span>
          </div>
          <div>
            <span>
              Одним из главных преимуществ Airis Aura является его небольшая цена относительно
              конкурентов.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2 flex flex-col gap-4 xs:gap-6 sm:gap-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-foreground text-background flex justify-center items-center ">
              1
            </div>
            <span>Большой выбор вкусов</span>
          </div>
          <div className="flex items-center gap-2 self-center">
            <div className="w-7 h-7 rounded-full bg-foreground text-background flex justify-center items-center ">
              2
            </div>
            <span>Большой выбор вкусов</span>
          </div>
          <div className="flex items-center gap-2 self-end">
            <div className="w-7 h-7 rounded-full bg-foreground text-background flex justify-center items-center ">
              3
            </div>
            <span>Большой выбор вкусов</span>
          </div>
          <div className="flex flex-col self-center justify-center pb-10 sm:pb-16 pt-10 sm:pt-20 gap-8 xs:gap-14 sm:gap-20 items-center text-center">
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
