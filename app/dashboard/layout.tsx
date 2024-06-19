import { auth } from "@/auth";
// import { SidebarRight } from "@/components/dashboard/dashboard";
import { Header } from "@/components/dashboard/header";
import { SidebarLeft } from "@/components/dashboard/navBarLeft";
import { fetchUserByEmail } from "@/lib/functions/data";
import React from "react";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(users);

  // const session = await serverSesion();
  // if (!session) {
  //   return redirect("/api/auth/signin");
  // }
  const session = await auth();
  const email = session?.user?.email || "";
  const { name, lastname, image } = await fetchUserByEmail(email);

  // const users = await getProfileProClavier();
  // const email = "isaacilungaofficial@glmail.com";

  // const { name, lastname } = await fetchUserByEmail(email);
  // const name = "NGOIE",
  //   lastname = "Isaac",
  //   image = "/images (8).jpeg";
  return (
    <>
      <Header imageUrl={image ?? ""} name={`${lastname} ${name}`} />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-14 hidden lg:block shrink-0" />
        <SidebarLeft />

        <div className=" grow  max-lg:pb-12 ">{children}</div>
        {/* <SidebarRight users={users} /> */}
      </div>
    </>
  );
}
