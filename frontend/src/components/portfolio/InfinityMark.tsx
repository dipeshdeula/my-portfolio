import { useId } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  /** Pixel width of the logo */
  size?: number;
  /** Animate the stroke draw + traveling accent */
  animated?: boolean;
  /** SVG stroke width — lower = more refined */
  strokeWidth?: number;
  title?: string;
}

const PATH =
  "M 16 16 C 16 8, 28 8, 32 16 C 36 24, 48 24, 48 16 C 48 8, 36 8, 32 16 C 28 24, 16 24, 16 16 Z";

/**
 * InfinityMark — Dipesh Deula signature infinity (lemniscate) logo,
 * styled with our customized Orange & White / Dark theme tokens.
 */
const InfinityMark = ({
  className,
  size = 28,
  animated = true,
  strokeWidth = 2,
  title = "Dipesh Deula",
}: Props) => {
  const gradId = useId();

  return (
    <svg
      role="img"
      aria-label={title}
      viewBox="0 0 64 32"
      width={size}
      height={(size * 32) / 64}
      className={cn("overflow-visible", className)}
      fill="none"
    >
      <title>{title}</title>
      <defs>
        <linearGradient
          id={gradId}
          x1="0"
          y1="16"
          x2="64"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.95" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Lemniscate path — two tangent loops */}
      <path
        d={PATH}
        stroke={`url(#${gradId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          animated &&
            "[stroke-dasharray:140] animate-[infinity-draw_1.6s_cubic-bezier(0.22,1,0.36,1)_forwards]",
        )}
      />

      {/* Accent dot traveling the loop */}
      {animated && (
        <circle r={Math.max(1.2, strokeWidth * 0.75)} fill="hsl(var(--primary))">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            rotate="auto"
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="linear"
            path={PATH}
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.15;0.85;1"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
      )}
    </svg>
  );
};

export default InfinityMark;
