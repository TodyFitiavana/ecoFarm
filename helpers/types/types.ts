type NavListType = {
  label: string;
  url?: string;
  image?: string;
  title?:string;
};

type LandingCardTypes = {
  lotlie: string;
  title: string;
  description: string;
  bgColor?: string;
  index?: number
};
type AssistanceAccordionType = {
  index: string;
  accordionTrigger: string;
  accordionContent?: string;
};

export type { NavListType, LandingCardTypes, AssistanceAccordionType };
