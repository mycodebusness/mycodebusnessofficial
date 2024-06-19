"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import React, { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamMultiple({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg mx-auto bg-background",
        className
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user className="text-black" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16">
            <Icons.openai className="h-6 w-6" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.googleDrive className="h-6 w-6" />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.googleDocs className="h-6 w-6" />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.whatsapp className="h-6 w-6" />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.messenger className="h-6 w-6" />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.notion className="h-6 w-6" />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  openai: (props: IconProps) => (
    <svg
      enable-background="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m79.098 254.454h-14c0-28.365 3.564-54.231 10.307-74.802 7.534-22.984 18.618-38.782 32.946-46.954 21.216-12.102 43.911-3.853 59.213 5.197 5.16 3.051 8.223 2.576 10.08 1.951 10.565-3.556 20.046-26.799 29.215-49.277 14.515-35.585 30.967-75.918 64.396-82.662 24.648-4.969 53.613 9.605 88.564 44.556l-9.9 9.899c-30.942-30.943-56.468-44.65-75.896-40.732-26.069 5.259-41.015 41.899-54.201 74.226-11.307 27.718-21.071 51.656-37.712 57.257-6.898 2.323-14.19 1.256-21.672-3.169-17.613-10.417-32.803-12.128-45.15-5.086-22.324 12.733-36.19 54.727-36.19 109.596z"
        fill="#819096"
      />
      <path
        d="m84.916 293.948h-25.637c-6.767 0-12.253-5.486-12.253-12.253v-25.637c0-6.767 5.486-12.253 12.253-12.253h25.637c6.767 0 12.253 5.486 12.253 12.253v25.637c0 6.767-5.485 12.253-12.253 12.253z"
        fill="#adb8bc"
      />
      <path
        d="m444.836 507.858h-420.459c-12.357 0-22.375-10.018-22.375-22.375v-191.045c0-12.357 10.018-22.375 22.375-22.375h420.46c12.357 0 22.375 10.018 22.375 22.375v191.046c-.001 12.356-10.019 22.374-22.376 22.374z"
        fill="#c5cfd1"
      />
      <path
        d="m351.971 444.517v25.135c0 4.028-3.265 7.293-7.293 7.293h-220.291c-4.028 0-7.293-3.265-7.293-7.293v-25.135c0-4.028 3.265-7.293 7.293-7.293h220.292c4.027 0 7.292 3.266 7.292 7.293zm-267.306-72.149h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c0-4.028-3.265-7.293-7.293-7.293zm65.004 0h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c-.001-4.028-3.266-7.293-7.293-7.293zm65.003 0h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c0-4.028-3.265-7.293-7.293-7.293zm65.003 0h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c0-4.028-3.265-7.293-7.293-7.293zm65.004 0h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c-.001-4.028-3.266-7.293-7.293-7.293zm65.003 0h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c0-4.028-3.265-7.293-7.293-7.293zm-325.017-63.31h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c0-4.028-3.265-7.293-7.293-7.293zm65.004 0h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c-.001-4.028-3.266-7.293-7.293-7.293zm65.003 0h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c0-4.028-3.265-7.293-7.293-7.293zm65.003 0h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c0-4.028-3.265-7.293-7.293-7.293zm65.004 0h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c-.001-4.028-3.266-7.293-7.293-7.293zm65.003 0h-25.135c-4.028 0-7.293 3.265-7.293 7.293v25.135c0 4.028 3.265 7.293 7.293 7.293h25.135c4.028 0 7.293-3.265 7.293-7.293v-25.135c0-4.028-3.265-7.293-7.293-7.293z"
        fill="#597b91"
      />
      <path
        d="m459.543 64.167c61.513 61.513 55.816 99.656 28.775 126.696s-66.205 31.716-126.696-28.775c-33.972-33.973-39.592-83.434-12.552-110.474s76.501-21.42 110.473 12.553z"
        fill="#adb8bc"
      />
      <path
        d="m452.924 58.067c-4.797 10.986-15.62 30.356-38.967 54.19l-62.765-62.766-4.244 4.245 62.757 62.758c-19.084 18.685-35.212 29.194-45.519 34.744-3.284 1.769-6.178 3.147-8.663 4.23 1.571 1.85 3.235 3.656 4.959 5.432 12.31-5.68 32.226-17.526 56.287-41.588 24.061-24.061 35.908-43.977 41.587-56.287-1.775-1.722-3.581-3.387-5.432-4.958z"
        fill="#819096"
      />
      <path
        d="m398.159 98.273-2.431 2.431c-4.458 4.458-11.686 4.458-16.144 0l-17.368-17.368c-4.458-4.458-4.458-11.686 0-16.144l2.431-2.431c4.458-4.458 11.686-4.458 16.144 0l17.368 17.368c4.458 4.457 4.458 11.685 0 16.144z"
        fill="#1c4c5a"
      />
    </svg>
  ),
  user: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-user"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  googleDrive: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 132 132">
      <linearGradient
        id="A"
        x1="98"
        x2="108"
        y1="112"
        y2="112"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#16529c" />
        <stop offset="1" stop-color="#236ac0" />
      </linearGradient>
      <linearGradient
        id="B"
        x1="58"
        x2="14"
        y1="120"
        y2="120"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#2166bb" />
        <stop offset="1" stop-color="#89eda9" />
      </linearGradient>
      <filter id="C" width="100%" height="100%" x="0%" y="0%">
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
      </filter>
      <mask id="D">
        <g filter="url(#C)">
          <path fill-opacity=".5" d="M0 0h128v128H0z" />
        </g>
      </mask>
      <clipPath id="E">
        <path d="M0 0h192v152H0z" />
      </clipPath>
      <mask id="F">
        <g filter="url(#C)">
          <path fill-opacity=".5" d="M0 0h128v128H0z" />
        </g>
      </mask>
      <clipPath id="G">
        <path d="M0 0h192v152H0z" />
      </clipPath>
      <mask id="H">
        <g filter="url(#C)">
          <path fill-opacity=".5" d="M0 0h128v128H0z" />
        </g>
      </mask>
      <clipPath id="I">
        <path d="M0 0h192v152H0z" />
      </clipPath>
      <path fill="url(#A)" d="M64 5a60 60 0 110 120A60 60 0 0164 5zm0 0" />
      <path fill="url(#B)" d="M64 5a60 60 0 000 120zm0 0" />
      <path fill="#40a1c8" d="M124 63A60 60 0 114 63a60 60 0 01120 0zm0 0" />
      <path
        fill="#49bbb0"
        d="M28 64a96 96 0 007.8 38.3 37 37 0 00-9.8 7.1A60 60 0 014 64zm0 0"
      />
      <path
        fill="#378bde"
        d="M64 96v27c-4.5 0-9-.5-13.4-1.5a46.7 46.7 0 01-14.8-19.3A63 63 0 0164 96zm0 0"
      />
      <path
        fill="#266ec6"
        d="M100 64a96 96 0 01-7.8 38.3 37 37 0 019.8 7.1A60 60 0 00124 64zm0 0"
      />
      <path
        fill="#378bde"
        d="M64 64v59c4.5 0 9-.5 13.4-1.5C90.8 112 99.8 89.4 100 64zm0 0"
      />
      <path
        fill="#266ec6"
        d="M64 96v27c4.5 0 9-.5 13.4-1.5 5.8-4 10.9-10.7 14.8-19.3A63 63 0 0064 96zm0 0"
      />
      <path
        fill="#1e62b5"
        d="M92.2 102.3c-4 8.5-9 15.1-14.8 19.2a60 60 0 0024.6-12 35 35 0 00-9.8-7.2zm0 0"
      />
      <path fill="#53d795" d="M64 3A60 60 0 004 64h60zm0 0" />
      <path
        fill="#72e99a"
        d="M50.6 4.5a60 60 0 00-24.6 12 35 35 0 009.8 7.2c4-8.5 9-15.1 14.8-19.2zm0 0"
      />
      <path
        fill="#49bbb0"
        d="M64 3c-4.5 0-9 .5-13.4 1.5C37 14.1 28 37.2 28 63v1h36zm0 0"
      />
      <path
        fill="#53d795"
        d="M64 3c-4.5 0-9 .5-13.4 1.5a46.8 46.8 0 00-14.8 19.3A63 63 0 0064 30zm0 0"
      />
      <path fill="#378bde" d="M64 3a60 60 0 0160 61H64zm0 0" />
      <g fill="#40a1c8">
        <path d="M77.4 4.5a60 60 0 0124.6 12 35 35 0 01-9.8 7.2c-4-8.5-9-15.1-14.8-19.2zm0 0" />
        <path d="M64 3c4.5 0 9 .5 13.4 1.5C91 14.1 100 37.2 100 63v1H64zm0 0" />
      </g>
      <path
        fill="#49bbb0"
        d="M64 3c4.5 0 9 .5 13.4 1.5 5.8 4 10.9 10.7 14.8 19.2-8 4-18 6.3-28.2 6.3zm0 0"
      />
      <g transform="translate(-8 -16)">
        <g clip-path="url(#E)" mask="url(#D)">
          <path fill="#2e3436" d="M169.5 24v1h13v-1zm0 0" />
        </g>
        <g clip-path="url(#G)" mask="url(#F)">
          <path fill="#2e3436" d="M169.5 21v1h13v-1zm0 0" />
        </g>
        <g clip-path="url(#I)" mask="url(#H)">
          <path fill="#2e3436" d="M169.5 27v1h13v-1zm0 0" />
        </g>
      </g>
    </svg>
  ),
  googleDocs: (props: IconProps) => (
    <svg
      height="24"
      viewBox="0 0 24 24"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m8.5 3c-.82842712 0-1.5.67157288-1.5 1.5v15c0 .8284271.67157288 1.5 1.5 1.5h7.0113578c.8284271 0 1.5-.6715729 1.5-1.5v-15c0-.82842712-.6715729-1.5-1.5-1.5h-.0113581c-.2761421 0-.4999997.22385763-.4999997.5 0 .82842712-.6715729 1.5-1.5 1.5h-3c-.82842712 0-1.5-.67157288-1.5-1.5 0-.27614237-.22385763-.5-.5-.5zm1.41464715 0c.05527574.15638946.08535285.32468229.08535285.5 0 .27614237.2238576.5.5.5h3c.2761424 0 .5-.22385763.5-.5 0-.17531771.0300771-.34361054.0853529-.5zm-3.91464715 1.5c0-1.38071187 1.11928813-2.5 2.5-2.5h7.0113578c1.3807118 0 2.5 1.11928813 2.5 2.5v15c0 1.3807119-1.1192882 2.5-2.5 2.5h-7.0113578c-1.38071187 0-2.5-1.1192881-2.5-2.5z" />
    </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg
      height="32"
      viewBox="0 0 34 32"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m8.4 4.267h-6.4c-1.179 0-2.133.956-2.133 2.133v23.467c0 1.179.954 2.133 2.133 2.133h6.4c1.179 0 2.133-.954 2.133-2.133v-23.467c0-1.177-.954-2.133-2.133-2.133zm-5.333 21.333c-.59 0-1.067-.477-1.067-1.067s.477-1.067 1.067-1.067 1.067.477 1.067 1.067-.477 1.067-1.067 1.067zm5.333-12.8h-6.4v-2.133h6.4zm0-4.267h-6.4v-2.133h6.4zm13.867 19.2v-2.133h-6.4v2.133c-1.179 0-2.133.954-2.133 2.133h10.667c0-1.179-.954-2.133-2.133-2.133zm9.6-27.733h-25.6c-1.179 0-2.133.956-2.133 2.133h27.733v17.067h-19.2v4.267h19.2c1.179 0 2.133-.954 2.133-2.133v-19.2c0-1.177-.954-2.133-2.133-2.133zm-12.8 22.4c-.59 0-1.067-.477-1.067-1.067s.477-1.067 1.067-1.067 1.067.477 1.067 1.067-.477 1.067-1.067 1.067z" />
    </svg>
  ),
  messenger: (props: IconProps) => (
    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m448 73.143v45.714c0 40.286-100.333 73.143-224 73.143s-224-32.857-224-73.143v-45.714c0-40.286 100.333-73.143 224-73.143s224 32.857 224 73.143zm0 102.857v102.857c0 40.286-100.333 73.143-224 73.143s-224-32.857-224-73.143v-102.857c48.125 33.143 136.208 48.572 224 48.572s175.874-15.429 224-48.572zm0 160v102.857c0 40.286-100.333 73.143-224 73.143s-224-32.857-224-73.143v-102.857c48.125 33.143 136.208 48.572 224 48.572s175.874-15.429 224-48.572z" />
    </svg>
  ),
  notion: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M15,17a1,1,0,1,0,1,1A1,1,0,0,0,15,17ZM9,17H6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9,0a1,1,0,1,0,1,1A1,1,0,0,0,18,17Zm-3-6a1,1,0,1,0,1,1A1,1,0,0,0,15,11ZM9,11H6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9-6a1,1,0,1,0,1,1A1,1,0,0,0,18,5Zm0,6a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm4-6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V7a3,3,0,0,0,.78,2A3,3,0,0,0,2,11v2a3,3,0,0,0,.78,2A3,3,0,0,0,2,17v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V17a3,3,0,0,0-.78-2A3,3,0,0,0,22,13V11a3,3,0,0,0-.78-2A3,3,0,0,0,22,7ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H5A1,1,0,0,1,4,7V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM15,5a1,1,0,1,0,1,1A1,1,0,0,0,15,5ZM9,5H6A1,1,0,0,0,6,7H9A1,1,0,0,0,9,5Z" />
    </svg>
  ),
};
