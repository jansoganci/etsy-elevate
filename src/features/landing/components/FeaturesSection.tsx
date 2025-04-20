
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "./AnimateOnScroll";

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex h-6 animate-fade-in items-center rounded-full bg-secondary px-3 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
              Supercharge your listings
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
              The Smarter Way to Sell on Etsy
            </h2>
            <p className="max-w-[700px] text-muted-foreground text-base leading-relaxed">
              Focus on creating beautiful products, not wrestling with listing details. See how Listify transforms your Etsy shop experience:
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 lg:grid-cols-3">
          <AnimateOnScroll animation="fade-up" delay={200}>
            <Card className="hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">AI-Powered Listings</h3>
                <p className="text-muted-foreground">
                  Generate professional, SEO-optimized listings in seconds using advanced AI technology.
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <Card className="hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Smart Image Enhancement</h3>
                <p className="text-muted-foreground">
                  Automatically enhance product photos and create lifestyle mockups that catch buyers' attention.
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={600}>
            <Card className="hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
                <p className="text-muted-foreground">
                  Get data-driven insights on pricing, keywords, and competitor strategies.
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
