// import CodePlayground from "@/components/code/CodePlayground";
// import React from "react";

// type Props = {};

// export default function Page({}: Props) {
//   return (
//     <div>
//       <h1>Code</h1>
//       <CodePlayground />
//     </div>
//   );
// }
import React from "react";
import dynamic from "next/dynamic";

const CodePlayground = dynamic(
  () => import("@/components/code/CodePlayground"),
  { ssr: false }
);

const HomePage: React.FC = () => {
  return (
    <div className="h-screen w-screen font-['monospace']">
      <CodePlayground />
    </div>
  );
};

export default HomePage;
