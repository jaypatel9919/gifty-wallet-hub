import { useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2, CreditCard, Target, ChevronDown, ChevronUp } from "lucide-react";
import MilestoneFormModal from "@/components/modals/MilestoneFormModal";

interface Milestone {
  id: string;
  type: "spend" | "load" | "visits";
  target: number;
  period: string;
  reward: string;
  rewardValue: number;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  value: number;
  bonus: string;
  sales: number;
  status: string;
  milestones: Milestone[];
}

const initialPlans: Plan[] = [
  { 
    id: "1", 
    name: "Silver Saver", 
    price: 50, 
    value: 50, 
    bonus: "+$2 credit", 
    sales: 156, 
    status: "Active",
    milestones: [
      { id: "m1", type: "spend", target: 50, period: "monthly", reward: "+$3 FREE", rewardValue: 3 }
    ]
  },
  { 
    id: "2", 
    name: "Gold Member", 
    price: 100, 
    value: 110, 
    bonus: "+10% value", 
    sales: 89, 
    status: "Active",
    milestones: [
      { id: "m2", type: "spend", target: 100, period: "monthly", reward: "+$5 FREE", rewardValue: 5 },
      { id: "m3", type: "spend", target: 500, period: "all-time", reward: "Gold Status", rewardValue: 0 }
    ]
  },
  { 
    id: "3", 
    name: "Platinum VIP", 
    price: 200, 
    value: 230, 
    bonus: "+15% value", 
    sales: 34, 
    status: "Active",
    milestones: [
      { id: "m4", type: "spend", target: 200, period: "monthly", reward: "+$15 FREE", rewardValue: 15 },
      { id: "m5", type: "visits", target: 10, period: "monthly", reward: "+$10 FREE", rewardValue: 10 }
    ]
  },
  { 
    id: "4", 
    name: "Holiday Special", 
    price: 75, 
    value: 90, 
    bonus: "+20% value", 
    sales: 0, 
    status: "Draft",
    milestones: []
  },
];

const StorePlans = () => {
  const [plans, setPlans] = useState<Plan[]>(initialPlans);
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [showMilestoneModal, setShowMilestoneModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleAddMilestone = (planId: string) => {
    const plan = plans.find(p => p.id === planId);
    setSelectedPlan(plan || null);
    setShowMilestoneModal(true);
  };

  const handleSaveMilestone = (milestoneData: any) => {
    if (!selectedPlan) return;
    
    const newMilestone: Milestone = {
      id: `m${Date.now()}`,
      type: milestoneData.type,
      target: milestoneData.target,
      period: milestoneData.period,
      reward: milestoneData.rewardType === "topup" ? `+$${milestoneData.rewardValue} FREE` : 
              milestoneData.rewardType === "discount" ? `${milestoneData.rewardValue}% OFF` : 
              `${milestoneData.rewardValue} Points`,
      rewardValue: milestoneData.rewardValue,
    };

    setPlans(plans.map(p => 
      p.id === selectedPlan.id 
        ? { ...p, milestones: [...p.milestones, newMilestone] }
        : p
    ));
  };

  const handleDeleteMilestone = (planId: string, milestoneId: string) => {
    setPlans(plans.map(p => 
      p.id === planId 
        ? { ...p, milestones: p.milestones.filter(m => m.id !== milestoneId) }
        : p
    ));
  };

  return (
    <AdminLayout role="store-admin" title="Gift Card Plans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search plans..." className="pl-10" />
        </div>
        <Button variant="accent">
          <Plus className="h-4 w-4 mr-2" />
          Create Plan
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-card border border-border rounded-xl overflow-hidden card-hover">
            {/* Card Preview */}
            <div className="h-28 gift-gradient p-4 relative">
              <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
              <p className="text-white/80 text-sm">Fashion Hub</p>
              <p className="text-white font-bold">{plan.name}</p>
              {plan.milestones.length > 0 && (
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-2 py-1 bg-white/20 rounded-full">
                  <Target className="h-3 w-3 text-white" />
                  <span className="text-white text-xs font-medium">{plan.milestones.length} Milestone{plan.milestones.length > 1 ? 's' : ''}</span>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-foreground">${plan.price}</span>
                {plan.value !== plan.price && (
                  <span className="text-accent text-sm">(${plan.value} value)</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3">{plan.bonus}</p>
              
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-muted-foreground">{plan.sales} sold</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  plan.status === "Active" ? "status-active" : "bg-muted text-muted-foreground"
                }`}>
                  {plan.status}
                </span>
              </div>

              {/* Milestones Section */}
              <div className="border-t border-border pt-3 mb-3">
                <button
                  onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                  className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Milestones ({plan.milestones.length})
                  </span>
                  {expandedPlan === plan.id ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {expandedPlan === plan.id && (
                  <div className="mt-3 space-y-2">
                    {plan.milestones.length === 0 ? (
                      <p className="text-xs text-muted-foreground text-center py-2">No milestones yet</p>
                    ) : (
                      plan.milestones.map((milestone) => (
                        <div key={milestone.id} className="bg-muted/50 rounded-lg p-2.5 text-xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-foreground capitalize">{milestone.type}</span>
                            <button 
                              onClick={() => handleDeleteMilestone(plan.id, milestone.id)}
                              className="text-destructive hover:text-destructive/80"
                            >
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="text-muted-foreground">
                            {milestone.type === "visits" ? `${milestone.target} visits` : `$${milestone.target}`} / {milestone.period}
                          </p>
                          <p className="text-accent font-medium mt-1">{milestone.reward}</p>
                        </div>
                      ))
                    )}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-2"
                      onClick={() => handleAddMilestone(plan.id)}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Add Milestone
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-3.5 w-3.5 mr-1" />
                  Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-destructive">
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MilestoneFormModal
        isOpen={showMilestoneModal}
        onClose={() => {
          setShowMilestoneModal(false);
          setSelectedPlan(null);
        }}
        planName={selectedPlan?.name}
        onSave={handleSaveMilestone}
      />
    </AdminLayout>
  );
};

export default StorePlans;
