import PricingCard from "@/components/root/pricing/PricingCard";
import React from "react";
import QuestionAns from "./QuestionAns";
import Heading from "@/components/shared/Heading";
import { UserQuestions, pricingPlans } from "@/data";

const PricingPage = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto p-6">
        <Heading text="Choose Your Pricing Plan" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
      <Heading text="Frequently Asked Question and Answer" />
      <div className="mb-10 rounded-md border">
        {UserQuestions.map((qs) => (
          <QuestionAns
            key={qs.question}
            question={qs.question}
            answer={qs.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
