import {
  aboutCardTypes,
  FarmerCardTypes,
  FarmerNavlistType,
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

const farmerNavData: FarmerNavlistType[] = [
  {
    urlIcon: "/icons/dashboard.svg",
    urlIconActive: "/icons/dashboardActive.svg",
    label: "Dashboard",
    urlPage: "/farmer/dashboard",
  },
  {
    urlIcon: "/icons/assistance-IA.svg",
    urlIconActive: "/icons/assistanceActive.svg",
    label: "Assistance IA",
    urlPage: "/farmer/assistance",
  },
  {
    urlIcon: "/icons/produit.svg",
    urlIconActive: "/icons/produitActive.svg",
    label: "Produit",
    title: "produit",
    urlPage: "",
  },
  {
    urlIcon: "/icons/parametre.svg",
    urlIconActive: "/icons/parametreActive.svg",
    label: "Compte agriculteur",
    title: "parametre",
    urlPage: "",
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

const aboutCardData: aboutCardTypes[] = [
  {
    iconURL: "/icons/magicpen.svg",
    title: "Optimisation de la production agricole",
    description:
      "Les agriculteurs peuvent demander des conseils personnalisés à l'IA pour optimiser leurs pratiques agricoles et améliorer leur production",
  },
  {
    iconURL: "/icons/truck-tick.svg",
    title: "Vente directe des produits",
    description:
      "En plus de l'assistance à la production, EcoFarm offre aux agriculteurs la possibilité de vendre directement leurs produits via la plateforme, sans intermédiaire.",
  },
  {
    iconURL: "/icons/dollar-circle.svg",
    title: "Prix équitables",
    description:
      "Grâce à cette vente directe, les agriculteurs peuvent proposer leurs produits à des prix raisonnables, ce qui profite à la fois aux producteurs et aux consommateurs.",
  },
];

export { navList, farmerNavData, farmerCardData, aboutCardData };
