import {
  AssistanceAccordionType,
  FarmerCardTypes,
  LandingCardTypes,
  NavListType,
} from "./types/types";

const navList: NavListType[] = [
  {
    label: "Accueil",
    url: "",
  },
  {
    label: "A Propos",
    url: "",
  },
  {
    label: "Découvrir",
    url: "",
  },
  {
    label: "Assistance",
    url: "",
  },
];

const landingCardData: LandingCardTypes[] = [
  {
    lotlie: "/lottie/features-1.json",
    title: "Assistance par IA",
    description:
      "Intégration de l’IA pour conseiller les agriculteurs afin d’avoir une meilleure production.",
    bgColor: "rgba(217, 242, 180, 1)",
    index: 0,
  },
  {
    lotlie: "/lottie/features-2.json",
    title: "Plateforme de vente",
    description:
      "Permettant à l’agriculteur de vendre ses produits agricoles et au consommateur de les acheter.",
    bgColor: "rgba(188, 244, 245, 1)",
    index: 1,
  },
  {
    lotlie: "/lottie/features-3.json",
    title: "Sécurité des données",
    description:
      "Dans EcoFarm, les données des utilisateurs sont sécurisés par la reconaissance faciale et autres.",
    bgColor: "rgba(255, 183, 195, 1)",
    index: 2,
  },
];

const assistanceAccordionData: AssistanceAccordionType[] = [
  {
    index: "01",
    accordionTrigger: "Créer un compte en séléctionnant agriculteur",
    accordionContent: "",
  },
  {
    index: "02",
    accordionTrigger: "Remplissez les informations",
    accordionContent: "",
  },
  {
    index: "03",
    accordionTrigger: "Accéder au dashboard",
    accordionContent: "",
  },
  {
    index: "04",
    accordionTrigger: "Choisir les catégories d’assistance",
    accordionContent: "",
  },
];

const farmerCardData: FarmerCardTypes[] = [
  {
    description:
      "Cette catégorie vous permet de prédire les conditions climatiques optimales.",
    iconURL: "/icons/earth-leaf.svg",
    title: "Prédiction Climatique pour Produits Agricoles",
    iconColor: "#BCF4F5",
  },
  {
    description:
      "Cette catégorie vous aide à identifier les types de sol les plus favorables .",
      iconURL: "/icons/weather.svg",
    title: "Prédiction de Sol Favorable",
    iconColor: "#FFB7C3",
  },
];

export { navList, landingCardData, assistanceAccordionData, farmerCardData };
