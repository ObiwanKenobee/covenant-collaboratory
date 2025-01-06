import { Hero } from "@/components/Hero";
import { QuickAccess } from "@/components/QuickAccess";
import { Metrics } from "@/components/Metrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <QuickAccess />
      <Metrics />
    </div>
  );
};

export default Index;