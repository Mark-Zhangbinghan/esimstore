// app/plans/page.tsx
import { getAllPlans } from "@/lib/plans";
import { PlansClient } from "./PlansClient";

export default async function PlansPage() {
  const plans = await getAllPlans();
  return <PlansClient plans={plans} />;
}
