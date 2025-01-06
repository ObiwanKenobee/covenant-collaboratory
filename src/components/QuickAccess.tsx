import { Shield, Scale, Trees } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    name: "Ethical Guidelines",
    description: "Comprehensive framework for AI development based on biblical principles",
    icon: Shield,
  },
  {
    name: "AI Compliance",
    description: "Tools and resources for maintaining ethical AI standards",
    icon: Scale,
  },
  {
    name: "Stewardship Initiatives",
    description: "Projects promoting responsible AI use and environmental care",
    icon: Trees,
  },
];

export const QuickAccess = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-caif-sage sm:text-4xl">
            Quick Access
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Navigate through our key features designed to promote ethical AI development and deployment.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.name} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-caif-sage">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};