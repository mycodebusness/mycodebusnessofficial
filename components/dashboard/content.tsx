"use client";
import { useState } from "react";
import { ArtworkSelector, Items } from "./dashboard";
import { User } from "@/lib/definitions";

export default function Content({ users }: { users: User }) {
  const [usersFilter, setUserFilter] = useState(users);
  const [active, setACtive] = useState(0);
  const handleActiveFilter = (value: string, index: number) => {
    setACtive(index);

    if (value == "Plus reccents") {
      const sortedData = users.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setUserFilter(sortedData);
    } else {
      const sortedData = users.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      setUserFilter(sortedData);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between px-3 mt-3">
        <h2 className="text-xl font-semibold">Tous les utilisateurs</h2>
        <ul className="inline-flex space-x-3 ">
          {["Plus reccents", "Plus anciens"].map((text, index) => (
            <ArtworkSelector
              handleActiveFilter={handleActiveFilter}
              key={text}
              text={text}
              index={index}
              active={active}
            />
          ))}
        </ul>
      </div>
      <Items users={usersFilter} />
    </>
  );
}
