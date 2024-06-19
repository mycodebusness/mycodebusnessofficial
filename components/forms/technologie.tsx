"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
const technologie = {
  base: true,
  web: true,
  mobile: true,
  desktop: true,
  design: true,
  reseau: true,
};
const FormSchema = z.object({
  base: z.boolean(),
  web: z.boolean().default(false).optional(),
  mobile: z.boolean().default(false).optional(),
  desktop: z.boolean().default(false).optional(),
  design: z.boolean().default(false).optional(),
  reseau: z.boolean().default(false).optional(),
});

export function Technologie() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      base: true,
      desktop: technologie["desktop"] ? technologie["design"] : false,
      web: technologie["desktop"] ? technologie["design"] : false,
      mobile: technologie["mobile"] ? technologie["design"] : false,
      design: technologie["design"] ? technologie["design"] : false,
      reseau: technologie["reseau"] ? technologie["design"] : false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium">
            Les Technologies de votre choix
          </h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="base"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Clavier et Souris Pro{" "}
                    </FormLabel>
                    <FormDescription>
                      Pour maitrisez la programmation en générale et tous les
                      concepts.{" "}
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="web"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Un Developpeur Web
                    </FormLabel>
                    <FormDescription>
                      Pour Maitrisez la Programmation et les Techologies Web.{" "}
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Un Devéloppeur Mobile
                    </FormLabel>
                    <FormDescription>
                      Pour Maitrisez la programmation et les Technologies
                      Mobiles.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="desktop"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Un Devéloppeur Desktop
                    </FormLabel>
                    <FormDescription>
                      Pour Maitrisez la programmation et les Technologies
                      Desktop. Mobiles.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="design"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Un Designer</FormLabel>
                    <FormDescription>
                      Pour Maitrisez le Design.{" "}
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reseau"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Un Réseauteur</FormLabel>
                    <FormDescription>
                      Pour Maitrisez les réseaux informatiques et manipulez les
                      équipements.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

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

// const TechnologieSchema = z.object({
//   technologies: z.string().optional(),
// });

// export function Technologie() {
//   const form = useForm<z.infer<typeof TechnologieSchema>>({
//     resolver: zodResolver(TechnologieSchema),
//     defaultValues: {
//       technologies: "",
//     },
//   });

//   function onSubmit(data: z.infer<typeof TechnologieSchema>) {
//     toast({
//       title: "Vous avez soumis les valeurs suivantes :",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="technologies"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Technologies</FormLabel>
//               <FormControl>
//                 <Input placeholder="Technologies" {...field} />
//               </FormControl>
//               <FormDescription>
//                 Liste des technologies que vous maîtrisez.
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
