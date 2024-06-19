"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  icon: JSX.Element;
  activelink: string;
};

export default function LinksLeft({ name, icon, activelink }: Props) {
  const pathname = usePathname();

  return (
    <li key={name} className="relative grow">
      {pathname == activelink ? (
        <div className="absolute -left-1 top-0 bg-blue-600 w-2 h-8 rounded-full max-md:hidden" />
      ) : null}
      <Link href={activelink} className="pl-4 flex items-center">
        {/* <span
              className={`w-8 h-8w-8 h-8 grid place-items-center mr-2 rounded-md ${
                pathname == activelink ? "bg-blue-600" : "bg-transparent"
              }`}
            >
              {icon}
            </span>
            <span
              className={`hidden ${pathname == activelink ? "font-bold" : ""}`}
            >
              {name}
            </span> */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span
                className={`w-8 h-8w-8 h-8 grid place-items-center mr-2 rounded-md ${
                  pathname == activelink ? "bg-blue-600" : "bg-transparent"
                }`}
              >
                {icon}
              </span>
            </TooltipTrigger>
            <TooltipContent side="right">{name}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </li>
  );
}
