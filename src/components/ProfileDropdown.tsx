import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, Moon, Sun, LogOut, CreditCard } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface ProfileDropdownProps {
  variant?: "light" | "dark";
}

const ProfileDropdown = ({ variant = "light" }: ProfileDropdownProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-9 h-9 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
          <User className="h-5 w-5 text-accent" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-popover border-border">
        <div className="px-3 py-2 border-b border-border">
          <p className="font-medium text-foreground">John Doe</p>
          <p className="text-sm text-muted-foreground">john@example.com</p>
        </div>
        
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/dashboard" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            My Cards
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={toggleTheme} className="cursor-pointer">
          {theme === "dark" ? (
            <>
              <Sun className="h-4 w-4 mr-2" />
              Light Mode
            </>
          ) : (
            <>
              <Moon className="h-4 w-4 mr-2" />
              Dark Mode
            </>
          )}
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild className="cursor-pointer text-destructive focus:text-destructive">
          <Link to="/login" className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
