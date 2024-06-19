import { Copy } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/dashboard/navBarLeft";
declare type meteor = {
  title: string;
  description: string;
  icon: string;
  testButton?: string;
  svgicon?: any;
}[];
const projects: meteor = [
  {
    title: "Horloge et Calculatrice",
    description:
      "Avec ce projet, vous apprendrez à créer une calculatrice et l'horloge interactive, perfectionnant vos compétences en programmation et en conception d'interfaces utilisateur.",
    icon: "🕧",
  },

  {
    title: "Gestion des dépenses",
    description:
      "Avec ce projet, vous apprendrez à développer une application de suivi financier, améliorant votre compréhension des bases de données et de la gestion de projet.",
    icon: "💰",
  },
  {
    title: "Liste des tâches à faire",
    description:
      "Avec ce projet, vous apprendrez à concevoir une liste de tâches interactive, consolidant vos compétences en développement web et en organisation personnelle.",
    icon: "📜",
  },
  {
    title: "Bible",
    description:
      "Avec ce projet, vous apprendrez à créer une plateforme d'étude biblique, enrichissant votre compréhension des technologies web et des textes sacrés.",
    icon: "📖",
  },
  {
    title: "Portfolio",
    description:
      "Avec ce projet, vous apprendrez à construire un portfolio en ligne, affinant votre sens du design et de la présentation professionnelle.",
    icon: "💼",
  },
  {
    title: "Test équipement réseau",
    description:
      "Avec ce projet, vous apprendrez à concevoir un outil de test d'équipement réseau, approfondissant vos connaissances en réseaux informatiques et en diagnostic.",
    icon: "🌍",
  },
  {
    title: "Encore plus +",
    description:
      "Accedez aux parametres pour spécifier vos propres projets, on ne sait jamais, peut être vous n'êtes pas le seul à en avoir...",
    icon: "✨",
  },
];
export default function Page() {
  const IconLink = () => Logo[3].icon;

  return (
    <>
      <div className="flex mb-4">
        <div className="w-12 h-12 inline-block">
          <IconLink />
        </div>
        <h1 className="text-2xl font-bold px-3 mt-3 inline-block">Outils</h1>
      </div>
      <p>
        Ici vous trouverez tous les grands projets que nous allons réalisés au
        cours de notre apprentissage 😎😎 car comme promit nous allons apprendre
        par la pratique😁😁!!! Alors avez vous des projets ? si oui veuillez{" "}
        <Link href="#" className="text-blue-600">
          cliquer ici
        </Link>
      </p>
      <MagicContainer
        className={"flex  w-full flex-col gap-4  lg:flex-row p-0"}
      >
        <div className="p-1.5 gap-4 relative grid grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-3 md:px-3 lg:px-2 w-full">
          {projects.map(({ icon, title, description }) => (
            <CardMagic
              key={title}
              description={description}
              icon={icon}
              title={title}
            />
          ))}
        </div>
      </MagicContainer>
    </>
  );
}

function CardMagic({
  icon = "",
  title = "Titre",
  description = "Contenu",
  textButton = "En savoir plus +",
  svgicon = null,
}) {
  return (
    <MagicCard
      borderWidth={3}
      className="flex w-full cursor-pointer  shadow-2xl relative flex-col justify-between items-start bg-background border border-border  p-4 overflow-hidden"
    >
      <div className="flex gap-4 items-center pb-2">
        <div className="h-10 w-10 rounded-full border flex items-center justify-center border-border text-4xl animate-heartbeat-effect">
          {svgicon ? svgicon : icon}
        </div>
        <h3 className="font-bold text-xl  relative ">{title}</h3>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="self-end"> {textButton}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle asChild>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full border flex items-center justify-center border-border text-4xl animate-heartbeat-effect">
                  {svgicon ? svgicon : icon}
                </div>
                <h3 className="font-bold text-xl  relative ">{title}</h3>
              </div>
            </DialogTitle>
            <DialogDescription>
              <p className="font-normal text-base  mb-4 relative">
                {description}
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="md:justify-end">
            <DialogClose asChild>
              <Button className="md:px-8" variant="destructive">
                Fermer
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MagicCard>
  );
}

/* {
    title: "Site de publication de l'horaire",
    description:
      "Avec ce projet, vous apprendrez à développer un site d'horaire interactif, améliorant vos compétences en développement web et en gestion de données.",
    icon: "🧑‍🏫",
  },
  {
    title: "Blog de discussion",
    description:
      "Avec ce projet, vous apprendrez à créer un blog interactif, renforçant vos compétences en développement web et en communication digitale.",
    icon: "🤝",
  },
  {
    title: "Site e-commerce",
    description:
      "Avec ce projet, vous apprendrez à construire une plateforme de commerce électronique, développant vos compétences en marketing en ligne et en gestion des transactions.",
    icon: "💵",
  },
  {
    title: "Gestion des anniversaires",
    description:
      "Avec ce projet, vous apprendrez à développer une application de gestion d'anniversaires, consolidant vos compétences en développement d'applications et en gestion de données.",
    icon: "🎂",
  },
  {
    title: "Messagerie instantanée",
    description:
      "Avec ce projet, vous apprendrez à créer une application de messagerie instantanée, améliorant vos compétences en développement d'applications web et en temps réel.",
    icon: "📧",
  },
  {
    title: "Test équipement réseau",
    description:
      "Avec ce projet, vous apprendrez à concevoir un outil de test d'équipement réseau, approfondissant vos connaissances en réseaux informatiques et en diagnostic.",
    icon: "🛜",
  },
  {
    title: "Gestion de l'ISCI",
    description:
      "Avec ce projet, vous apprendrez à développer un système de gestion pour une institution académique, perfectionnant vos compétences en développement logiciel et en gestion de projet.",
    icon: "🏫",
  },
  {
    title: "Gestion des stocks",
    description:
      "Avec ce projet, vous apprendrez à créer une application de gestion des stocks, renforçant vos compétences en développement d'applications et en gestion d'inventaire.",
    icon: "🏬",
  },
  {
    title: "Gestion location salle de fête",
    description:
      "Avec ce projet, vous apprendrez à développer un système de réservation de salles de fête, améliorant vos compétences en développement d'applications et en gestion événementielle.",
    icon: "🏟️",
  },*/
