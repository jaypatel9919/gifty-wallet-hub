import {
  LogIn,
  LogOut,
  UserPlus,
  Store,
  CreditCard,
  Settings,
  AlertTriangle,
  CheckCircle,
  XCircle,
  DollarSign,
  Shield,
} from "lucide-react";

interface LogItem {
  id: string;
  action: string;
  actor: string;
  details: string;
  time: string;
  type: "success" | "warning" | "error" | "info";
}

interface ActivityTimelineProps {
  logs: LogItem[];
}

const getIcon = (action: string) => {
  const actionLower = action.toLowerCase();
  if (actionLower.includes("login")) return LogIn;
  if (actionLower.includes("logout")) return LogOut;
  if (actionLower.includes("user") || actionLower.includes("role")) return UserPlus;
  if (actionLower.includes("store") || actionLower.includes("approved")) return Store;
  if (actionLower.includes("card") || actionLower.includes("transaction")) return CreditCard;
  if (actionLower.includes("settlement")) return DollarSign;
  if (actionLower.includes("network") || actionLower.includes("created")) return Shield;
  if (actionLower.includes("setting")) return Settings;
  if (actionLower.includes("failed")) return AlertTriangle;
  return CheckCircle;
};

const getTypeStyles = (type: string) => {
  switch (type) {
    case "success":
      return "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "warning":
      return "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400";
    case "error":
      return "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "bg-accent/10 text-accent";
  }
};

const getLineColor = (type: string) => {
  switch (type) {
    case "success":
      return "bg-emerald-200 dark:bg-emerald-800";
    case "warning":
      return "bg-amber-200 dark:bg-amber-800";
    case "error":
      return "bg-red-200 dark:bg-red-800";
    default:
      return "bg-border";
  }
};

const ActivityTimeline = ({ logs }: ActivityTimelineProps) => {
  return (
    <div className="space-y-0">
      {logs.map((log, index) => {
        const Icon = getIcon(log.action);
        const isLast = index === logs.length - 1;

        return (
          <div key={log.id} className="relative flex gap-4 pb-6">
            {/* Timeline line */}
            {!isLast && (
              <div
                className={`absolute left-5 top-10 w-0.5 h-full -translate-x-1/2 ${getLineColor(
                  log.type
                )}`}
              />
            )}

            {/* Icon */}
            <div
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getTypeStyles(
                log.type
              )}`}
            >
              <Icon className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-foreground">{log.action}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {log.details}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    by {log.actor}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {log.time}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivityTimeline;
