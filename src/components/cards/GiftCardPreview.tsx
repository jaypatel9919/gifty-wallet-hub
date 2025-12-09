interface GiftCardPreviewProps {
  storeName: string;
  planName: string;
  balance: string;
  cardNumber?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const GiftCardPreview = ({
  storeName,
  planName,
  balance,
  cardNumber = "•••• 1234",
  className = "",
  size = "md",
}: GiftCardPreviewProps) => {
  const sizeClasses = {
    sm: "w-48 h-28 text-xs",
    md: "w-72 h-44 text-sm",
    lg: "w-96 h-56 text-base",
  };

  return (
    <div
      className={`gift-card ${sizeClasses[size]} ${className} p-4 flex flex-col justify-between`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
      
      {/* Content */}
      <div className="relative z-10">
        <p className="text-white/80 font-medium">{storeName}</p>
        <h3 className="text-white font-bold mt-1">{planName}</h3>
      </div>
      
      <div className="relative z-10 flex justify-between items-end">
        <div>
          <p className="text-white/60 text-xs mb-1">Balance</p>
          <p className="text-white font-bold text-xl">{balance}</p>
        </div>
        <p className="text-white/60 font-mono">{cardNumber}</p>
      </div>
    </div>
  );
};

export default GiftCardPreview;
