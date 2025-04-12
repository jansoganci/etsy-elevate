
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ScrollingStickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls 40% of the page
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPercentage = scrollPosition / (pageHeight - viewportHeight);

      if (scrollPercentage > 0.4) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <Button
        size="lg"
        className="group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-primary"
      >
        Start Free Trial
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};
