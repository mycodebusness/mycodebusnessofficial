"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Users } from "@/lib/definitions";
import Compteur from "./compteur";
import { Button } from "../ui/button";
import AvatarUser from "../avatarUser";
import getInitialsAndColor from "@/lib/hooks/useInitialsAndColor";
export function SidebarRight({ users }: { users: Users }) {
  const pathname = usePathname();
  return (
    <div
      className={`${
        pathname == "/dashboard" ? "" : "hidden"
      } p-3 md:w-72 shrink-0 md:sticky md:top-16 h-full`}
    >
      <h2 className="text-xl font-semibold">Top Inscrit récemment</h2>
      <ul className="mt-3 space-y-3">
        {users.map(({ email, name, image, id }) => (
          <li
            className="bg-card rounded-md p-2 flex shadow-sm shadow-border"
            key={id}
          >
            <Image
              width={48}
              height={48}
              src={image ?? ""}
              className="w-12 h-12 rounded-md"
              alt={`top pro ${name}`}
            />
            <div className="ml-3">
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-zinc-400">{email}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full rounded-md bg-gradient-to-tr from-fuchsia-600 to-violet-600 mt-3 p-3 relative overflow-hidden">
        <div className="z-10 relative">
          <h2 className="text-white font-semibold">Commencer à apprendre </h2>
          <p className="text-white/70 text-sm mt-1 ">
            Appuyer sur ce button pour commencer à apprendre à votre goût et à
            votre rithme
          </p>
          <Link href="dashboard/apprendre">
            <button className="bg-white w-full rounded-md h-12 text-gray-900 font-semibold mt-2">
              Commencer
            </button>
          </Link>
        </div>
        <div className="absolute left-0 right-0 top-0 z-0">
          <svg
            className="w-full"
            viewBox="0 0 679 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_2)">
              <path
                d="M102.854 22L159.666 116.276L102.854 90.4544V22Z"
                fill="#8A92B2"
                fillOpacity="0.35"
              />
              <path
                d="M102.854 90.4544L159.666 116.276L102.854 149.866V90.4544Z"
                fill="#62688F"
                fillOpacity="0.35"
              />
              <path
                d="M46.0315 116.276L102.854 22V90.4544L46.0315 116.276Z"
                fill="#62688F"
                fillOpacity="0.35"
              />
              <path
                d="M102.854 149.866L46.0315 116.276L102.854 90.4544V149.866Z"
                fill="#454A75"
                fillOpacity="0.35"
              />
              <path
                d="M159.666 127.055L102.854 207.12V160.625L159.666 127.055Z"
                fill="#8A92B2"
                fillOpacity="0.35"
              />
              <path
                d="M102.854 160.625V207.12L46 127.055L102.854 160.625Z"
                fill="#62688F"
                fillOpacity="0.35"
              />
              <circle
                cx="552"
                cy="35"
                r="132"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="10"
              />
              <circle
                cx="640"
                cy="115"
                r="132"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="10"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_2">
                <rect width="679" height="360" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
const backGround = [
  "/nft-dashboard-art-0.jpg",
  "/nft-dashboard-art-1.jpg",
  "/nft-dashboard-art-2.jpg",
  "/nft-dashboard-art-3.jpg",
  "/nft-dashboard-art-4.jpg",
  "/nft-dashboard-art-5.jpg",
  ,
];
export function Items({ users }: { users: User }) {
  function generateRandomNumber() {
    return Math.floor(Math.random() * 6); // Génère un nombre aléatoire entre 0 (inclus) et 7 (exclus)
  }
  return (
    <ul className="p-1.5 flex flex-wrap">
      {users.map(({ id, name, image, email, createdAt }, index) => {
        const i = generateRandomNumber();
        const { color, initials } = getInitialsAndColor(name);
        return (
          <li className="w-full lg:w-1/3 md:w-1/2  p-1.5 " key={id}>
            <div className="block bg-card text-foreground rounded-md w-full overflow-hidden pb-4 shadow-2xl border border-border">
              <div
                className="w-full h-40 bg-center bg-cover relative"
                style={{ backgroundImage: `url(/nft-dashboard-art-${i}.jpg)` }}
              >
                <div className="absolute left-1/2 -translate-x-1/2 bottom-2  w-5/6 bg-white rounded-md flex items-center bg-opacity-30 backdrop-blur-md">
                  <div className="w-1/2 p-3">
                    <h3 className="font-semibold">Inscrit le :</h3>
                    <div className="">
                      {new Date(createdAt).toLocaleString()?.split(" ")[0]}
                    </div>
                  </div>
                  <div className="w-1/2 p-3">
                    <h3 className="font-semibold">Inscrit il y a :</h3>
                    <div className="flex gap-1">
                      <Compteur dateInscrit={createdAt} />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-lg px-3 mt-2">
                {i}.{name}
              </h3>
              <div className="flex items-center px-3 mt-2">
                {/* <Avatar>
                  <AvatarImage src="/" alt="@shadcn" />
                  <AvatarFallback className="bg-red-500">IN</AvatarFallback>
                </Avatar> */}
                <AvatarUser namedefault={name} src="/" />
                <span className=" ml-2 text-foreground">{email}</span>
              </div>
              <div className="flex mt-2">
                <div className="p-3 w-1/2">
                  <Button
                    variant="default"
                    className="  w-full h-12 rounded-md font-semibold bg-primary text-primary-foreground"
                  >
                    Information
                  </Button>
                </div>
                <div className="p-3 w-1/2">
                  <div className="bg-gradient-to-tr from-fuchsia-600 to-violet-600  w-full rounded-md font-semibold h-12 p-px">
                    <Button
                      variant="outline"
                      className="w-full h-full rounded-md grid place-items-center"
                    >
                      Voir Profile Entier
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function ArtworkSelector({
  text = "",
  index = 0,
  handleActiveFilter,
  active = 0,
}: {
  text?: string;
  index?: number;
  handleActiveFilter: (text: string, index: number) => void;
  active?: number;
}) {
  return (
    <li className="">
      <button
        onClick={() => {
          handleActiveFilter(text, index);
        }}
        className={` ${
          active !== index
            ? "text-zinc-500"
            : "text-fuchsia-600 underline font-bold"
        }`}
      >
        {text}
      </button>
    </li>
  );
}
