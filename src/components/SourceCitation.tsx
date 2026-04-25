import { ExternalLink } from "lucide-react";
import type { Source } from "@/types/politician";

interface SourceCitationProps {
  sources?: Source[];
  className?: string;
}

export function SourceCitation({ sources, className = "" }: SourceCitationProps) {
  if (!sources || sources.length === 0) return null;
  return (
    <p className={`text-xs text-muted-foreground mt-2 flex flex-wrap items-center gap-x-1 gap-y-0.5 ${className}`}>
      <span className="font-medium">Fonte:</span>
      {sources.map((s, i) => (
        <span key={i} className="inline-flex items-center">
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 underline decoration-dotted underline-offset-2 hover:text-primary transition-colors"
          >
            {s.label}
            <ExternalLink className="w-3 h-3" />
          </a>
          {i < sources.length - 1 && <span className="mx-1">·</span>}
        </span>
      ))}
    </p>
  );
}
