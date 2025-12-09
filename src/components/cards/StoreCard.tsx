import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface StoreCardProps {
  id: string;
  name: string;
  logo: string;
  city: string;
  category: string;
  isNetwork?: boolean;
}

const StoreCard = ({ id, name, logo, city, category, isNetwork = false }: StoreCardProps) => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
          <img src={logo} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{name}</h3>
            {isNetwork && (
              <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full flex-shrink-0">
                Network
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
            <MapPin className="h-3.5 w-3.5" />
            <span>{city}</span>
          </div>
          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
            {category}
          </span>
        </div>
      </div>
      <Link to={`/stores/${id}`} className="block mt-4">
        <Button variant="outline" className="w-full">
          View Store
        </Button>
      </Link>
    </div>
  );
};

export default StoreCard;
