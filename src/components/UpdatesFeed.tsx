import { useState } from "react";
import UpdateCard, { Update } from "./UpdateCard";
import { Button } from "@/components/ui/button";

interface UpdatesFeedProps {
  updates: Update[];
  maxItems?: number;
  showFilters?: boolean;
  compact?: boolean;
}

const UpdatesFeed = ({ updates, maxItems, showFilters = false, compact = false }: UpdatesFeedProps) => {
  const [filter, setFilter] = useState<"all" | "announcement" | "offer" | "news" | "event">("all");

  const filteredUpdates = filter === "all" 
    ? updates 
    : updates.filter(u => u.type === filter);

  const displayUpdates = maxItems ? filteredUpdates.slice(0, maxItems) : filteredUpdates;

  return (
    <div className="space-y-4">
      {showFilters && (
        <div className="flex gap-2 flex-wrap">
          {["all", "announcement", "offer", "news", "event"].map((type) => (
            <Button
              key={type}
              variant={filter === type ? "accent" : "outline"}
              size="sm"
              onClick={() => setFilter(type as typeof filter)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </div>
      )}

      {displayUpdates.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No updates available
        </div>
      ) : (
        <div className="space-y-3">
          {displayUpdates.map((update) => (
            <UpdateCard key={update.id} update={update} compact={compact} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdatesFeed;
