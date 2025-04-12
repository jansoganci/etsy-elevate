
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

type FeatureProps = {
  title: string;
  problem: string;
  solution: string;
};

const Feature = ({ title, problem, solution }: FeatureProps) => (
  <Card className="h-full">
    <CardContent className="p-6 space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="space-y-2">
        <div className="flex items-start">
          <div className="p-1 rounded-full bg-destructive/20 mr-2 mt-1">
            <div className="w-4 h-4 flex items-center justify-center">
              <span className="text-destructive text-xs">×</span>
            </div>
          </div>
          <p className="text-muted-foreground">{problem}</p>
        </div>
        <div className="flex items-start">
          <div className="p-1 rounded-full bg-green-500/20 mr-2 mt-1">
            <Check className="w-4 h-4 text-green-500" />
          </div>
          <p>{solution}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const ProblemSolution = () => {
  const features = [
    {
      title: "Listing Creation",
      problem: "Hours spent writing boring, repetitive listing content",
      solution: "AI generates complete, optimized listings in under 2 minutes"
    },
    {
      title: "SEO Optimization",
      problem: "Confused about which keywords to target for maximum visibility",
      solution: "Data-driven keyword research with popularity insights"
    },
    {
      title: "Professional Content",
      problem: "Struggle to write compelling, error-free descriptions",
      solution: "Perfect, professional copy tailored to your specific product"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Smarter Way to Sell on Etsy
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Zippify solves the most common challenges faced by Etsy sellers
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
