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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const BiographieSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "La biographie doit comporter au moins 10 caractères.",
    }),
  image: z
    .string()
    .url({ message: "Le lien de l'image doit être valide." })
    .optional(),
});

export function Biographie() {
  const form = useForm<z.infer<typeof BiographieSchema>>({
    resolver: zodResolver(BiographieSchema),
    defaultValues: {
      bio: "Écrivez une courte biographie ici. Par exemple, 'Je suis un développeur passionné par les nouvelles technologies et j'adore travailler sur des projets innovants.'",
      image: "",
    },
  });

  function onSubmit(data: z.infer<typeof BiographieSchema>) {
    const finalData = {
      ...data,
      image: data.image || "",
    };

    toast({
      title: "Vous avez soumis les valeurs suivantes :",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(finalData, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Biographie</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Écrivez une courte biographie ici. Par exemple, 'Je suis un développeur passionné par les nouvelles technologies et j'adore travailler sur des projets innovants.'"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Une courte description de vous-même.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lien de l&apos;image</FormLabel>
              <FormControl>
                <Input placeholder="Lien de l'image" {...field} />
              </FormControl>
              <FormDescription>
                Le lien vers votre image de profil (doit être valide).
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
