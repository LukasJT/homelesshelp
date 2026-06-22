interface Point {
  label: string;
  value: number;
  annotation?: string;
}

interface Series {
  name: string;
  color?: string;
  points: Point[];
}

interface Props {
  title: string;
  subtitle?: string;
  series: Series[];
  unit?: string;
  yMin?: number;
  source?: { name: string; url: string };
}

export function LineChart({ title, subtitle, series, unit = "", yMin = 0, source }: Props) {
  const W = 720;
  const H = 280;
  const padLeft = 64;
  const padRight = 20;
  const padTop = 24;
  const padBottom = 50;
  const plotW = W - padLeft - padRight;
  const plotH = H - padTop - padBottom;

  // Use first series x-axis (assumes all series share same labels)
  const xLabels = series[0]?.points.map((p) => p.label) ?? [];
  const allValues = series.flatMap((s) => s.points.map((p) => p.value));
  const max = Math.max(...allValues);
  const min = yMin ?? Math.min(...allValues);
  const range = max - min || 1;

  function x(i: number): number {
    return padLeft + (i / Math.max(xLabels.length - 1, 1)) * plotW;
  }

  function y(v: number): number {
    return padTop + plotH - ((v - min) / range) * plotH;
  }

  // y-axis gridlines (4 ticks)
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => min + t * range);

  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-brand-light/60 bg-white p-5">
      <figcaption className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Chart</p>
        <h3 className="mt-0.5 text-lg font-semibold text-ink">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
      </figcaption>

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={title}>
          {/* gridlines */}
          {ticks.map((t, i) => (
            <g key={i}>
              <line
                x1={padLeft}
                x2={W - padRight}
                y1={y(t)}
                y2={y(t)}
                stroke="#e5e7eb"
                strokeDasharray={i === 0 ? "0" : "2 3"}
              />
              <text
                x={padLeft - 8}
                y={y(t)}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize={11}
                fill="#94a3b8"
              >
                {unit + Math.round(t).toLocaleString()}
              </text>
            </g>
          ))}

          {/* x-axis labels */}
          {xLabels.map((label, i) => (
            <text
              key={label + i}
              x={x(i)}
              y={H - padBottom + 16}
              textAnchor="middle"
              fontSize={11}
              fill="#64748b"
            >
              {label}
            </text>
          ))}

          {/* series */}
          {series.map((s, si) => {
            const color = s.color ?? (si === 0 ? "#0f766e" : "#f59e0b");
            const path = s.points
              .map((p, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(p.value)}`)
              .join(" ");
            return (
              <g key={s.name}>
                <path d={path} stroke={color} strokeWidth={2.5} fill="none" />
                {s.points.map((p, i) => (
                  <g key={p.label + i}>
                    <circle cx={x(i)} cy={y(p.value)} r={4} fill={color} />
                    {p.annotation && (
                      <text
                        x={x(i)}
                        y={y(p.value) - 12}
                        textAnchor="middle"
                        fontSize={10}
                        fill={color}
                        fontWeight={600}
                      >
                        {p.annotation}
                      </text>
                    )}
                  </g>
                ))}
              </g>
            );
          })}

          {/* legend */}
          {series.length > 1 && (
            <g transform={`translate(${padLeft}, 0)`}>
              {series.map((s, si) => (
                <g key={s.name} transform={`translate(${si * 160}, 0)`}>
                  <rect width={12} height={12} fill={s.color ?? (si === 0 ? "#0f766e" : "#f59e0b")} y={4} />
                  <text x={18} y={14} fontSize={12} fill="#1f2937">
                    {s.name}
                  </text>
                </g>
              ))}
            </g>
          )}
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
