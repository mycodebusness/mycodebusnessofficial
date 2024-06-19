import getInitialsAndColor from "@/lib/hooks/useInitialsAndColor";
import AvatarUser from "../avatarUser";
import { Button } from "../ui/button";
import Compteur from "./compteur";
import { Users } from "@/lib/definitions";
import Duration from "@/lib/functions/compteur";

export function Items({ users }: { users: Users }) {
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
                    <h3 className="font-semibold">Depuis inscription :</h3>
                    <div className="flex gap-1">
                      <Duration creationDate={createdAt} />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-lg px-3 mt-2">{name}</h3>
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
