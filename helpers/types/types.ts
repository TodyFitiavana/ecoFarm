type NavListType = {
  label: string;
  url?: string;
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

type FarmerCardTypes = {
  iconURL: string;
  title: string;
  description: string;
  iconColor?: string;
};

export type {
  NavListType,
  LandingCardTypes,
  AssistanceAccordionType,
  FarmerCardTypes,
};
