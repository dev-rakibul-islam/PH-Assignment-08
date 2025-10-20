export default function Stats({ totals }) {
  const compact = (n) =>
    typeof n === "number"
      ? Intl.NumberFormat("en", {
          notation: "compact",
          maximumFractionDigits: 1,
        }).format(n)
      : n;

  const items = [
    {
      label: "Total Downloads",
      value: compact(totals.downloads ?? 0),
      sub: "21% More Than Last Month",
    },
    {
      label: "Total Reviews",
      value: compact(totals.reviews ?? 0),
      sub: "46% More Than Last Month",
    },
    {
      label: "Active Apps",
      value: `${totals.activeApps ?? 0}+`,
      sub: "31 More Will Launch",
    },
  ];

  return (
    <div className="relative overflow-hidden p-8 md:p-12 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight">
          Trusted By Millions, Built For You
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.label}
              className="text-center rounded-xl px-6 py-6 backdrop-blur-sm"
            >
              <div className="text-sm/5 text-white/80">{it.label}</div>
              <div className="mt-2 text-4xl md:text-5xl font-extrabold">
                {it.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-white/80">
                {it.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
