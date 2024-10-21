import {
  AssistanceAccordionType,
  FarmerNavlistType,
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
    urlPage: "",
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
const data = [
  {
    id: 1,
    Facture: "001-2024",
    Total: 250000,
    livraison: "LOT AB 45C",
    date: "05/09/2024",
    num: "0344705608",
  },
  {
    id: 1,
    Facture: "001-2024",
    Total: 250000,
    livraison: "Ambohidratrimo",
    date: "05/09/2024",
    num: "0344705608",
  },
  {
    id: 1,
    Facture: "001-2024",
    Total: 250000,
    livraison: "Ambatolampy",
    date: "05/09/2024",
    num: "0344705608",
  },

  {
    id: 1,
    Facture: "001-2024",
    Total: 250000,
    livraison: "Ambohibao",
    date: "05/09/2024",
    num: "0344705608",
  },
];

const columns = [
  { header: "ID", accessor: (row) => row.id },
  { header: "Facture", accessor: (row) => row.Facture },
  { header: "Total à payer", accessor: (row) => row.Total },
  { header: "Point de vente / livraison", accessor: (row) => row.livraison },
  { header: "date de facturation", accessor: (row) => row.date },
  { header: "numéro client", accessor: (row) => row.num },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { header: "Action", accessor: (row) => "" },
];

export {
  navList,
  landingCardData,
  assistanceAccordionData,
  farmerNavData,
  data,
  columns,
};
