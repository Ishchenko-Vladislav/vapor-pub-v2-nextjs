import Image from "next/image";
import Link from "next/link";
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
            src={"/blog-images/Elf-Bar-1500-Disposa.jpg"}
            alt="vidy-kalianov"
          />
        </div>
        <div className="pb-20 pt-52 text-center text-white max-w-6xl w-full mx-auto">
          <h1 className="text-lg xs:text-5xl md:text-7xl font-bold mb-10">
            Цикл статей "Что вреднее?"
          </h1>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-sm xs:text-lg md:text-2xl mb-4">
              Рад приветсвовать тебя, дорогой читатель, в очередной статье из цикла "Что вреднее?"
              где мы сравниваем несравнимое и выясняем невыяснимое.
            </h3>
            <h4>Темой первой статьи будет: "Что вреднее - HQD или сигареты?"</h4>
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p>
              Согласно исследованиям, проведённым в 2017 году в США институтом здравоохранения,
              электронные сигареты, представителями которых являются HQD, действительно на 90%
              безопаснее обычных табачных сигарет. Однако, я хочу погрузиться в тему с головой,
              найти все подводные камни и ответить на главный вопрос - что же вреднее?
            </p>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl w-full mx-auto px-2 text-center">
          <div className="pb-3 xs:pb-6 sm:pb-10">
            <span>Для начала</span>
          </div>
          <div className="text-xl xs:text-2xl sm:text-3xl font-semibold">
            Для кого эта статья и кому она будет интересна?
          </div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p className="pb-3 xs:pb-6 sm:pb-10">
              Людям, которые хотят перейти на электронки и отказаться от обычных сигарет. Стоит ли
              оно того и правда ли электронные курительные устройства безопаснее дымного табака для
              организма человека?
            </p>
            <p>
              Да, действительно, в электронках используется органический никотин, очищенный от
              примесей и смол. Так же, в них нет продуктов сгорания органических соединений,
              которые, как мы знаем из курса химии, представляет собой углекислый газ, концерогены и
              водяной пар. В жидкости для электронных сигарет используется пропилен гликоль,
              глицерин в пропорции 1:1.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl w-full mx-auto px-2 text-center">
          <div className="pb-3 xs:pb-6 sm:pb-10">
            <span>Его величество</span>
          </div>
          <div className="text-xl xs:text-2xl sm:text-3xl font-semibold">Пропилегликоль</div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p className="pb-3 xs:pb-6 sm:pb-10">
              Пропиленгликоль, в узких кругах - 1,2-пропандиол - органическое соединение с формулой
              C3H8O2. При обычных условиях без цвета, запаха, прозрачная, вязкая со слабым
              сладковатым вкусом, гигроскопическая.
            </p>
            <p>Применение:</p>
            <p>
              Аерозоли водных растворов пропиленгликоля имеют бактерецидные свойства, поэтому
              пропиленгликоль применяется для очистки воздуха, служит составляющим компонентом для
              приготовления некоторых лечебных препаратов, в частности - эфир пропиленгликоля и
              сульфаметилфенилкарбаминовой кислоты. Входит в состав препаратов для заживления ран
              после ожогов, действия химических веществ. Имеет болеутоляющий, успокаивающий и
              противовоспалительный эффект. Так же используется в жидкостях для парения, где
              смешивается в соотношении 1:1 с росительным глицерином.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl w-full mx-auto px-2 text-center">
          <div className="pb-3 xs:pb-6 sm:pb-10">
            <span>Его святейшество</span>
          </div>
          <div className="text-xl xs:text-2xl sm:text-3xl font-semibold">Глицерин</div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p className="pb-3 xs:pb-6 sm:pb-10">
              Бесцветная вязкая жидкость без запаха. Органическое соединение, простейший
              представитель трёхатомных спиртов с формулой C3H5(OH)3. Нетоксичен.
            </p>
            <p>
              Глицерин используется в глюконеогенезе (процесс образования глюкозы в печени).
              Содержание глицерина в сыворотке крови человека отражает концентрацию триглицеридов и
              сумму насыщенных жирных кислот, моно жирных кислот и ненасыщенных жирных кислот,
              которые структурированы в составе{" "}
              <Link
                className="text-orange-500"
                href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BF%D0%BE%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%B8%D0%BD%D1%8B_%D0%BE%D1%87%D0%B5%D0%BD%D1%8C_%D0%BD%D0%B8%D0%B7%D0%BA%D0%BE%D0%B9_%D0%BF%D0%BB%D0%BE%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B8"
                rel="noopener noreferrer"
                target="_blank"
              >
                липопротеинов очень низкой плотности
              </Link>{" "}
              (ЛПОНП). Уровень глицерина характеризует нарушение поглощения клетками моно- и
              насыщенных жирных кислот в составе ЛПОНП. Высокий уровень глицерина в плазме крови и в
              ЛПОНП прогностически более неблагоприятный фактор риска, чем повышение уровня{" "}
              <Link
                className="text-orange-500"
                href="https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D0%BB%D0%B5%D1%81%D1%82%D0%B5%D1%80%D0%B8%D0%BD"
                rel="noopener noreferrer"
                target="_blank"
              >
                холестерина
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="bg-foreground text-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl w-full mx-auto px-2 text-center">
          <div className="text-xl xs:text-2xl sm:text-3xl font-semibold">Итоги.</div>
        </div>
      </div>
      <div className="bg-background w-full py-6 text-sm xs:text-base md:text-lg xs:py-10 sm:py-20">
        <div className="max-w-4xl mx-auto w-full px-2">
          <div>
            <p className="pb-3 xs:pb-6 sm:pb-10">
              Как вы можете видеть, в составе жидкостей для парения используются лекарственные
              вещества, которые нетоксичны для организма человека. Конечно, если у вас аллергия на
              конткретно эти компонены - для вас праение под запретом. Однако, для обычного человека
              переход на электронные сигареты будет большим облегчением. В связи с чем, с полной
              ответсвенностью могу вам заявить: обычные сигареты намного вреднее HQD.
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
