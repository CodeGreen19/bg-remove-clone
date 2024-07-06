import { Button } from "@/components/ui/button";
import { PricingPlan } from "@/types/type";
import React, { FC } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

type Plan = {
  plan: PricingPlan;
};
const PricingCard: FC<Plan> = ({
  plan: { duration, forWhom, plan_type, price, providedValue },
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-start rounded-lg border bg-white p-4 shadow-md transition-all ${plan_type === "Gold Plan" ? "scale-110 shadow-lg hover:scale-105" : "hover:scale-95"}`}
    >
      <h1 className="relative my-2 text-center text-xl font-semibold">
        {plan_type}
      </h1>
      <span className="relative text-[3rem]">
        <span className="absolute -left-2 top-2 text-[0.9rem]">{"$"}</span>

        {price}
      </span>
      <span className="text-sm">{duration}</span>
      <span className="text-lg">{forWhom}</span>

      <Button className="my-8 w-full rounded-[50px] bg-main py-8 text-lg">
        Subscribe Now
      </Button>
      <ul className="flex w-full flex-col items-start justify-start gap-2 px-2">
        {providedValue.map((data, i) => (
          <li key={i} className="flex_center gap-2">
            <span>
              <FaRegCircleCheck className="text-lg text-green-500" />
            </span>
            <span>{data.get}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
