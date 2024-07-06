import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QuestionAns = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <Accordion type="single" collapsible className="px-6">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-start text-lg">
          {question}
        </AccordionTrigger>
        <AccordionContent className="text-lg">{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default QuestionAns;
