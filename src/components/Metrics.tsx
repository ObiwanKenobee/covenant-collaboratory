import { Card } from "@/components/ui/card";
import { BarChart, Users, Globe } from "lucide-react";

const metrics = [
  {
    name: "Global CAIF Adoption",
    value: "2,300+",
    description: "Organizations worldwide",
    icon: Globe,
  },
  {
    name: "Environmental Impact",
    value: "-15%",
    description: "Carbon footprint reduction",
    icon: BarChart,
  },
  {
    name: "Community Growth",
    value: "50K+",
    description: "Active members",
    icon: Users,
  },
];

export const Metrics = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-caif-sage sm:text-4xl">
            Real-Time Metrics
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Track our global impact and community growth in real-time.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
            {metrics.map((metric) => (
              <Card key={metric.name} className="hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-caif-gold">
                    <metric.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {metric.name}
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-caif-sage">{metric.value}</p>
                  <p className="mt-2 text-sm text-gray-600">{metric.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};