import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const Blog: FC<Props> = () => {
  return (
    <div className="py-10">
      <div className="pb-20">
        <div className="text-center px-2">
          <div className="mb-4 text-2xl font-semibold">
            Блог: полезная информация из мира вейпинга
          </div>
          <div>
            В данном разделе мы подобрали специально для вас самые интересные и информативные
            статьи.
          </div>
          <div className="mt-2 font-medium">Все статьи взяты из других источников</div>
        </div>
      </div>
      <div className="max-w-6xl w-full mx-auto px-2">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-10">
          <Link href="/blog/vred-kalyanov" className="w-full flex flex-col gap-4">
            <div className="w-full aspect-video relative">
              <Image
                fill
                className="object-cover"
                src={"/blog-images/vidy-kalianov1597448.jpg"}
                alt="vidy-kalianov"
              />
            </div>
            <div className="font-bold text-xl">"Что вреднее?" Кальяны vs вейпы</div>
          </Link>
          <Link href="/blog/vred-odnorazok" className="w-full flex flex-col gap-4">
            <div className="w-full aspect-video relative">
              <Image
                fill
                src={"/blog-images/Elf-Bar-1500-Disposa.jpg"}
                alt="Elf-Bar-1500-Disposa"
                className="object-cover"
              />
            </div>
            <div className="font-bold text-xl">"Что вреднее?" HQD против сигарет</div>
            <div className="text-muted-foreground text-sm">
              Сегодня разберёмся в вопорсе, что же вреднее? HQD или сигареты? Стоит ли переходить на
              электронные сигареты вместо обычных.
            </div>
          </Link>
          <Link href="/blog/kto-takiye-klaudcheyzery" className="w-full flex flex-col gap-4">
            <div className="w-full aspect-video relative">
              <Image
                fill
                src={"/blog-images/maxresdefault.jpg"}
                alt="Elf-Bar-1500-Disposa"
                className="object-cover"
              />
            </div>
            <div className="font-bold text-xl">Вейпинговые соревания</div>
            <div className="text-muted-foreground text-sm">
              По мере того, как вейпинг обретал свою популярность и мощь в эквиваленте предельных
              ватт и наименьших просадок, в США образовалось движение интузиастов в вейпинге...
            </div>
          </Link>
          <Link href="/blog/airia-aura-ot-airistech" className="w-full flex flex-col gap-4">
            <div className="w-full aspect-video relative">
              <Image
                fill
                src={"/blog-images/_-7.png"}
                alt="Elf-Bar-1500-Disposa"
                className="object-cover"
              />
            </div>
            <div className="font-bold text-xl">Airis Aura от Airistech</div>
            <div className="text-muted-foreground text-sm">
              Привет, мир! Сегодня поговорим о том, откуда взялись Airis Aura и почему вам стоит
              обратить внимание на их продукцию?
            </div>
          </Link>
          <Link
            href="/blog/elektronnaya-sigareta-kak-podarok"
            className="w-full flex flex-col gap-4"
          >
            <div className="w-full aspect-video relative">
              <Image
                fill
                src={"/blog-images/_-5werq23rwefawegaer.png"}
                alt="Elf-Bar-1500-Disposa"
                className="object-cover"
              />
            </div>
            <div className="font-bold text-xl">Электронная сигарета как подарок на праздник</div>
            <div className="text-muted-foreground text-sm">
              В преддверии Нового года многие люди не могут придумать удачный подарок своим близким
              и родным. Интернет-магазин VaporPub поможет вам с выбором новогодних подарков.
            </div>
          </Link>
          <Link href="/blog/ustroystvo-elektronnykh-sigaret" className="w-full flex flex-col gap-4">
            <div className="w-full aspect-video relative">
              <Image
                fill
                src={"/blog-images/Pod_System_3.jpg"}
                alt="Elf-Bar-1500-Disposa"
                className="object-cover"
              />
            </div>
            <div className="font-bold text-xl">Устройство электронных сигарет</div>
            <div className="text-muted-foreground text-sm">
              На самом деле идея одноразовой электронной сигареты максимально близко подобралась к
              знакомым всем обычным сигаретам.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
