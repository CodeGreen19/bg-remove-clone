export type ProvidedValue = {
  get: string;
};

export type PricingPlan = {
  plan_type: "Silver Plan" | "Gold Plan" | "Platinum Plan";
  price: number;
  duration: string;
  forWhom: string;
  providedValue: ProvidedValue[];
};
