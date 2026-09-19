import { ReactNode } from "react";
import { AdRail } from "./AdRail";

export function RailedLayout({ children, ads = false }: { children: ReactNode; ads?: boolean }) {
  return (
    <div className="mx-auto flex max-w-[1700px] gap-6 px-3">
      <AdRail side="left" enabled={ads} />
      <div className="min-w-0 flex-1">{children}</div>
      <AdRail side="right" enabled={ads} />
    </div>
  );
}
