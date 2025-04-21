
import { useEffect, useRef, useState } from "react";
import { Search, FileText, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/features/landing/components/AnimateOnScroll";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";

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
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set up intersection observer for section entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
          
          // Start video playback when in view
          if (videoRef.current) {
            videoRef.current.play();
          }
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Set up scroll-based card highlighting for desktop
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!sectionRef.current || cardRefs.current.some(ref => !ref)) return;
      
      // Find which card is most centered in the viewport
      const cards = cardRefs.current;
      let closestCard = 0;
      let minDistance = Infinity;
      
      cards.forEach((card, index) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestCard = index;
        }
      });
      
      setActiveIndex(closestCard);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Handle mobile card click/tap
  const handleCardClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(index);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 overflow-hidden bg-background"
      id="features"
    >
      {/* Full-width video background with gradient overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30 z-10"></div>
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={featureContent[activeIndex].videoSrc} type="video/mp4" />
        </video>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Powerful Tools for <span className="text-primary">Etsy Sellers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simplify your workflow and boost sales with our integrated suite of seller tools.
          </p>
        </AnimateOnScroll>
        
        {/* Feature Cards Section */}
        <TooltipProvider>
          <div className={`
            relative 
            ${isMobile 
              ? "flex flex-col items-center space-y-4" 
              : "grid grid-cols-3 gap-6 max-w-6xl mx-auto"
            }
          `}>
            {featureContent.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={feature.id}
                  ref={el => cardRefs.current[index] = el}
                  className={`
                    relative bg-white/10 dark:bg-black/40 backdrop-blur-sm 
                    rounded-2xl overflow-hidden
                    transition-all duration-500 ease-out
                    ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
                    ${isActive 
                      ? "scale-110 z-10 opacity-100 shadow-xl border-2 border-primary/50" 
                      : "scale-100 opacity-60 border border-white/10"
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    cursor: "pointer",
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="p-6 flex flex-col h-full">
                        {/* Numbered Badge + Icon */}
                        <div className="flex items-center mb-4">
                          <div 
                            className={`
                              mr-3 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold
                              ${index === 0 ? "bg-purple-100 text-purple-600" :
                                index === 1 ? "bg-yellow-100 text-yellow-600" :
                                "bg-green-100 text-green-600"}
                            `}
                          >
                            {feature.id}
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
                        <p className="text-muted-foreground mb-4">{feature.subtitle}</p>
                        
                        {/* Preview Image/Video */}
                        <div className={`
                          mt-auto overflow-hidden rounded-xl border
                          ${isActive ? "ring-2 ring-primary/30 shadow-lg" : ""}
                          ${index === 0 ? "border-purple-200/20" :
                            index === 1 ? "border-yellow-200/20" :
                            "border-green-200/20"}
                        `}>
                          <div className="aspect-video">
                            <video
                              className="w-full h-full object-cover"
                              autoPlay
                              muted
                              loop
                              playsInline
                            >
                              <source src={feature.videoSrc} type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p className="text-sm">Click to view {feature.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </TooltipProvider>
        
        {/* Feature indicator dots for mobile */}
        {isMobile && (
          <div className="flex justify-center mt-6 space-x-2">
            {featureContent.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex 
                    ? "bg-primary w-6" 
                    : "bg-primary/30"
                }`}
                aria-label={`Go to feature ${i + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* CTA Button */}
        <AnimateOnScroll 
          animation="fade-up" 
          delay={300} 
          className="mt-16 flex justify-center"
        >
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
        </AnimateOnScroll>
      </div>
    </section>
  );
};
