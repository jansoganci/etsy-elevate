
import { useEffect, useRef, useState } from "react";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "zoom-in" | "fade-in";
  delay?: number;
  threshold?: number;
  className?: string;
  duration?: number;
};

export const AnimateOnScroll = ({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  className = "",
  duration = 700,
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-left": "translate-x-10 opacity-0",
    "fade-right": "-translate-x-10 opacity-0",
    "zoom-in": "scale-95 opacity-0",
    "fade-in": "opacity-0",
  };

  const getAnimationClass = () => {
    return animationClasses[animation];
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isVisible
          ? "translate-y-0 translate-x-0 scale-100 opacity-100"
          : getAnimationClass()
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};
