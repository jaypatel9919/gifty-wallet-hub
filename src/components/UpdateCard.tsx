import { Megaphone, Tag, Calendar, Newspaper } from "lucide-react";

export interface Update {
  id: string;
  sourceType: "network" | "store";
  sourceId: string;
  sourceName: string;
  sourceLogo?: string;
  title: string;
  content: string;
  type: "announcement" | "offer" | "news" | "event";
  publishedAt: string;
}

interface UpdateCardProps {
  update: Update;
  compact?: boolean;
}

const typeIcons = {
  announcement: Megaphone,
  offer: Tag,
  event: Calendar,
  news: Newspaper,
};

const typeColors = {
  announcement: "bg-accent/10 text-accent",
  offer: "bg-gift-pink/10 text-gift-pink",
  event: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  news: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
};

const UpdateCard = ({ update, compact = false }: UpdateCardProps) => {
  const Icon = typeIcons[update.type];

  if (compact) {
    return (
      <div className="flex items-start gap-3 p-3 bg-card border border-border rounded-xl">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${typeColors[update.type]}`}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm text-foreground truncate">{update.title}</p>
          <p className="text-xs text-muted-foreground">{update.sourceName} • {update.publishedAt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden card-hover">
      <div className="p-5">
        <div className="flex items-start gap-4">
          {update.sourceLogo ? (
            <img
              src={update.sourceLogo}
              alt={update.sourceName}
              className="w-12 h-12 rounded-xl object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
              <span className="text-lg font-bold text-muted-foreground">
                {update.sourceName.charAt(0)}
              </span>
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[update.type]}`}>
                {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
              </span>
              <span className="text-xs text-muted-foreground capitalize">{update.sourceType}</span>
            </div>
            <h4 className="font-semibold text-foreground mb-1">{update.title}</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{update.content}</p>
            <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
              <span>{update.sourceName}</span>
              <span>•</span>
              <span>{update.publishedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCard;
