
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration - subtle pattern effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div 
              className={`inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2 w-fit transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <Sparkles size={16} />
              <span>The Etsy seller's secret weapon</span>
            </div>
            
            <div 
              className={`space-y-2 transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="text-primary">AI-Powered</span> Etsy Listings in 2 Minutes Flat
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-xl">
                Stop struggling with bland descriptions and invisible listings. Zippify transforms your product ideas into SEO-optimized Etsy listings that <span className="font-medium text-foreground">actually sell</span>.
              </p>
            </div>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-2 transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <Button 
                size="lg" 
                className="mt-4 group transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                Create Your First Listing Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="mt-4 hover:bg-background/80 transition-all duration-300 hover:shadow-sm"
              >
                See How It Works
              </Button>
            </div>
            
            <p 
              className={`text-sm text-muted-foreground pt-2 transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <span className="font-medium">✓ No credit card required</span> · Takes less than 60 seconds to start
            </p>
          </div>
          
          <div 
            className={`flex justify-center lg:justify-end relative transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="relative w-full max-w-[500px] h-[400px] rounded-lg overflow-hidden bg-muted shadow-lg transition-all hover:shadow-xl duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for hero image - suggestion: show before/after of an Etsy listing transformation */}
                <div className="flex flex-col items-center text-muted-foreground space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="text-primary" size={20} />
                  </div>
                  <p className="font-medium">Beautiful listing transformation</p>
                  <p className="text-xs max-w-xs text-center">Illustration showing a product photo being transformed into a professional Etsy listing with SEO tags</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -z-10 top-12 -left-6 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
