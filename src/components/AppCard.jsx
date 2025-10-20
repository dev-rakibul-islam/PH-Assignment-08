import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

export default function AppCard({ app }) {
  const downloadsCompact = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(app.downloads || 0);

  return (
    <Link
      to={`/app/${app.id}`}
      className="rounded-xl border border-base-300 bg-base-100 hover:shadow transition"
    >
      <div className="px-4 pt-4">
        <div className="h-full bg-base-200/70 rounded-md grid place-items-center overflow-hidden">
          {app.image ? (
            <img
              src={app.image}
              alt={app.title}
              className="h-full object-contain"
              loading="lazy"
            />
          ) : (
            <div className="text-base-content/40 text-sm">No Image</div>
          )}
        </div>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-base md:text-[15px] leading-snug line-clamp-2 min-h-10">
          {app.title}
        </h3>
        <div className="flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded px-2 py-1">
            <span className="select-none">
              <FiDownload />
            </span>
            <span>{downloadsCompact}</span>
          </span>
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-600 border border-amber-200 rounded px-2 py-1">
            <span className="select-none">
              <FaStar />
            </span>
            <span>{app.ratingAvg}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
