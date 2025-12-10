import { useState, useEffect } from "react";
import { X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QRScanOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (code: string) => void;
}

const QRScanOverlay = ({ isOpen, onClose, onScan }: QRScanOverlayProps) => {
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setScanning(true);
      // Simulate successful scan after 3 seconds
      const timer = setTimeout(() => {
        onScan("GTGF-4521-8847-2233");
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onScan, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full max-w-lg mx-4">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-foreground"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Scanner Frame */}
        <div className="bg-card rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
              <Camera className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Scan QR Code</h2>
            <p className="text-muted-foreground mt-1">
              Position the QR code within the frame
            </p>
          </div>

          {/* Scanner Viewfinder */}
          <div className="relative aspect-square bg-muted rounded-xl overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-accent rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-accent rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-accent rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-accent rounded-br-lg" />

            {/* Scanning line animation */}
            {scanning && (
              <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-scan" />
            )}

            {/* Center target */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-dashed border-accent/50 rounded-lg" />
            </div>

            {/* Mock camera feed placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Camera feed</p>
            </div>
          </div>

          {/* Status */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                {scanning ? "Scanning..." : "Ready to scan"}
              </span>
            </div>
          </div>

          {/* Manual entry link */}
          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="text-sm text-accent hover:underline"
            >
              Enter code manually instead
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% {
            top: 8%;
          }
          50% {
            top: 88%;
          }
          100% {
            top: 8%;
          }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default QRScanOverlay;
