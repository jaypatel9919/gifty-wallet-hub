import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Store, Network, MapPin, ArrowRight } from "lucide-react";

interface AffiliateInfoProps {
  type: "store" | "network";
  id: string;
  name: string;
  logo?: string;
  description?: string;
  location?: string;
  storeCount?: number;
  perks?: string[];
}

const AffiliateInfo = ({ type, id, name, logo, description, location, storeCount, perks }: AffiliateInfoProps) => {
  const Icon = type === "store" ? Store : Network;
  const linkPath = type === "store" ? `/stores/${id}` : `/networks/${id}`;

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-5">
        <div className="flex items-start gap-4">
          {logo ? (
            <img src={logo} alt={name} className="w-14 h-14 rounded-xl object-cover" />
          ) : (
            <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
              <Icon className="h-7 w-7 text-muted-foreground" />
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                {type === "store" ? "Issuing Store" : "Network"}
              </span>
            </div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            {location && (
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {location}
              </p>
            )}
            {storeCount && (
              <p className="text-sm text-muted-foreground">
                {storeCount} participating stores
              </p>
            )}
          </div>
        </div>

        {description && (
          <p className="text-sm text-muted-foreground mt-4 line-clamp-2">{description}</p>
        )}

        {perks && perks.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {perks.slice(0, 3).map((perk, i) => (
              <span key={i} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                {perk}
              </span>
            ))}
          </div>
        )}

        <Link to={linkPath}>
          <Button variant="outline" size="sm" className="w-full mt-4">
            View {type === "store" ? "Store" : "Network"}
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AffiliateInfo;
