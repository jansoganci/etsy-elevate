
import { useEffect, useRef, useState } from "react";
import { Search, FileText, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { AnimateOnScroll } from "@/features/landing/components/AnimateOnScroll";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext 
} from "@/components/ui/carousel";

// Feature media content
const featureMedia = [
  {
    title: "SEO & Keyword Analysis",
    icon: Search,
    subtitle: "Find untapped opportunities with AI-powered keyword research.",
    media: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    color: "purple"
  },
  {
    title: "Effortless Listing Creation",
    icon: FileText,
    subtitle: "AI writes conversion-focused listings in seconds.",
    media: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    color: "yellow"
  },
  {
    title: "Visual Photo Editing",
    icon: Image,
    subtitle: "Transform product images with one-click enhancements.",
    media: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    color: "green"
  }
];

export const LiveDemoPreview = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [entered, setEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation entry effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setEntered(true);
    }, 200);
    
    return () => clearTimeout(timeout);
  }, []);

  // Auto-rotation for carousel on desktop
  useEffect(() => {
    if (isMobile) return;
    
    const startAutoRotation = () => {
      intervalRef.current = setInterval(() => {
        setActiveIdx(prev => (prev + 1) % featureMedia.length);
      }, 5000);
    };
    
    startAutoRotation();
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile]);

  // Pause auto-rotation on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    if (!isMobile && intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setActiveIdx(prev => (prev + 1) % featureMedia.length);
      }, 5000);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-background/80"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container px-4 mx-auto">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Powerful Tools for <span className="text-primary">Etsy Sellers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simplify your workflow and boost sales with our integrated suite of seller tools.
          </p>
        </AnimateOnScroll>
        
        {isMobile ? (
          // Mobile: Vertical carousel
          <Carousel
            className="w-full max-w-md mx-auto"
            setApi={api => {
              api?.on('select', () => {
                const visibleSlide = api.selectedScrollSnap();
                setActiveIdx(visibleSlide);
              });
            }}
          >
            <CarouselContent>
              {featureMedia.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <CarouselItem key={feature.title}>
                    <MobileFeatureCard
                      feature={feature}
                      index={i}
                      Icon={Icon}
                      isActive={i === activeIdx}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {featureMedia.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIdx 
                      ? "bg-primary w-6" 
                      : "bg-primary/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </Carousel>
        ) : (
          // Desktop: Apple-style feature showcase
          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featureMedia.map((feature, i) => {
              const Icon = feature.icon;
              const isActive = i === activeIdx;
              
              return (
                <div
                  key={feature.title}
                  className={`
                    feature-card relative rounded-2xl 
                    transition-all duration-500 ease-out
                    ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
                    ${isActive ? "scale-105 z-10" : "scale-100 opacity-70"}
                  `}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveIdx(i)}
                >
                  <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col">
                    {/* Feature Badge + Icon */}
                    <div className="flex items-center mb-4">
                      <div 
                        className={`
                          mr-3 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold
                          ${i === 0 ? "bg-purple-100 text-purple-600 border-2 border-purple-200" :
                            i === 1 ? "bg-yellow-100 text-yellow-600 border-2 border-yellow-200" :
                            "bg-green-100 text-green-600 border-2 border-green-200"}
                        `}
                      >
                        {i + 1}
                      </div>
                      <Icon className={`
                        w-8 h-8
                        ${i === 0 ? "text-purple-500" :
                          i === 1 ? "text-yellow-500" :
                          "text-green-500"}
                      `} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    
                    {/* Subtitle */}
                    <p className="text-muted-foreground mb-6">{feature.subtitle}</p>
                    
                    {/* Media Display */}
                    <div className="mt-auto">
                      <div className={`
                        overflow-hidden rounded-xl border-2
                        ${isActive ? "ring-2 ring-primary/30 shadow-lg" : ""}
                        ${i === 0 ? "border-purple-200/20" :
                          i === 1 ? "border-yellow-200/20" :
                          "border-green-200/20"}
                      `}>
                        <AspectRatio ratio={16/9}>
                          <img
                            src={feature.media}
                            alt={feature.title}
                            className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                          />
                        </AspectRatio>
                      </div>
                      
                      {/* Feature detail button */}
                      <div className={`
                        mt-4 flex justify-end
                        ${i === 0 ? "text-purple-500" :
                          i === 1 ? "text-yellow-500" :
                          "text-green-500"}
                      `}>
                        <Button
                          variant="ghost"
                          className="font-medium group"
                        >
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1 group-hover:translate-x-1 transition-transform"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {/* Apple-style feature indicator dots */}
        {!isMobile && (
          <div className="flex justify-center mt-12 space-x-2">
            {featureMedia.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIdx 
                    ? "bg-primary w-6" 
                    : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Sticky CTA */}
        <div className="mt-16 flex justify-center">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-bold rounded-full shadow-xl bg-primary hover:bg-primary/90 hover:scale-105 transition-all"
          >
            Start Free Trial
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Mobile Feature Card component
const MobileFeatureCard = ({ 
  feature, 
  index, 
  Icon, 
  isActive 
}: { 
  feature: typeof featureMedia[0]; 
  index: number; 
  Icon: any; 
  isActive: boolean;
}) => {
  return (
    <div className={`
      w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6
      transition-all duration-300 ease-out
      ${isActive ? "ring-2 ring-primary/30 shadow-lg" : ""}
    `}>
      {/* Feature Badge + Icon */}
      <div className="flex items-center mb-4">
        <div 
          className={`
            mr-3 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold
            ${index === 0 ? "bg-purple-100 text-purple-600 border-2 border-purple-200" :
              index === 1 ? "bg-yellow-100 text-yellow-600 border-2 border-yellow-200" :
              "bg-green-100 text-green-600 border-2 border-green-200"}
          `}
        >
          {index + 1}
        </div>
        <Icon className={`
          w-8 h-8
          ${index === 0 ? "text-purple-500" :
            index === 1 ? "text-yellow-500" :
            "text-green-500"}
        `} />
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
      
      {/* Subtitle */}
      <p className="text-muted-foreground mb-6">{feature.subtitle}</p>
      
      {/* Media Display */}
      <div className="overflow-hidden rounded-xl border-2 border-white/10">
        <AspectRatio ratio={16/9}>
          <img
            src={feature.media}
            alt={feature.title}
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
          />
        </AspectRatio>
      </div>
      
      {/* Feature detail button */}
      <div className={`
        mt-4 flex justify-end
        ${index === 0 ? "text-purple-500" :
          index === 1 ? "text-yellow-500" :
          "text-green-500"}
      `}>
        <Button
          variant="ghost"
          className="font-medium group"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
};
