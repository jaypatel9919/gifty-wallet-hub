import { useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Edit, Trash2, Percent, Gift, Star, Target, ChevronDown, ChevronUp } from "lucide-react";
import MilestoneFormModal from "@/components/modals/MilestoneFormModal";

interface Milestone {
  id: string;
  type: "spend" | "load" | "visits";
  target: number;
  period: string;
  reward: string;
  rewardValue: number;
  applicableStores: "all" | "selected";
}

const offers = [
  { id: "1", title: "5% Network Cashback", type: "Cashback", status: "Active", stores: "All", expires: "Ongoing" },
  { id: "2", title: "Double Points Tuesday", type: "Points", status: "Active", stores: "All", expires: "Ongoing" },
  { id: "3", title: "Birthday Bonus 20%", type: "Discount", status: "Active", stores: "All", expires: "Ongoing" },
  { id: "4", title: "Holiday Special 15%", type: "Discount", status: "Scheduled", stores: "Selected", expires: "Dec 31, 2024" },
];

const initialMilestones: Milestone[] = [
  { id: "nm1", type: "spend", target: 200, period: "monthly", reward: "+$10 FREE", rewardValue: 10, applicableStores: "all" },
  { id: "nm2", type: "spend", target: 1000, period: "quarterly", reward: "+$50 FREE", rewardValue: 50, applicableStores: "all" },
  { id: "nm3", type: "visits", target: 5, period: "monthly", reward: "+$5 FREE", rewardValue: 5, applicableStores: "selected" },
];

const NetworkOffers = () => {
  const [milestones, setMilestones] = useState<Milestone[]>(initialMilestones);
  const [showMilestoneModal, setShowMilestoneModal] = useState(false);

  const handleSaveMilestone = (milestoneData: any) => {
    const newMilestone: Milestone = {
      id: `nm${Date.now()}`,
      type: milestoneData.type,
      target: milestoneData.target,
      period: milestoneData.period,
      reward: milestoneData.rewardType === "topup" ? `+$${milestoneData.rewardValue} FREE` : 
              milestoneData.rewardType === "discount" ? `${milestoneData.rewardValue}% OFF` : 
              `${milestoneData.rewardValue} Points`,
      rewardValue: milestoneData.rewardValue,
      applicableStores: "all",
    };
    setMilestones([...milestones, newMilestone]);
  };

  const handleDeleteMilestone = (milestoneId: string) => {
    setMilestones(milestones.filter(m => m.id !== milestoneId));
  };

  return (
    <AdminLayout role="network-admin" title="Network Offers & Milestones">
      <Tabs defaultValue="offers" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="offers" className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            Offers
          </TabsTrigger>
          <TabsTrigger value="milestones" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Milestones
          </TabsTrigger>
        </TabsList>

        {/* Offers Tab */}
        <TabsContent value="offers">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search offers..." className="pl-10" />
            </div>
            <Button variant="accent">
              <Plus className="h-4 w-4 mr-2" />
              Create Offer
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-card border border-border rounded-xl p-5 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl gift-gradient flex items-center justify-center">
                    {offer.type === "Cashback" ? (
                      <Percent className="h-6 w-6 text-white" />
                    ) : offer.type === "Points" ? (
                      <Star className="h-6 w-6 text-white" />
                    ) : (
                      <Gift className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    offer.status === "Active" ? "status-active" : "status-pending"
                  }`}>
                    {offer.status}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{offer.title}</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Type: {offer.type}</p>
                  <p>Stores: {offer.stores}</p>
                  <p>Expires: {offer.expires}</p>
                </div>
                <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-3.5 w-3.5 mr-1" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Milestones Tab */}
        <TabsContent value="milestones">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Network-Wide Milestones</h2>
              <p className="text-sm text-muted-foreground">Create milestone rewards that apply across all network stores</p>
            </div>
            <Button variant="accent" onClick={() => setShowMilestoneModal(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Milestone
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="bg-card border border-border rounded-xl overflow-hidden card-hover">
                {/* Header */}
                <div className="h-20 bg-gradient-to-br from-accent/20 to-accent/5 p-4 relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Target className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground capitalize">{milestone.type} Milestone</p>
                      <p className="text-sm text-muted-foreground">{milestone.period}</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-medium status-active">
                    Active
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="bg-muted/50 rounded-xl p-4 mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Target</p>
                    <p className="text-xl font-bold text-foreground">
                      {milestone.type === "visits" ? `${milestone.target} visits` : `$${milestone.target}`}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">per {milestone.period}</p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Reward</p>
                      <p className="font-semibold text-accent">{milestone.reward}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Stores</p>
                      <p className="font-medium text-foreground capitalize">{milestone.applicableStores}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-3 border-t border-border">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="h-3.5 w-3.5 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-destructive"
                      onClick={() => handleDeleteMilestone(milestone.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Add New Card */}
            <button
              onClick={() => setShowMilestoneModal(true)}
              className="h-64 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-3 hover:border-accent hover:bg-accent/5 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Add New Milestone</span>
            </button>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-accent/5 border border-accent/20 rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Target className="h-5 w-5 text-accent" />
              How Network Milestones Work
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Network milestones apply to all cards issued by stores in your network</li>
              <li>• Customers can track progress across any participating store</li>
              <li>• Rewards are funded by the network, distributed to stores based on usage</li>
              <li>• Milestone progress resets based on the configured time period</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <MilestoneFormModal
        isOpen={showMilestoneModal}
        onClose={() => setShowMilestoneModal(false)}
        onSave={handleSaveMilestone}
      />
    </AdminLayout>
  );
};

export default NetworkOffers;
