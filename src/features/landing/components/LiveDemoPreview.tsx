
import { useEffect, useRef, useState } from "react";
import { Search, FileText, Image, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/features/landing/components/AnimateOnScroll";
import { 
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Feature content data
const featureContent = [
  {
    id: 1,
    title: "SEO & Keyword Analysis",
    icon: Search,
    subtitle: "Find untapped opportunities with AI-powered keyword research.",
    videoSrc: "https://placehold.it/1280x720.mp4", // Replace with actual video path
    color: "purple"
  },
  {
    id: 2,
    title: "Effortless Listing Creation",
    icon: FileText,
    subtitle: "AI writes conversion-focused listings in seconds.",
    videoSrc: "https://placehold.it/1280x720.mp4", // Replace with actual video path
    color: "yellow"
  },
  {
    id: 3,
    title: "Visual Photo Editing",
    icon: Image,
    subtitle: "Transform product images with one-click enhancements.",
    videoSrc: "https://placehold.it/1280x720.mp4", // Replace with actual video path
    color: "green"
  }
];

export const LiveDemoPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Play the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [activeIndex]);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 overflow-hidden"
      id="features"
    >
      {/* Animated background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20 z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_300px,rgba(155,135,245,0.3),transparent)]"></div>
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Powerful Tools for <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Etsy Sellers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simplify your workflow and boost sales with our integrated suite of seller tools.
          </p>
        </AnimateOnScroll>
        
        {/* Main feature display area */}
        <div className="relative mt-12 md:mt-20 max-w-7xl mx-auto">
          {/* Video/image display for current feature */}
          <div className="mb-12 md:mb-16 relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group">
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-80"></div>
              
              {/* Feature video */}
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay 
                playsInline
                muted 
                loop
              >
                <source src={featureContent[activeIndex].videoSrc} type="video/mp4" />
              </video>
              
              {/* Feature title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center">
                  <div className={`
                    mr-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shrink-0
                    ${activeIndex === 0 ? "bg-purple-100 text-purple-600" :
                      activeIndex === 1 ? "bg-yellow-100 text-yellow-600" :
                      "bg-green-100 text-green-600"}
                  `}>
                    {featureContent[activeIndex].id}
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{featureContent[activeIndex].title}</h3>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl">{featureContent[activeIndex].subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature selection area */}
          {isMobile ? (
            <div className="px-4">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
                onSelect={(index) => {
                  if (typeof index === 'number') {
                    setActiveIndex(index % featureContent.length);
                  }
                }}
              >
                <CarouselContent>
                  {featureContent.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <CarouselItem key={feature.id} className="md:basis-1/2 lg:basis-1/3">
                        <Card className={`border-l-4 ${
                          index === 0 ? "border-l-purple-500" :
                          index === 1 ? "border-l-yellow-500" :
                          "border-l-green-500"
                        } hover:shadow-lg transition-all duration-300 h-full`}>
                          <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                              <Icon className={`
                                w-7 h-7
                                ${index === 0 ? "text-purple-500" :
                                  index === 1 ? "text-yellow-500" :
                                  "text-green-500"}
                              `} />
                              <div className="ml-3 font-semibold text-lg">{feature.title}</div>
                            </div>
                            <p className="text-muted-foreground">{feature.subtitle}</p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2">
                  <CarouselPrevious className="relative -left-0 static" />
                  <CarouselNext className="relative -right-0 static" />
                </div>
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {featureContent.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = index === activeIndex;
                
                return (
                  <Card 
                    key={feature.id}
                    className={`
                      overflow-hidden border-l-4 transition-all duration-300
                      ${isActive ? 'ring-2 ring-primary shadow-lg' : 'opacity-80 hover:opacity-100'}
                      ${index === 0 ? "border-l-purple-500" :
                        index === 1 ? "border-l-yellow-500" :
                        "border-l-green-500"}
                    `}
                    onClick={() => setActiveIndex(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Icon className={`
                          w-6 h-6
                          ${index === 0 ? "text-purple-500" :
                            index === 1 ? "text-yellow-500" :
                            "text-green-500"}
                        `} />
                        <span className="ml-3 font-bold text-lg">{feature.title}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{feature.subtitle}</p>
                      
                      <div className={`
                        mt-4 text-sm font-medium flex items-center
                        ${index === 0 ? "text-purple-500" :
                          index === 1 ? "text-yellow-500" :
                          "text-green-500"}
                        transition-opacity duration-300
                        ${isActive ? 'opacity-100' : 'opacity-0'}
                      `}>
                        <span>Currently viewing</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
        
        {/* CTA Button */}
        <AnimateOnScroll 
          animation="fade-up" 
          delay={300} 
          className="mt-16 flex justify-center"
        >
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-bold rounded-full shadow-xl bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 hover:scale-105 transition-all"
          >
            Start Free Trial
            <ArrowRight className="ml-2" />
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
