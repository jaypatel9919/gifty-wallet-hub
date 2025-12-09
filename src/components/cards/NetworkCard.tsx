import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Store, Gift } from "lucide-react";

interface NetworkCardProps {
  id: string;
  name: string;
  logo: string;
  banner?: string;
  storeCount: number;
  perks: string;
}

const NetworkCard = ({ id, name, logo, banner, storeCount, perks }: NetworkCardProps) => {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden card-hover">
      {/* Banner */}
      <div className="h-24 gift-gradient-soft relative">
        {banner && (
          <img src={banner} alt="" className="w-full h-full object-cover opacity-50" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      </div>
      
      {/* Logo */}
      <div className="px-6 -mt-8 relative z-10">
        <div className="w-16 h-16 rounded-xl bg-card border-4 border-card shadow-lg flex items-center justify-center overflow-hidden">
          <img src={logo} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 pt-3">
        <h3 className="font-semibold text-lg text-foreground mb-2">{name}</h3>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Store className="h-4 w-4" />
            <span>{storeCount}+ stores</span>
          </div>
          <div className="flex items-center gap-1">
            <Gift className="h-4 w-4 text-accent" />
            <span className="text-accent">{perks}</span>
          </div>
        </div>
        
        <Link to={`/networks/${id}`}>
          <Button variant="accent-outline" className="w-full">
            View Network
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NetworkCard;
