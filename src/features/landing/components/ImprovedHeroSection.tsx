
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
              AI‑Powered Etsy Listings in 2 Minutes Flat
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground leading-relaxed mt-4">
              Stop struggling with bland descriptions and invisible listings. Zippify transforms your product ideas into SEO‑optimized Etsy listings that actually sell.
            </p>
          </AnimateOnScroll>

          <div className="mt-8 w-full max-w-5xl mx-auto">
            <AnimateOnScroll delay={200}>
              <div className="relative group">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Before Card */}
                  <div className="p-6 rounded-lg shadow-md bg-[#F3F4F6]">
                    <h3 className="text-base font-bold mb-4">Before</h3>
                    <div className="space-y-3">
                      <div className="h-4 bg-[#F9FAFB]/95 rounded" />
                      <div className="h-4 bg-[#F9FAFB]/95 rounded w-3/4" />
                      <div className="h-20 bg-[#F9FAFB]/95 rounded mt-4" />
                    </div>
                  </div>

                  {/* After Card */}
                  <div className="p-6 rounded-lg shadow-md bg-[#EDE9FE]">
                    <h3 className="text-base font-bold mb-4">After</h3>
                    <div className="space-y-3">
                      <div className="h-4 bg-[#F9FAFB]/95 rounded" />
                      <div className="h-4 bg-[#F9FAFB]/95 rounded w-3/4" />
                      <div className="h-20 bg-[#F9FAFB]/95 rounded mt-4" />
                    </div>
                  </div>
                </div>

                {/* Slider Handle Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-1 h-12 bg-gray-300 rounded cursor-grab opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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
                Create Your First Listing Free
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImprovedHeroSection

