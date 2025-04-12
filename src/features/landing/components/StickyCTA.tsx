
import { Button } from "@/components/ui/button";

export const StickyCTA = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Etsy Shop?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
              Join thousands of Etsy sellers who save time and increase sales with Zippify
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row justify-center">
            <Button size="lg" className="min-w-[200px]">
              Try Zippify Free
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-muted-foreground/20 border-2 border-background flex items-center justify-center text-xs font-medium"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by 5,000+ Etsy sellers worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
