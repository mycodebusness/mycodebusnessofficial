import AvatarUser from "@/components/avatarUser";
import { EnregistrerButton } from "@/components/buttonregister";
import GridBgAnimate from "@/components/magicui/gridBgAnimate";
import TypingAnimation from "@/components/magicui/typing-animation";
import WordRotate from "@/components/magicui/word-rotate";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-screen flex flex-col gap-8 items-center p-2">
      <h1 className=" gap-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-8 z-10">
        Bienvenue sur{" "}
        <span className="inline-flex">
          <span className="font-black text-yellow-500">My</span>
          <span className="font-black text-red-700">Code</span>
          <span className="font-black text-blue-700">Busness</span>
        </span>
      </h1>

      <Image
        width={100}
        height={100}
        className="logo  z-10"
        alt="logo du site"
        src="/mycodebusness logo.svg"
      />

      <TypingAnimation
        duration={50}
        className=" text-xl text-center font-semibold tracking-tight first:mt-0  z-10"
        text="Ici,  vous allez apprendre par la pratique !!!"
      />
      <WordRotate
        className="scroll-m-20 text-xl font-semibold tracking-tight  z-10 text-blue-700"
        words={[
          "vous deviendrez :",
          "Un pro du clavier et de la souris !",
          "Un développeur Web, Mobile ou Desktop !",
          "Un admin de BD !",
          "Et enfin un informaticien accompli et le travail en équipe !",
        ]}
      />
      <EnregistrerButton text="Inscrivez-vous!" />
      <GridBgAnimate />
    </div>
  );
}
