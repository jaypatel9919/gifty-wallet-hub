import { useEffect, useState, useRef } from "react";
import { LucideIcon } from "lucide-react";

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon?: LucideIcon;
  duration?: number;
}

const StatCounter = ({ value, label, prefix = "", suffix = "", icon: Icon, duration = 2000 }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, value]);

  const animateCount = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toLocaleString();
  };

  return (
    <div ref={ref} className="text-center">
      {Icon && (
        <div className="w-14 h-14 rounded-2xl gift-gradient mx-auto mb-4 flex items-center justify-center shadow-lg">
          <Icon className="h-7 w-7 text-white" />
        </div>
      )}
      <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
        {prefix}{formatNumber(count)}{suffix}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatCounter;
