import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Gift, TrendingUp, Calendar, DollarSign } from "lucide-react";

interface MilestoneFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  onSave?: (milestone: MilestoneData) => void;
}

interface MilestoneData {
  type: "spend" | "load" | "visits";
  target: number;
  period: "weekly" | "monthly" | "quarterly" | "all-time";
  rewardType: "topup" | "discount" | "bonus";
  rewardValue: number;
  description: string;
}

const MilestoneFormModal = ({ isOpen, onClose, planName, onSave }: MilestoneFormModalProps) => {
  const [type, setType] = useState<"spend" | "load" | "visits">("spend");
  const [target, setTarget] = useState("100");
  const [period, setPeriod] = useState<"weekly" | "monthly" | "quarterly" | "all-time">("monthly");
  const [rewardType, setRewardType] = useState<"topup" | "discount" | "bonus">("topup");
  const [rewardValue, setRewardValue] = useState("5");

  const handleSave = () => {
    onSave?.({
      type,
      target: parseFloat(target),
      period,
      rewardType,
      rewardValue: parseFloat(rewardValue),
      description: getDescription(),
    });
    onClose();
  };

  const getDescription = () => {
    const periodText = {
      weekly: "per week",
      monthly: "per month",
      quarterly: "per quarter",
      "all-time": "total",
    }[period];

    const typeText = {
      spend: `Spend $${target}`,
      load: `Load $${target}`,
      visits: `Visit ${target} times`,
    }[type];

    const rewardText = {
      topup: `$${rewardValue} free top-up`,
      discount: `${rewardValue}% discount`,
      bonus: `${rewardValue} bonus points`,
    }[rewardType];

    return `${typeText} ${periodText} → Get ${rewardText}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-accent" />
            Create Milestone
            {planName && <span className="text-muted-foreground font-normal">for {planName}</span>}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 py-4">
          {/* Milestone Type */}
          <div className="space-y-2">
            <Label>Milestone Type</Label>
            <Select value={type} onValueChange={(v) => setType(v as typeof type)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spend">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-gift-pink" />
                    Spend Amount
                  </div>
                </SelectItem>
                <SelectItem value="load">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-emerald-500" />
                    Load Amount
                  </div>
                </SelectItem>
                <SelectItem value="visits">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    Store Visits
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Target & Period */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{type === "visits" ? "Target Visits" : "Target Amount ($)"}</Label>
              <Input
                type="number"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder={type === "visits" ? "10" : "100"}
              />
            </div>
            <div className="space-y-2">
              <Label>Time Period</Label>
              <Select value={period} onValueChange={(v) => setPeriod(v as typeof period)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="all-time">All Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Reward */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Gift className="h-4 w-4 text-gift-orange" />
              Reward (Store-funded)
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <Select value={rewardType} onValueChange={(v) => setRewardType(v as typeof rewardType)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="topup">Free Top-up ($)</SelectItem>
                  <SelectItem value="discount">Discount (%)</SelectItem>
                  <SelectItem value="bonus">Bonus Points</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="number"
                value={rewardValue}
                onChange={(e) => setRewardValue(e.target.value)}
                placeholder="5"
              />
            </div>
          </div>

          {/* Preview */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Preview</p>
            <p className="text-foreground font-medium">{getDescription()}</p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button variant="accent" onClick={handleSave}>Add Milestone</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MilestoneFormModal;
