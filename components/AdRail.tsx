import { ReactNode } from "react";

interface AdSlotProps {
  id: string;
  label?: string;
  height?: number;
  sticky?: boolean;
  children?: ReactNode;
}

function AdSlot({ id, label = "Advertisement", height = 600, sticky, children }: AdSlotProps) {
  return (
    <div
      id={`ad-${id}`}
      data-ad-slot={id}
      className={
        "w-[160px] rounded-md border border-dashed border-ink-muted/30 bg-white/60 " +
        (sticky ? "sticky top-24 " : "") +
        "flex items-center justify-center text-center text-xs text-ink-muted"
      }
      style={{ minHeight: height }}
    >
      {children ?? (
        <span className="px-2 leading-snug">
          {label}
          <br />
          <span className="text-[10px] text-ink-muted/70">160 × {height}</span>
        </span>
      )}
    </div>
  );
}

export function AdRail({ side }: { side: "left" | "right" }) {
  // Off by default. Set NEXT_PUBLIC_AD_SLOTS_ENABLED=true in env to show rails.
  const enabled = process.env.NEXT_PUBLIC_AD_SLOTS_ENABLED === "true";
  if (!enabled) return null;
  return (
    <aside
      aria-label={side === "left" ? "Left sponsor rail" : "Right sponsor rail"}
      className="hidden xl:flex flex-col gap-6 shrink-0"
    >
      <AdSlot id={`${side}-top`} height={250} />
      <AdSlot id={`${side}-mid`} height={600} sticky />
    </aside>
  );
}
