import { useState } from "react";
import { Check, ChevronDown, Store } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoreOption {
  id: string;
  name: string;
  city: string;
}

interface StoreSwitcherProps {
  stores: StoreOption[];
  currentStore: StoreOption;
  onStoreChange: (store: StoreOption) => void;
}

const StoreSwitcher = ({ stores, currentStore, onStoreChange }: StoreSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-sidebar-accent/50 hover:bg-sidebar-accent transition-colors w-full"
      >
        <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
          <Store className="h-4 w-4 text-sidebar-primary-foreground" />
        </div>
        <div className="flex-1 text-left min-w-0">
          <p className="text-sm font-medium text-sidebar-foreground truncate">{currentStore.name}</p>
          <p className="text-xs text-sidebar-foreground/60 truncate">{currentStore.city}</p>
        </div>
        <ChevronDown className={cn("h-4 w-4 text-sidebar-foreground/60 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 py-1 max-h-64 overflow-y-auto">
            {stores.map((store) => (
              <button
                key={store.id}
                onClick={() => {
                  onStoreChange(store);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 w-full hover:bg-muted transition-colors",
                  currentStore.id === store.id && "bg-muted"
                )}
              >
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <Store className="h-4 w-4 text-foreground" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{store.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{store.city}</p>
                </div>
                {currentStore.id === store.id && (
                  <Check className="h-4 w-4 text-accent" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StoreSwitcher;
