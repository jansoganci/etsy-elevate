
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                AI-Powered Etsy Listing Automation
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Create professional Etsy listings in minutes, not hours. Optimize for search, craft perfect descriptions, and boost your sales.
              </p>
            </div>
            <div>
              <Button size="lg" className="mt-4">
                Try Zippify for Free <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] h-[400px] rounded-lg overflow-hidden bg-muted">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Hero illustration placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
