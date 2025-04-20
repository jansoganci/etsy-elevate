
import { Camera } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { Button } from "@/components/ui/button";

const ProcessStepCard = ({ number, title, children }: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="flex-1 bg-white dark:bg-gray-800 border-none shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-[30px] h-[30px] rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            {number}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        {children}
      </CardContent>
    </Card>
  );
};

const ProcessSteps = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex h-6 animate-fade-in items-center rounded-full bg-secondary px-3 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
              See the magic happen
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
              From Idea to Perfect Listing in Minutes
            </h2>
            <p className="max-w-[700px] text-muted-foreground text-base leading-relaxed">
              No more staring at a blank screen. Just add your product details, and watch Listify generate a complete, professional Etsy listing.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <AnimateOnScroll animation="fade-up" delay={200}>
            <ProcessStepCard number="1" title="You Provide the Basics">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Product Name</label>
                  <div className="h-10 px-3 py-2 bg-muted/50 rounded-lg text-sm">
                    Hand-knitted Alpaca Wool Sweater
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Brief Description</label>
                  <div className="h-20 px-3 py-2 bg-muted/50 rounded-lg text-sm">
                    Warm sweater made from alpaca wool in blue, size medium.
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Product Image</label>
                  <div className="h-40 bg-muted/50 rounded-lg flex flex-col items-center justify-center gap-2">
                    <Camera className="w-8 h-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Your product photo</span>
                  </div>
                </div>
              </div>
            </ProcessStepCard>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <ProcessStepCard number="2" title="Listify Delivers the Perfect Listing">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">SEO-Optimized Title</label>
                  <div className="px-3 py-2 bg-muted/10 rounded-lg border border-primary/10 text-sm">
                    Hand-knitted 100% Alpaca Wool Sweater | Cozy Winter Pullover | Eco-Friendly Knitwear
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Professional Description</label>
                  <div className="px-3 py-2 bg-muted/10 rounded-lg border border-primary/10 text-sm line-clamp-2">
                    Wrap yourself in luxurious comfort with our ethically sourced, hand-knitted alpaca wool sweater. Experience the perfect blend of warmth and style with this timeless piece of sustainable fashion.
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Generated Tags</label>
                  <div className="flex flex-wrap gap-2">
                    {["alpaca wool", "handmade sweater", "eco-friendly"].map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/5 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Enhanced Image</label>
                  <div className="h-40 bg-muted/10 rounded-lg border border-primary/10 flex items-center justify-center text-sm text-muted-foreground">
                    Enhanced product image preview
                  </div>
                </div>
              </div>
            </ProcessStepCard>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fade-up" delay={600}>
          <div className="flex flex-col items-center text-center space-y-4">
            <Button 
              size="lg"
              className="px-8 hover:translate-x-1 transition-transform duration-200"
            >
              Create Your First Listing Free
            </Button>
            <p className="text-sm text-muted-foreground">
              Free plan available. No credit card required.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProcessSteps;
