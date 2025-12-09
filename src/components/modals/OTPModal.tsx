import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, RefreshCw } from "lucide-react";

interface OTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (otp: string) => void;
  title?: string;
  subtitle?: string;
  digits?: number;
}

const OTPModal = ({
  isOpen,
  onClose,
  onVerify,
  title = "Enter OTP",
  subtitle = "We've sent a code to your registered mobile/email.",
  digits = 6,
}: OTPModalProps) => {
  const [otp, setOtp] = useState<string[]>(Array(digits).fill(""));
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      setOtp(Array(digits).fill(""));
      setTimer(30);
      setError(false);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
  }, [isOpen, digits]);

  useEffect(() => {
    if (timer > 0 && isOpen) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isOpen]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError(false);

    if (value && index < digits - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, digits);
    const newOtp = [...otp];
    pasted.split("").forEach((char, i) => {
      if (i < digits) newOtp[i] = char;
    });
    setOtp(newOtp);
    inputRefs.current[Math.min(pasted.length, digits - 1)]?.focus();
  };

  const handleVerify = () => {
    const otpString = otp.join("");
    if (otpString.length === digits) {
      onVerify(otpString);
    } else {
      setError(true);
    }
  };

  const handleResend = () => {
    setTimer(30);
    setOtp(Array(digits).fill(""));
    inputRefs.current[0]?.focus();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-card border border-border rounded-2xl shadow-xl p-6 w-full max-w-md mx-4 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full gift-gradient mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl text-white">🔐</span>
          </div>
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-2 mb-6" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-12 h-14 text-center text-xl font-semibold rounded-lg border-2 transition-all outline-none
                ${error 
                  ? "border-destructive bg-destructive/10 text-destructive" 
                  : digit 
                    ? "border-accent bg-accent/5" 
                    : "border-border bg-background"
                }
                focus:border-accent focus:ring-2 focus:ring-accent/20
              `}
            />
          ))}
        </div>

        {error && (
          <p className="text-center text-sm text-destructive mb-4">
            Please enter a valid {digits}-digit code
          </p>
        )}

        {/* Timer */}
        <div className="text-center mb-6">
          {timer > 0 ? (
            <p className="text-sm text-muted-foreground">
              Resend code in <span className="text-foreground font-medium">{timer}s</span>
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-sm text-accent hover:underline flex items-center justify-center gap-1 mx-auto"
            >
              <RefreshCw className="h-4 w-4" />
              Resend Code
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button variant="accent" className="w-full" size="lg" onClick={handleVerify}>
            Verify
          </Button>
          <Button variant="ghost" className="w-full" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OTPModal;
