import { Slider } from "@/components/slider/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="max-w-5xl w-full  mx-auto py-5 overflow-hidden relative flex items-center px-2">
        <Slider />
      </div>
    </main>
  );
}
