import { Apple, Smartphone } from "lucide-react";

interface WalletPassPreviewProps {
  type: "apple" | "google";
  storeName: string;
  planName: string;
  balance: string;
  cardNumber: string;
  storeLogo?: string;
  className?: string;
}

const WalletPassPreview = ({
  type,
  storeName,
  planName,
  balance,
  cardNumber,
  storeLogo,
  className = "",
}: WalletPassPreviewProps) => {
  if (type === "apple") {
    return (
      <div className={`w-80 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl overflow-hidden shadow-2xl ${className}`}>
        {/* Apple Wallet Header */}
        <div className="px-5 pt-5 pb-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            {storeLogo ? (
              <img src={storeLogo} alt="" className="w-10 h-10 rounded-lg object-cover" />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gift-orange to-gift-pink flex items-center justify-center">
                <span className="text-white font-bold text-lg">{storeName.charAt(0)}</span>
              </div>
            )}
            <div>
              <p className="text-white font-semibold text-sm">{storeName}</p>
              <p className="text-white/60 text-xs">{planName}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-white/40">
            <Apple className="h-4 w-4" />
            <span className="text-xs font-medium">Wallet</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-5 py-6 bg-gradient-to-br from-gift-orange via-gift-pink to-gift-magenta">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-white/70 text-xs uppercase tracking-wider mb-1">Available Balance</p>
              <p className="text-white text-4xl font-bold tracking-tight">{balance}</p>
            </div>
            <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
              <div className="w-full h-full bg-zinc-100 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-3 gap-0.5">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-zinc-800 rounded-sm" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-white/70 text-xs uppercase tracking-wider">Card Number</p>
              <p className="text-white font-mono text-sm">{cardNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-white/70 text-xs uppercase tracking-wider">Status</p>
              <p className="text-white text-sm font-medium">Active</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 bg-zinc-900/80 backdrop-blur flex items-center justify-between">
          <p className="text-white/50 text-xs">Tap to pay at store</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-medium">Ready</span>
          </div>
        </div>
      </div>
    );
  }

  // Google Wallet
  return (
    <div className={`w-80 bg-white rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 ${className}`}>
      {/* Google Wallet Header */}
      <div className="px-5 pt-4 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 flex items-center justify-center">
            <Smartphone className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-zinc-600 text-sm font-medium">Google Wallet</span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Store Info */}
      <div className="px-5 py-4 border-t border-zinc-100">
        <div className="flex items-center gap-3">
          {storeLogo ? (
            <img src={storeLogo} alt="" className="w-12 h-12 rounded-xl object-cover" />
          ) : (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gift-orange to-gift-pink flex items-center justify-center">
              <span className="text-white font-bold text-xl">{storeName.charAt(0)}</span>
            </div>
          )}
          <div>
            <p className="text-zinc-900 font-semibold">{storeName}</p>
            <p className="text-zinc-500 text-sm">{planName}</p>
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="mx-5 mb-5 p-5 bg-gradient-to-br from-gift-orange via-gift-pink to-gift-magenta rounded-2xl">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-white/80 text-xs uppercase tracking-wider mb-1">Balance</p>
            <p className="text-white text-3xl font-bold">{balance}</p>
          </div>
          <div className="px-2 py-1 bg-white/20 rounded-full">
            <span className="text-white text-xs font-medium">Active</span>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-white/60 text-xs">Card</p>
            <p className="text-white font-mono text-sm">{cardNumber}</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-lg p-1.5">
            <div className="w-full h-full bg-zinc-100 rounded flex items-center justify-center">
              <div className="grid grid-cols-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-zinc-700 rounded-sm" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-zinc-50 flex items-center justify-between">
        <p className="text-zinc-400 text-xs">Scan at checkout</p>
        <p className="text-zinc-500 text-xs font-medium">GoToGifty</p>
      </div>
    </div>
  );
};

export default WalletPassPreview;
