"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

const GridBgAnimate = () => {
  return (
    <AnimatedGridPattern
      numSquares={30}
      maxOpacity={0.5}
      duration={3}
      repeatDelay={1}
      className="-z-10"
    />
  );
};

export default GridBgAnimate;
