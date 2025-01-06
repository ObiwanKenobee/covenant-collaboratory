import { Globe, Heart, Scale } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-caif-sage/10 to-caif-sky/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <Globe className="h-8 w-8 text-caif-sage animate-fadeIn" style={{ animationDelay: "0.2s" }} />
            <Heart className="h-8 w-8 text-caif-gold animate-fadeIn" style={{ animationDelay: "0.4s" }} />
            <Scale className="h-8 w-8 text-caif-sky animate-fadeIn" style={{ animationDelay: "0.6s" }} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-caif-sage sm:text-6xl animate-fadeIn" style={{ animationDelay: "0.8s" }}>
            Empowering AI to Serve Humanity with Wisdom and Justice
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-fadeIn" style={{ animationDelay: "1s" }}>
            Join us in shaping the future of ethical AI development through biblical wisdom and modern innovation.
          </p>
        </div>
      </div>
    </div>
  );
};