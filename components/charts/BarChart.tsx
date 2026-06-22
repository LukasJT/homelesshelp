interface Datum {
  label: string;
  value: number;
  color?: string;
  highlight?: boolean;
}

interface Props {
  title: string;
  subtitle?: string;
  data: Datum[];
  unit?: string;
  source?: { name: string; url: string };
  // horizontal layout (default) puts long labels on the left
  layout?: "horizontal" | "vertical";
}

export function BarChart({
  title,
  subtitle,
  data,
  unit = "",
  source,
  layout = "horizontal",
}: Props) {
  const max = Math.max(...data.map((d) => d.value));
  const W = 700;
  const labelWidth = 180;
  const barHeight = 26;
  const gap = 12;
  const H = data.length * (barHeight + gap) + 24;

  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-brand-light/60 bg-white p-5">
      <figcaption className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Chart</p>
        <h3 className="mt-0.5 text-lg font-semibold text-ink">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
      </figcaption>

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={title}>
          {data.map((d, i) => {
            const y = i * (barHeight + gap) + 12;
            const barW = ((W - labelWidth - 80) * d.value) / max;
            const fill = d.color ?? (d.highlight ? "#f59e0b" : "#0f766e");
            return (
              <g key={d.label}>
                <text
                  x={labelWidth - 8}
                  y={y + barHeight / 2}
                  textAnchor="end"
                  dominantBaseline="middle"
                  fontSize={13}
                  fill="#1f2937"
                >
                  {d.label}
                </text>
                <rect
                  x={labelWidth}
                  y={y}
                  width={barW}
                  height={barHeight}
                  rx={3}
                  fill={fill}
                />
                <text
                  x={labelWidth + barW + 6}
                  y={y + barHeight / 2}
                  dominantBaseline="middle"
                  fontSize={12}
                  fill="#475569"
                >
                  {unit + d.value.toLocaleString()}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {source && (
        <p className="mt-3 text-xs text-ink-muted">
          Source:{" "}
          <a
            className="text-brand underline"
            href={source.url}
            target="_blank"
            rel="noreferrer"
          >
            {source.name} ↗
          </a>
        </p>
      )}
    </figure>
  );
}
