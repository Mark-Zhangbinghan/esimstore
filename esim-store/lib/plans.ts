export interface Plan {
  id: string;
  name: string;
  price: string;
  validity: number;
  description: string;
}

export const plans = [
  {
    id: "1",
    name: "Global 1GB",
    price: "$10",
    validity: 30,
    description: "1GB Data Available Globally",
  },
  {
    id: "2",
    name: "Europe 3GB",
    price: "$20",
    validity: 30,
    description: "3GB Data Available in Europe",
  },
  {
    id: "3",
    name: "Asia 5GB",
    price: "$25",
    validity: 30,
    description: "5GB Data Available in Asia",
  },
];

export async function getAllPlans() {
  return plans;
}

export async function getFeaturedPlans() {
  return plans.slice(0, 2);
}

export async function getPlanById(id: string) {
  return plans.find((p) => p.id === id);
}
