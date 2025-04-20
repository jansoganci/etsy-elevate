
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "./AnimateOnScroll";

const ProcessStepCard = ({ number, title, children }: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="flex-1 border-none shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
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
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              No more staring at a blank screen. Just add your basic product details, and watch as Zippify transforms them into a complete, professional listing.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimateOnScroll animation="fade-up" delay={200}>
            <ProcessStepCard number="1" title="You Provide the Basics">
              <div className="space-y-4">
                <div className="h-12 bg-muted/50 rounded-lg animate-pulse" />
                <div className="h-24 bg-muted/50 rounded-lg animate-pulse" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-8 bg-muted/50 rounded-lg animate-pulse" />
                  <div className="h-8 bg-muted/50 rounded-lg animate-pulse" />
                </div>
              </div>
            </ProcessStepCard>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <ProcessStepCard number="2" title="Zippify Creates a Complete Listing">
              <div className="space-y-4">
                <div className="bg-muted/10 p-4 rounded-lg border border-primary/10">
                  <div className="h-6 w-3/4 bg-primary/10 rounded mb-3" />
                  <div className="space-y-2">
                    <div className="h-4 bg-muted/50 rounded w-full" />
                    <div className="h-4 bg-muted/50 rounded w-5/6" />
                    <div className="h-4 bg-muted/50 rounded w-4/6" />
                  </div>
                  <div className="flex gap-2 mt-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="px-3 py-1 bg-primary/5 text-primary/70 rounded-full text-xs">
                        #{i} tag
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ProcessStepCard>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
