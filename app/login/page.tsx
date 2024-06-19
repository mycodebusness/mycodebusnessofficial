import React from "react";
import Image from "next/image";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/togglemode";
import LoginForm from "@/components/forms/login-form";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="w-full relative min-h-screen flex justify-center items-center lg:grid  lg:grid-cols-2 ">
      <div className="absolute top-2 right-2 lg:left-2">
        <ModeToggle />
      </div>
      <LoginForm />
      <div className="hidden bg-muted lg:flex flex-col gap-4 justify-center items-center h-screen w-full overflow-hidden relative">
        <Image
          src="/mycodebusness logo.svg"
          width={100}
          height={100}
          alt="Logo MycodeBusness"
          className="object-cover rounded-full z-10"
        />
        <h1 className=" gap-4 z-10  text-3xl sm:text-xl  md:text-4xl font-bold text-center mb-8">
          Bienvenue sur{" "}
          <span className="inline-flex  text-4xl sm:text-5xl  md:text-6xl font-bold text-center mb-8">
            <span className="font-black text-yellow-500">My</span>
            <span className="font-black text-red-700">Code</span>
            <span className="font-black text-blue-700">Busness</span>
          </span>
        </h1>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.2}
          duration={3}
          repeatDelay={1}
          className={cn("h-screen w-full z-0")}
        />
      </div>
    </div>
  );
}
