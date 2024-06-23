import { Items } from "@/components/dashboard/items";
import { Logo } from "@/components/dashboard/navBarLeft";
import { fetchAllUsers } from "@/lib/functions/data";
import Link from "next/link";
// const users = [
//   {
//     image: "/nft-dashboard-art-0.jpg",
//     name: "Isaac ILUNGA",
//     id: "stringIsac",
//     email: "isaacilungaofficial@gmail.com",
//     createdAt: new Date(),
//   },
//   {
//     image: "/nft-dashboard-art-4.jpg",
//     name: "KENA Lumière",
//     id: "stringKena",
//     email: "lumkena05@gmail.com",
//     createdAt: "02-04-2023",
//   },
//   {
//     image: "/nft-dashboard-art-3.jpg",
//     name: "MALOBA Cécile",
//     id: "stringcecile",
//     email: "cecilemaloba@gmail.com",
//     createdAt: "01-01-2024",
//   },
// ];
export default async function Page() {
  const IconLink = () => Logo[4].icon;
  const users = await fetchAllUsers();
  return (
    <div className="p-4 mb-4">
      <div className="flex mb-4">
        <div className="w-12 h-12 inline-block">
          <IconLink />
        </div>
        <h1 className="text-2xl font-bold px-3 mt-3 inline-block">
          Tous les utilisateurs
        </h1>
      </div>
      <h2 className="text-zinc-400 px-3">
        Tous sur tout le monde et sur vous même
      </h2>
      <div className="p-2">
        <div
          className="w-full h-44  rounded-md bg-center bg-cover flex flex-col justify-center px-4"
          style={{
            backgroundImage: "url(/nft-dashboard-art-6.jpg)",
          }}
        >
          <h2 className="font-bold text-3xl max-w-sm text-white">
            {users?.length} {users?.length > 1 ? "utilisateurs" : "utilisateur"}
            au total
          </h2>
          <button className="py-2 bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-md w-44 mt-3 text-white">
            <Link href="dashboard/parametres">Voir ton profile</Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-3 mt-3">
        {/* <h2 className="text-xl font-semibold">Tous les utilisateurs</h2> */}
        {/* <ul className="inline-flex space-x-3 ">
          {["Plus reccents", "Plus anciens"].map((text, index) => (
            <ArtworkSelector
              handleActiveFilter={handleActiveFilter}
              key={text}
              text={text}
              index={index}
              active={active}
            />
          ))}
        </ul> */}
      </div>
      <Items users={users} />
    </div>
  );
}
