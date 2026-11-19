import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
}

const ThemeToggle = ({ className, showLabels = false }: ThemeToggleProps) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "inline-flex h-9 items-center rounded-full border border-border bg-surface/80 p-1",
          className,
        )}
        aria-hidden
      >
        <span className="h-7 w-7 rounded-full" />
        <span className="h-7 w-7 rounded-full" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  if (showLabels) {
    const options = [
      { id: "light", label: "Light", icon: Sun },
      { id: "dark", label: "Dark", icon: Moon },
      { id: "system", label: "System", icon: Monitor },
    ] as const;

    return (
      <div
        className={cn(
          "grid grid-cols-3 gap-1 rounded-lg border border-border bg-surface p-1",
          className,
        )}
        role="group"
        aria-label="Appearance theme"
      >
        {options.map(({ id, label, icon: Icon }) => {
          const active = theme === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setTheme(id)}
              className={cn(
                "inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-[12px] font-medium transition-all duration-200",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex h-9 items-center gap-0.5 rounded-full border border-border bg-surface/90 p-1 shadow-soft backdrop-blur-md",
        className,
      )}
      role="group"
      aria-label="Appearance theme"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Light theme (Orange & White)"
        title="Light theme (Orange & White)"
        className={cn(
          "inline-flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200",
          !isDark
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        <Sun className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Dark theme"
        title="Dark theme"
        className={cn(
          "inline-flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200",
          isDark
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        <Moon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default ThemeToggle;
