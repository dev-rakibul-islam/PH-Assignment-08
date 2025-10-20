import { useEffect, useState } from "react";
import { getInstalled, uninstallApp } from "../utils/storage.js";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader.jsx";
import { FaDownload, FaStar } from "react-icons/fa";
import { GiBeachBag } from "react-icons/gi";

const formatCompact = (value) => {
  if (value == null) return "0";
  let num = value;
  if (typeof num === "string") {
    num = Number(num.replace(/,/g, ""));
  }
  if (!Number.isFinite(num)) return "0";
  return new Intl.NumberFormat(undefined, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(num);
};

export default function InstallationPage() {
  const [installedIds, setInstalledIds] = useState(getInstalled());
  const [allApps, setAllApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("none");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/allApps.json");
        const data = await res.json();
        setAllApps(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const items = allApps
    .filter((a) => installedIds.includes(a.id))
    .sort((a, b) => {
      if (order === "hl") return a.downloads - b.downloads;
      if (order === "lh") return b.downloads - a.downloads;
      return 0;
    });

  const onUninstall = (id) => {
    const arr = uninstallApp(id);
    setInstalledIds(arr);
    toast.info("Uninstalled");
  };

  return (
    <div className="space-y-8 px-4 md:px-10 my-10">
      <header className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Your AppDeck Installations
        </h1>
        <p className="opacity-70 max-w-2xl mx-auto">
          Review everything you've installed and manage it from one place.
        </p>
      </header>
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="text-sm md:text-base font-medium">
          ({items.length}) Apps Found
        </div>
        <div className="flex gap-2 w-full md:w-auto justify-end">
          <select
            className="select select-bordered select-sm md:select-md"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="lh">High to Low</option>
            <option value="hl">Low to High</option>
          </select>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : items.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl justify-center text-center flex">
            <GiBeachBag />
          </div>
          <h3 className="mt-3 font-semibold">No installed apps yet</h3>
          <p className="opacity-70 mt-1">
            Browse apps and install your favorites.
          </p>
          <Link to="/apps" className="btn btn-primary mt-4">
            Explore Apps
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between p-4 rounded-xl bg-base-100 border border-base-300"
            >
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-16 w-16 rounded-md object-contain bg-base-200"
                />
                <div className="min-w-0">
                  <Link
                    to={`/app/${app.id}`}
                    className="font-semibold hover:underline line-clamp-1"
                    title={app.title}
                  >
                    {app.title}
                  </Link>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span className="text-success flex items-center gap-1">
                      <FaDownload /> {formatCompact(app.downloads)}
                    </span>
                    <span className="text-warning flex items-center gap-1">
                      <FaStar /> {app.ratingAvg}
                    </span>
                    <span className="opacity-70">{app.size} MB</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="btn btn-success btn-sm md:btn-md btn-outline"
                  onClick={() => onUninstall(app.id)}
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
