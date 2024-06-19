"use client";
import { Button } from "@/components/ui/button";
import { Confetti } from "@/components/magicui/confetti";
import Link from "next/link";

export const handleClick = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    Confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    Confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};
export function EnregistrerButton({ text }: { text: string }) {
  return (
    <Link href="/dashboard" className="relative justify-center  z-10">
      <Button className="px-14" variant="default" onClick={handleClick}>
        {text}
      </Button>
    </Link>
  );
}
// import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
// import { CheckIcon, ChevronRightIcon } from "lucide-react";

// export function AnimatedSubscribeButtonDemo({text}:) {
//   return (
//     <AnimatedSubscribeButton
//       brand="#ffbd7a"
//       subscribeStatus={false}
//       buttonTextColor="#000009"
//       initialText={
//         <span className="group inline-flex items-center">
//           Subscribe{" "}
//           <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </span>
//       }
//       changeText={
//         <span className="group inline-flex items-center">
//           <CheckIcon className="mr-2 h-4 w-4" />
//           {text}{" "}
//         </span>
//       }
//     />
//   );
// }
