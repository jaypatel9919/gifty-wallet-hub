import { Target, Gift, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export interface Milestone {
  id: string;
  title: string;
  description: string;
  type: "spend" | "load" | "visits";
  target: number;
  current: number;
  period: string;
  reward: string;
  rewardValue: number;
  daysRemaining?: number;
  isCompleted: boolean;
  completedAt?: string;
}

interface MilestoneProgressProps {
  milestone: Milestone;
  compact?: boolean;
}

const MilestoneProgress = ({ milestone, compact = false }: MilestoneProgressProps) => {
  const progress = Math.min((milestone.current / milestone.target) * 100, 100);

  if (compact) {
    return (
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Target className="h-4 w-4 text-accent" />
            </div>
            <span className="font-medium text-sm text-foreground">{milestone.title}</span>
          </div>
          <span className="text-xs text-accent font-semibold">{milestone.reward}</span>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between mt-1.5 text-xs text-muted-foreground">
          <span>${milestone.current} / ${milestone.target}</span>
          {milestone.daysRemaining && <span>{milestone.daysRemaining}d left</span>}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card border rounded-xl p-5 ${milestone.isCompleted ? "border-accent/50 bg-accent/5" : "border-border"}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${milestone.isCompleted ? "bg-accent/20" : "bg-accent/10"}`}>
            {milestone.isCompleted ? (
              <Gift className="h-6 w-6 text-accent" />
            ) : (
              <Target className="h-6 w-6 text-accent" />
            )}
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{milestone.title}</h4>
            <p className="text-sm text-muted-foreground">{milestone.description}</p>
          </div>
        </div>
        {milestone.isCompleted ? (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
            ✓ Completed
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gift-pink/10 text-gift-pink">
            {milestone.reward}
          </span>
        )}
      </div>

      {!milestone.isCompleted && (
        <>
          <Progress value={progress} className="h-3 mb-3" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              <span className="text-foreground font-semibold">${milestone.current}</span> / ${milestone.target} {milestone.period}
            </span>
            {milestone.daysRemaining && (
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {milestone.daysRemaining} days left
              </span>
            )}
          </div>
        </>
      )}

      {milestone.isCompleted && milestone.completedAt && (
        <p className="text-sm text-muted-foreground">Completed on {milestone.completedAt}</p>
      )}
    </div>
  );
};

export default MilestoneProgress;
