import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AssistanceAccordionType } from "@/helpers/types/types";

const AssistanceAccordion: React.FC<AssistanceAccordionType> = ({
  index,
  accordionTrigger,
  accordionContent,
}): JSX.Element => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {index} {accordionTrigger}
        </AccordionTrigger>
        <AccordionContent>{accordionContent}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AssistanceAccordion;
