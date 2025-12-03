// app/page.tsx
import HeroSection from "../components/HeroSection/HeroSection";
import FeatureSection from "../components/FeatureSection";
import PlanCard from "../components/PlanCard/PlanCard";
import WhyChooseSection from "../components/MainPage/WhyChooseSection";
import CustomerReviewsSection from "../components/MainPage/CustomerReviewsSection";
import HowItWorksSection from "../components/MainPage/HowItWorksSection";
import { getFeaturedPlans } from "../lib/plans";

export default async function Home() {
  const plans = await getFeaturedPlans();

  return (
    <div>
      <HeroSection />
      {/* <FeatureSection /> */}
      <WhyChooseSection />
      <CustomerReviewsSection />
      <HowItWorksSection />
      {/* <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div> */}
    </div>
  );
}
