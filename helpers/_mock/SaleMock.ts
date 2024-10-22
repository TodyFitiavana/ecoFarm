const Farmer_dashboard_data = [
  {
    id: 1,
    Facture: "001-2024",
    Total: 250000,
    livraison: "LOT AB 45C",
    date: "05/09/2024",
    num: "0344705608",
  },
  {
    id: 2,
    Facture: "001-2024",
    Total: 250000,
    livraison: "Ambohidratrimo",
    date: "05/09/2024",
    num: "0344705608",
  },
  {
    id: 3,
    Facture: "001-2024",
    Total: 250000,
    livraison: "Ambatolampy",
    date: "05/09/2024",
    num: "0344705608",
  },
  {
    id: 4,
    Facture: "001-2024",
    Total: 250000,
    livraison: "Ambohibao",
    date: "05/09/2024",
    num: "0344705608",
  },
];

const Farmer_dashboard_columns = [
  { header: "ID", accessor: (row) => row.id },
  { header: "Facture", accessor: (row) => row.Facture },
  { header: "Total à payer", accessor: (row) => row.Total },
  { header: "Point de vente / livraison", accessor: (row) => row.livraison },
  { header: "date de facturation", accessor: (row) => row.date },
  { header: "numéro client", accessor: (row) => row.num },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { header: "Action", accessor: (row) => "" },
];
const Farmer_produit_columns = [
  { header: "ID", accessor: (row) => row.id },
  { header: "Nom du produit", accessor: (row) => row.nom },
  { header: "Prix unitaire(par Kilos)", accessor: (row) => row.prix },
  { header: "Catégories", accessor: (row) => row.categories },
  { header: "Status", accessor: (row) => row.status },
  { header: "Action", accessor: (row) => row.action },
];
const Farmer_produit_data = [
  {
    id: 1,
    nom: "Tomates",
    prix: "25000",
    categories: "Légumes",
    status: "Indisponible",
  },
  {
    id: 2,
    nom: "Haricots",
    prix: "25000",
    categories: "Légumes",
    status: "disponible",
  },
  {
    id: 3,
    nom: "Banane",
    prix: "125000",
    categories: "Fruits",
    status: "disponible",
  },
];

export {
  Farmer_dashboard_columns,
  Farmer_dashboard_data,
  Farmer_produit_columns,
  Farmer_produit_data,
};
