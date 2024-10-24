type NavListType = {
  label: string;
  url: "";
};

type FarmerNavlistType = {
  label: string;
  urlIcon?: string;
  urlIconActive?: string;
  image?: string;
  title?: string;
  urlPage?: string;
};

type aboutCardTypes = {
  title: string;
  description: string;
  iconURL: string;
};

type FarmerCardTypes = {
  iconURL: string;
  title: string;
  description: string;
  iconColor?: string;
};

export type { NavListType, aboutCardTypes, FarmerCardTypes, FarmerNavlistType };
