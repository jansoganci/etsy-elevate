
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { AnimateOnScroll } from "./AnimateOnScroll"

const ImprovedHeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Your Etsy Listing Assistant
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground leading-relaxed mt-4">
              Create professional, SEO-optimized Etsy listings in minutes. Let AI help you craft compelling titles, descriptions, and tags that sell.
            </p>
          </AnimateOnScroll>

          <div className="mt-8 w-full max-w-5xl mx-auto">
            <AnimateOnScroll delay={200}>
              <div className="relative group">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Before Card */}
                  <div className="p-6 rounded-lg shadow-md bg-[#F3F4F6]">
                    <h3 className="text-lg font-semibold mb-4">Before</h3>
                    <div className="space-y-3">
                      <div className="h-4 bg-[#F9FAFB]/95 rounded" />
                      <div className="h-4 bg-[#F9FAFB]/95 rounded w-3/4" />
                      <div className="h-20 bg-[#F9FAFB]/95 rounded mt-4" />
                    </div>
                  </div>

                  {/* After Card */}
                  <div className="p-6 rounded-lg shadow-md bg-[#EDE9FE]">
                    <h3 className="text-lg font-semibold mb-4">After</h3>
                    <div className="space-y-3">
                      <div className="h-4 bg-[#F9FAFB]/95 rounded" />
                      <div className="h-4 bg-[#F9FAFB]/95 rounded w-3/4" />
                      <div className="h-20 bg-[#F9FAFB]/95 rounded mt-4" />
                    </div>
                  </div>
                </div>

                {/* Slider Handle Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Slider 
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className="w-1/2 max-w-[200px]"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="mt-14">
            <AnimateOnScroll delay={400}>
              <Button 
                size="lg" 
                className="px-8 py-3 hover:translate-x-1 transition-transform duration-200"
              >
                Get Started Free
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImprovedHeroSection

