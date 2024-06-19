import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useInitialsAndColor from "@/lib/hooks/useInitialsAndColor";
import { cn } from "@/lib/utils";

type Props = {};

export default function AvatarUser({
  namedefault = "",
  src = "",
  className = "",
  ...props
}) {
  const { color, initials } = useInitialsAndColor(namedefault);

  return (
    <Avatar className={className} {...props}>
      <AvatarImage src={src} alt={`@${namedefault}`} />
      <AvatarFallback
        className="text-white"
        style={{
          backgroundColor: color,
        }}
      >
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
