
import { useEffect, useRef, useState } from "react";
import { Search, FileText, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder looping GIFs/videos (these can be replaced with your own files)
const featureMedia = [
  {
    title: "SEO & Keyword Analysis",
    icon: Search,
    subtitle: "Find the best keywords for your shop fast.",
    media: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Effortless Listing Creation",
    icon: FileText,
    subtitle: "AI writes listings that convert sales every time.",
    media: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Visual Photo Editing",
    icon: Image,
    subtitle: "Enhance photos and remove backgrounds instantly.",
    media: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
  }
];

const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;

export const LiveDemoPreview = () => {
  const [activeIdx, setActiveIdx] = useState(1); // center by default
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // For mobile, tap-to-activate; on desktop, sync with scroll
  useEffect(() => {
    if (isMobile()) return;
    const observers: IntersectionObserver[] = [];
    containerRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(idx);
        },
        {
          root: null,
          threshold: 0.55
        }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  // Entry animation trigger
  const [entered, setEntered] = useState([false, false, false]);
  useEffect(() => {
    const timeout: NodeJS.Timeout = setTimeout(() => {
      setEntered([true, true, true]);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Responsive: check mobile on window resize
  useEffect(() => {
    const handler = () => {
      if (isMobile() && activeIdx === -1) setActiveIdx(0);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [activeIdx]);

  return (
    <section className="w-full bg-background py-16 relative overflow-x-hidden">
      {/* 3-col row, stacks on mobile */}
      <div
        className="max-w-6xl mx-auto flex flex-row md:space-x-8 space-x-0 space-y-0 md:space-y-0
                    md:flex-row flex-col space-y-8 md:space-y-0 px-4"
        style={{ minHeight: "420px" }}
      >
        {featureMedia.map((feature, i) => {
          const Icon = feature.icon;
          // Highlight if centered (active)
          const isActive = i === activeIdx;
          const fadeInUp = entered[i]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10";
          return (
            <div
              ref={el => (containerRefs.current[i] = el)}
              key={feature.title}
              tabIndex={0}
              onClick={() => isMobile() && setActiveIdx(i)}
              className={`
                group relative transition-all duration-300 ease-out
                rounded-2xl shadow-lg cursor-pointer
                flex-1 min-w-[0] flex flex-col items-center
                bg-white/70 dark:bg-card border border-muted
                ${isActive ? "scale-105 opacity-100 z-10 ring-2 ring-primary/70 shadow-2xl" : "opacity-50 scale-100"}
                ${fadeInUp}
                md:mx-2 mb-0
                focus:outline-none focus:ring-2 focus:ring-primary
              `}
              style={{
                transitionProperty:
                  "opacity, box-shadow, transform, filter",
                transitionDuration: "300ms",
                willChange: "transform, opacity",
                minHeight: 340,
              }}
            >
              {/* Accent badge and icon */}
              <div className={`flex items-center space-x-3 mt-8`}>
                <span
                  className={`
                    flex items-center justify-center font-bold
                    rounded-full w-10 h-10 text-xl shadow
                    border-4
                    ${
                      i === 0
                        ? "bg-purple-200 text-purple-600 border-purple-300"
                        : i === 1
                        ? "bg-yellow-200 text-yellow-700 border-yellow-300"
                        : "bg-green-200 text-green-700 border-green-300"
                    }
                  `}
                >
                  {i + 1}
                </span>
                <Icon
                  className={`w-8 h-8
                    ${
                      i === 0
                        ? "text-purple-500"
                        : i === 1
                        ? "text-yellow-500"
                        : "text-green-500"
                    }
                  `}
                />
              </div>
              {/* Title */}
              <h3 className="font-extrabold text-2xl md:text-2xl mt-4 mb-2 text-center tracking-tight">
                {feature.title}
              </h3>
              {/* Subtitle */}
              <p className="text-base text-muted-foreground font-medium text-center mb-4 px-2 max-w-[260px]">
                {feature.subtitle}
              </p>
              {/* Media Demo (image/gif/video) */}
              <div
                className={`
                  w-[220px] h-[160px] md:w-[250px] md:h-[180px] rounded-xl
                  bg-muted overflow-hidden flex items-center justify-center
                  mb-7 shadow-inner
                  border-2 border-muted
                  transition-all duration-500
                  ${isActive ? "ring-2 ring-primary/30 shadow-xl" : ""}
                `}
                style={{
                  aspectRatio: "5/4",
                  background: "#f9fafc",
                }}
              >
                {/* Replace with actual looping GIF/video as needed */}
                <img
                  src={feature.media}
                  alt={feature.title}
                  className="object-cover w-full h-full"
                  style={{
                    animation: "fadeIn 0.8s",
                    borderRadius: "12px"
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* Bottom sticky trial CTA */}
      <div className="w-full flex justify-center">
        <div className="fixed bottom-7 left-0 right-0 z-40 flex justify-center pointer-events-none">
          <Button
            size="lg"
            className="px-8 py-4 text-xl font-bold rounded-full shadow-xl bg-primary pointer-events-auto"
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

