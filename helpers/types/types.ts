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

type LandingCardTypes = {
  lotlie: string;
  title: string;
  description: string;
  bgColor?: string;
  index?: number;
};
type AssistanceAccordionType = {
  index: string;
  accordionTrigger: string;
  accordionContent?: string;
};

export type {
  NavListType,
  LandingCardTypes,
  AssistanceAccordionType,
  FarmerNavlistType,
};
