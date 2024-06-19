import { Logo } from "@/components/dashboard/navBarLeft";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  const IconLink = () => Logo[2].icon;

  return (
    <div className="p-4 mb-4">
      <div className="flex mb-4">
        <div className="w-12 h-12 inline-block">
          <IconLink />
        </div>
        <h1 className="text-2xl font-bold px-3 mt-3 inline-block">
          Challlenge
        </h1>
      </div>
    </div>
  );
}
