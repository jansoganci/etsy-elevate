
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ProblemSolutionCardProps = {
  title: string;
  problem: string;
  solution: string;
  icon: LucideIcon;
  delay?: number;
};

export const ProblemSolutionCard = ({ 
  title, 
  problem, 
  solution, 
  icon: Icon,
  delay = 0 
}: ProblemSolutionCardProps) => {
  return (
    <Card className="h-full border-none shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6 space-y-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <div className="space-y-3">
          <div className="flex items-start group">
            <div className="p-1 rounded-full bg-destructive/20 mr-2 mt-1 group-hover:scale-110 transition-transform">
              <div className="w-4 h-4 flex items-center justify-center">
                <span className="text-destructive text-xs">×</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">{problem}</p>
          </div>
          <div className="flex items-start group">
            <div className="p-1 rounded-full bg-green-500/20 mr-2 mt-1 group-hover:scale-110 transition-transform">
              <span className="text-green-500 text-xs">✓</span>
            </div>
            <p className="text-foreground text-sm">{solution}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
