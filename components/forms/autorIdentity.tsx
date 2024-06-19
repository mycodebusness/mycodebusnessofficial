// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useState } from "react";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { toast } from "@/components/ui/use-toast";
// import { Switch } from "@/components/ui/switch";
// import { Eye, EyeOff } from "lucide-react";

// const AutorIdentitySchema = z
//   .object({
//     nom: z
//       .string()
//       .min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
//     prenom: z
//       .string()
//       .min(2, { message: "Le prénom doit comporter au moins 2 caractères." }),
//     genre: z.boolean(),
//     email: z.string().email({ message: "Adresse e-mail invalide." }),
//     numero: z
//       .string()
//       .regex(/^(\+243)[0-9]{9}$/, {
//         message:
//           "Le numéro de téléphone doit commencer par +243 et contenir 9 chiffres.",
//       }),
//     password: z
//       .string()
//       .regex(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/, {
//         message:
//           "Le mot de passe doit comporter au moins 6 caractères, dont des lettres et des chiffres.",
//       }),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Les mots de passe ne correspondent pas.",
//     path: ["confirmPassword"],
//   });

// export function AutorIdentity() {
//   const [showPassword, setShowPassword] = useState(false);
//   const form = useForm<z.infer<typeof AutorIdentitySchema>>({
//     resolver: zodResolver(AutorIdentitySchema),
//     defaultValues: {
//       nom: "",
//       prenom: "",
//       genre: true,
//       email: "",
//       numero: "+243",
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   function onSubmit(data: z.infer<typeof AutorIdentitySchema>) {
//     const combinedName = `${data.nom} ${data.prenom}`;
//     const finalData = { ...data, name: combinedName };
//     delete finalData.nom;
//     delete finalData.prenom;
//     delete finalData.confirmPassword;

//     toast({
//       title: "Vous avez soumis les valeurs suivantes :",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">
//             {JSON.stringify(finalData, null, 2)}
//           </code>
//         </pre>
//       ),
//     });
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="nom"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Nom</FormLabel>
//               <FormControl>
//                 <Input placeholder="Nom" {...field} />
//               </FormControl>
//               <FormDescription>Votre nom de famille.</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="prenom"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Prénom</FormLabel>
//               <FormControl>
//                 <Input placeholder="Prénom" {...field} />
//               </FormControl>
//               <FormDescription>Votre prénom.</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="genre"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Genre</FormLabel>
//               <FormControl>
//                 <div className="flex items-center space-x-2">
//                   <Switch
//                     checked={field.value}
//                     onCheckedChange={field.onChange}
//                   />
//                   <span>{field.value ? "Masculin" : "Féminin"}</span>
//                 </div>
//               </FormControl>
//               <FormDescription>Sélectionnez votre genre.</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="Email" {...field} />
//               </FormControl>
//               <FormDescription>Votre adresse e-mail.</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="numero"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Numéro de téléphone</FormLabel>
//               <FormControl>
//                 <Input placeholder="+243" {...field} />
//               </FormControl>
//               <FormDescription>
//                 Votre numéro de téléphone (RDC).
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Mot de passe</FormLabel>
//               <FormControl>
//                 <div className="relative">
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Mot de passe"
//                     {...field}
//                   />
//                   <div
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                   </div>
//                 </div>
//               </FormControl>
//               <FormDescription>
//                 Choisissez un mot de passe sécurisé contenant des lettres et des
//                 chiffres.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="confirmPassword"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Confirmez le mot de passe</FormLabel>
//               <FormControl>
//                 <div className="relative">
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Confirmez le mot de passe"
//                     {...field}
//                   />
//                   <div
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                   </div>
//                 </div>
//               </FormControl>
//               <FormDescription>
//                 Répétez le mot de passe pour confirmation.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Soumettre</Button>
//       </form>
//     </Form>
//   );
// }

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Eye, EyeOff } from "lucide-react";

const AutorIdentitySchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
    lastname: z
      .string()
      .min(2, { message: "Le prénom doit comporter au moins 2 caractères." }),
    genre: z.boolean(),
    email: z.string().email({ message: "Adresse e-mail invalide." }),
    numero: z.string().regex(/^(\+243)[0-9]{9}$/, {
      message:
        "Le numéro de téléphone doit commencer par +243 et contenir 9 chiffres.",
    }),
    password: z.string().regex(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/, {
      message:
        "Le mot de passe doit comporter au moins 6 caractères, dont des lettres et des chiffres.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas.",
    path: ["confirmPassword"],
  });

export function AutorIdentity() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof AutorIdentitySchema>>({
    resolver: zodResolver(AutorIdentitySchema),
    defaultValues: {
      name: "",
      lastname: "",
      genre: true,
      email: "",
      numero: "+243",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof AutorIdentitySchema>) {
    delete data.confirmPassword;

    toast({
      title: "Vous avez soumis les valeurs suivantes :",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              <FormDescription>Votre nom de famille.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="Prénom" {...field} />
              </FormControl>
              <FormDescription>Votre prénom.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <span>{field.value ? "Masculin" : "Féminin"}</span>
                </div>
              </FormControl>
              <FormDescription>Sélectionnez votre genre.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>Votre adresse e-mail.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numero"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de téléphone</FormLabel>
              <FormControl>
                <Input placeholder="+243" {...field} />
              </FormControl>
              <FormDescription>
                Votre numéro de téléphone (RDC).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe"
                    {...field}
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                Choisissez un mot de passe sécurisé contenant des lettres et des
                chiffres.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmez le mot de passe</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirmez le mot de passe"
                    {...field}
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                Répétez le mot de passe pour confirmation.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Soumettre</Button>
      </form>
    </Form>
  );
}
