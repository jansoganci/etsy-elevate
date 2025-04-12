
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const LiveDemoPreview = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              See How Zippify Works
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              From basic product details to a complete, optimized Etsy listing in minutes
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What You Provide</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-1 text-muted-foreground">Product Name</p>
                    <p className="p-2 bg-muted rounded-md">Hand-knitted Alpaca Wool Sweater</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-1 text-muted-foreground">Product Description</p>
                    <p className="p-2 bg-muted rounded-md">Warm sweater made from alpaca wool in blue color, size medium.</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-1 text-muted-foreground">Product Image</p>
                    <div className="w-full h-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                      Product image placeholder
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Zippify Creates</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-1 text-muted-foreground">SEO-Optimized Title</p>
                    <p className="p-2 bg-muted rounded-md">Hand-knitted 100% Alpaca Wool Sweater | Cozy Handmade Winter Pullover | Eco-Friendly Knitwear | Blue Medium Size</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-1 text-muted-foreground">Professional Description</p>
                    <div className="p-2 bg-muted rounded-md h-32 overflow-y-auto text-left">
                      <p className="text-sm text-muted-foreground">Full description preview would appear here...</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-1 text-muted-foreground">SEO Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {["alpaca wool", "handmade sweater", "blue knitwear", "winter pullover", "eco-friendly"].map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-1 text-muted-foreground">Enhanced Image</p>
                    <AspectRatio ratio={4/3} className="bg-muted rounded-md overflow-hidden">
                      <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                        Enhanced image placeholder
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
