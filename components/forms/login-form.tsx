"use client";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authenticate } from "@/lib/functions/actions";
export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch} className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Connexion</h1>
          <p className="text-balance text-muted-foreground">
            Remplissez vos informations de votre compte !
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="exemple : codebusness@gmail.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Mot de passe</Label>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Mot de passe oublier?
              </Link>
            </div>
            <Input id="password" type="password" name="password" required />
          </div>

          <LoginButton />
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                {/* <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> */}
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
          {/* <Button variant="outline" className="w-full">
          Login with Google
        </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Vous n&apos;avez pas de compte?{" "}
          <Link href="/inscrire" className="underline">
            Créer ici
          </Link>
        </div>
      </div>
    </form>
  );
}
// dark:brightness-[0.2] dark:grayscale
function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Se connecter
    </Button>
  );
}
// <Button className="mt-4 w-full" aria-disabled={pending}>
//   Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
// </Button>

// "use client";
// import { AtSign, Key, AlertTriangle, ArrowRight } from "lucide-react";
// import { useFormState, useFormStatus } from "react-dom"; // Assurez-vous que cette importation est correcte pour votre cas spécifique
// import { Button } from "../ui/button";
// import { authenticate } from "@/lib/functions/actions";

// export default function LoginForm() {
//   const [errorMessage, dispatch] = useFormState(authenticate, undefined);

//   return (
//     <form action={dispatch} className="space-y-3">
//       <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
//         <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
//         <div className="w-full">
//           <div>
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email address"
//                 required
//               />
//               <AtSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="password"
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 required
//                 minLength={6}
//               />
//               <Key className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>
//         <LoginButton />
//         <div
//           className="flex h-8 items-end space-x-1"
//           aria-live="polite"
//           aria-atomic="true"
//         >
//           {errorMessage && (
//             <>
//               <AlertTriangle className="h-5 w-5 text-red-500" />
//               <p className="text-sm text-red-500">{errorMessage}</p>
//             </>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// }

// function LoginButton() {
//   const { pending } = useFormStatus();

//   return (
//     <Button className="mt-4 w-full" aria-disabled={pending}>
//       Log in <ArrowRight className="ml-auto h-5 w-5 text-gray-50" />
//     </Button>
//   );
// }
