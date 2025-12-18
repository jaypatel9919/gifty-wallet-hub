import { Crown, Users, Sparkles, Star, Share2 } from "lucide-react";

interface EnhancedGiftCardProps {
  storeName: string;
  planName: string;
  balance: string;
  cardNumber?: string;
  storeLogo?: string;
  networkLogo?: string;
  networkName?: string;
  ownership: "primary" | "shared" | "gifted";
  sharedBy?: string;
  giftedBy?: string;
  expiresAt?: string;
  milestoneProgress?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const EnhancedGiftCard = ({
  storeName,
  planName,
  balance,
  cardNumber = "•••• 1234",
  storeLogo,
  networkLogo,
  networkName,
  ownership = "primary",
  sharedBy,
  giftedBy,
  expiresAt,
  milestoneProgress,
  className = "",
  size = "md",
  onClick,
}: EnhancedGiftCardProps) => {
  const sizeClasses = {
    sm: "w-56 h-36",
    md: "w-80 h-48",
    lg: "w-96 h-60",
  };

  const getOwnershipBadge = () => {
    switch (ownership) {
      case "primary":
        return (
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg">
            <Crown className="h-3 w-3 text-amber-900" />
            <span className="text-xs font-bold text-amber-900">Owner</span>
          </div>
        );
      case "shared":
        return (
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-lg">
            <Share2 className="h-3 w-3 text-white" />
            <span className="text-xs font-bold text-white">Shared</span>
          </div>
        );
      case "gifted":
        return (
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-gift-pink to-gift-magenta rounded-full shadow-lg">
            <Sparkles className="h-3 w-3 text-white" />
            <span className="text-xs font-bold text-white">Gift</span>
          </div>
        );
    }
  };

  const getCardBackground = () => {
    switch (ownership) {
      case "shared":
        return "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700";
      case "gifted":
        return "bg-gradient-to-br from-gift-orange via-gift-pink to-gift-magenta";
      default:
        return "bg-gradient-to-br from-gift-orange via-gift-pink to-gift-magenta";
    }
  };

  return (
    <div
      onClick={onClick}
      className={`${sizeClasses[size]} ${getCardBackground()} rounded-2xl p-5 relative overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer ${className}`}
    >
      {/* Decorative Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        {ownership === "primary" && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Star className="h-48 w-48 text-white/5" strokeWidth={0.5} />
          </div>
        )}
        {ownership === "shared" && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Users className="h-40 w-40 text-white/5" strokeWidth={0.5} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Top Row */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {(storeLogo || networkLogo) && (
              <img 
                src={storeLogo || networkLogo} 
                alt="" 
                className="w-10 h-10 rounded-xl object-cover border-2 border-white/20 shadow-lg"
              />
            )}
            <div>
              <p className="text-white/80 text-sm font-medium">{storeName}</p>
              <p className="text-white font-bold text-lg leading-tight">{planName}</p>
            </div>
          </div>
          {getOwnershipBadge()}
        </div>

        {/* Middle - Shared/Gift Info */}
        {ownership === "shared" && sharedBy && (
          <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg w-fit">
            <Users className="h-4 w-4 text-white/80" />
            <span className="text-white/90 text-sm">Shared by {sharedBy}</span>
            {expiresAt && (
              <span className="text-white/60 text-xs">• Expires {expiresAt}</span>
            )}
          </div>
        )}
        {ownership === "gifted" && giftedBy && (
          <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg w-fit">
            <Sparkles className="h-4 w-4 text-white/80" />
            <span className="text-white/90 text-sm">Gift from {giftedBy}</span>
          </div>
        )}

        {/* Milestone Progress */}
        {milestoneProgress !== undefined && milestoneProgress > 0 && (
          <div className="absolute left-0 bottom-16 right-0">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-300 to-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(milestoneProgress, 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Bottom Row */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-white/60 text-xs mb-0.5">Balance</p>
            <p className="text-white font-bold text-2xl tracking-tight">{balance}</p>
          </div>
          <div className="text-right">
            <p className="text-white/60 font-mono text-sm">{cardNumber}</p>
            {networkName && (
              <p className="text-white/50 text-xs mt-1">{networkName}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedGiftCard;
