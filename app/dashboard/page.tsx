import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { ListUsers } from "@/components/magicui/listUser";
import Image from "next/image";
import { AnimatedBeamSimple } from "@/components/magicui/animatedsimplebeam";
import { AnimatedBeamMultiple } from "@/components/magicui/animatedbeamcomplexe";
// import MarqueeComment from "@/components/magicui/commentMarquee";
import AvatarUser from "@/components/avatarUser";
// import { auth } from "@/auth";
// import {
//   fetchAllComments,
//   fetchRecentUsers,
//   fetchUserByEmail,
// } from "@/lib/functions/data";
import { Logo } from "@/components/dashboard/navBarLeft";
import { auth } from "@/auth";
import { fetchAllComments, fetchRecentUsers, fetchUserByEmail } from "@/lib/functions/data";
// import { fetchRecentUsers } from "@/lib/functions/data";
// import { useSession } from "next-auth/react";
export const metadata: Metadata = {
  title: "dashboard",
};

async function Page() {
  // const users = await getProfileAll();
  // const { data: session, status } = useSession();
  const session = await auth();
  // const session = await auth();
  const email = session?.user?.email || "";

  const { name, lastname } = await fetchUserByEmail(email);
  // const name = "NGOIE",
  //   lastname = "Isaac";
  // console.log({ name, lastname });
  // const usersComments = await fetchAllComments();
  // console.log({ usersComments });
  // const usersComments = [
  //   {
  //     comment: "The website is very user-friendly and intuitive.",
  //     name: "John",
  //     lastname: "Doe",
  //     email: "john.doe@example.com",
  //   },
  //   {
  //     comment: "The website is very user-friendly and intuitive.",
  //     name: "John",
  //     lastname: "Doe",
  //     email: "john.doe@example.com",
  //   },
  //   {
  //     comment: "Great website! I love the design and functionality.",
  //     name: "ILUNGA",
  //     lastname: "Isaac",
  //     email: "isaacilungaofficial@glmail.com",
  //   },
  //   {
  //     comment: "Great website! I love the design and functionality.",
  //     name: "ILUNGA",
  //     lastname: "Isaac",
  //     email: "isaacilungaofficial@glmail.com",
  //   },
  //   {
  //     comment: "The website is very user-friendly and intuitive.",
  //     name: "John",
  //     lastname: "Doe",
  //     email: "john.doe@example.com",
  //   },
  // ];
  const IconLink = () => Logo[0].icon;
  const users = await fetchRecentUsers();
  // console.log({ user });
  // const users = [
  //   {
  //     name: "ILUNGA",
  //     lastname: "Isaac",
  //     email: "isaacilungaofficial@glmail.com",
  //     createdat: "2024-06-10T19:11:05.618Z",
  //     image: "",
  //   },
  //   {
  //     name: "John",
  //     lastname: "Doe",
  //     email: "john.doe@example.com",
  //     createdat: "2024-06-16T19:11:05.618Z",
  //     image: "https://example.com/images/john.jpg",
  //   },
  // ];
  return (
    <div className="p-4 mb-4">
      <div className="flex mb-4">
        <div className="w-12 h-12 inline-block">
          <IconLink />
        </div>
        <h1 className="text-2xl font-bold px-3 mt-3 inline-block">
          Tableau de bord
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <Card
          className="sm:col-span-2 relative shadow-md"
          x-chunk="dashboard-05-chunk-0"
          style={
            {
              // backgroundImage: "url(/nft-dashboard-art-6.jpg)",
            }
          }
        >
          <div className=" flex flex-col p-4 z-30">
            <div className="flex items-center gap-4 text-2xl">
              {/* <Avatar className="w-32 h-32">
                <AvatarImage src="/nft-dashboard-art-.jpg" alt="@shadcn" />
                <AvatarFallback className="bg-blue-700">CN</AvatarFallback>
              </Avatar> */}
              <AvatarUser
                namedefault={`${lastname} ${name}`}
                src={email}
                className="w-32 h-32"
              />

              <div className="flex flex-col">
                <h2 className="font-bold text-3xl max-w-sm">{`${lastname} ${name}`}</h2>
                <h3 className="font-bold text-sm max-w-sm">{email} </h3>
              </div>
            </div>
            <div className="flex justify-end gap-x-4 pt-3">
              <Button asChild className="self-end">
                <Link href="dashboard/users">Les utillisateurs</Link>
              </Button>
              <Button asChild className="self-end">
                <Link href="dashboard/parametres">Votre profile</Link>
              </Button>
            </div>
          </div>
        </Card>
        <Card x-chunk="dashboard-05-chunk-2" className="shadow-md">
          <CardHeader className="pb-2">
            <CardDescription>Votre contribution</CardDescription>
            <CardTitle className="text-4xl">0.00 $</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              En Franc Congolais : 0.00 Fc
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={12} aria-label="12% increase" />
          </CardFooter>
        </Card>
        <Card x-chunk="dashboard-05-chunk-1" className="shadow-md">
          <CardHeader className="pb-2">
            <CardDescription>Votre vitesse au clavier</CardDescription>
            <CardTitle className="text-4xl">0 mot/s</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              Bientôt vous serez meilleur!
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={25} aria-label="25% increase" />
          </CardFooter>
        </Card>
      </div>
      <main className="flex flex-col gap-2 leading-6 mt-10 max-w-[900px] mx-auto">
        <h1 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Bienvenue sur{" "}
          <span className="inline-flex">
            <span className="font-black text-yellow-500">My</span>
            <span className="font-black text-red-700">Code</span>
            <span className="font-black text-blue-700">Busness</span>
          </span>{" "}
        </h1>
        <Image
          width={100}
          height={100}
          className="logo mx-auto"
          alt="logo du site"
          src="/mycodebusness logo.png"
        />

        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
          Chez MyCodeBusiness, nous croyons que la meilleure façon
          d&apos;apprendre est par la pratique.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
          Vous trouverez ici divers tutoriels et exercices pratiques pour
          améliorer vos compétences en programmation. Nos cours sont conçus pour
          être interactifs et engageants, vous permettant de mettre en pratique
          ce que vous avez appris immédiatement.
        </p>
        <AnimatedBeamSimple />

        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
          Que vous soyez débutant ou développeur expérimenté, nous avons quelque
          chose pour vous. Rejoignez-nous dans cette aventure
          d&apos;apprentissage et développez vos compétences en codage !
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
          Nous apprendrons d&apos;abord les bases (Clavier et Souris) puis la
          programmation, voici le schemas :
        </p>
        <AnimatedBeamMultiple />
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
          Voici quelques commentaires :
        </p>
        {/* <MarqueeComment /> */}
      </main>
      <div className="grid gap-4 sm:grid-cols-5 min-h-4 overflow-hidden relative mt-10">
        <div className="col-span-3	">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center pb-2">
            Top 5 inscrits récemment
          </h3>
          <ListUsers recentUsers={users} />
        </div>
        <div className="w-full rounded-md bg-gradient-to-tr from-fuchsia-600 to-violet-600 mt-3 p-3 relative overflow-hidden col-span-3 sm:col-span-2		">
          <div className="z-10 relative">
            <h2 className="text-white font-semibold">Commencer à apprendre </h2>
            <p className="text-white/70 text-sm mt-1 ">
              Appuyer sur ce button pour commencer à apprendre à votre goût, à
              votre rithme et à votre sauce!!! <br />
              Prêt à commencer ?
            </p>
            <Button
              variant="secondary"
              className=" w-full rounded-md h-12 font-semibold mt-2"
              asChild
            >
              <Link href="dashboard/apprendre">Commencer</Link>
            </Button>
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
    </div>
  );
}

export default Page;
