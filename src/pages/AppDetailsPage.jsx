import { useLoaderData, useNavigate } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { isInstalled, installApp } from "../utils/storage.js";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { FiDownload } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegSadTear } from "react-icons/fa";

export default function AppDetailsPage() {
  const { app } = useLoaderData() || {};
  const navigate = useNavigate();

  const [installed, setInstalled] = useState(() =>
    app ? isInstalled(app.id) : false
  );
  const chartData = useMemo(() => {
    if (!app?.ratings) return [];
    return [...app.ratings]
      .sort((a, b) => parseInt(b.name) - parseInt(a.name))
      .map((r) => ({ label: r.name, count: r.count }));
  }, [app]);

  const onInstall = () => {
    installApp(app.id);
    setInstalled(true);
    toast.success("Installed Successfully");
  };

  if (!app) {
    return (
      <div className="text-center py-16 px-4">
        <FaRegSadTear className="text-5xl md:text-6xl mx-auto" />
        <h2 className="text-xl md:text-2xl font-bold mt-4">App Not Found</h2>
        <p className="opacity-70 mt-2">
          The app you are looking for doesn’t exist.
        </p>
        <button
          className="btn btn-primary mt-6 w-full sm:w-auto"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    );
  }

  const downloadsCompact = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(app.downloads || 0);
  const reviewsCompact = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(app.reviews || 0);

  return (
    <div className="space-y-10 px-4 md:px-10 my-10">
      <section className="card">
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 items-start">
            <div className="bg-base-200 rounded-lg p-4 grid place-items-center">
              <img
                src={app.image}
                alt={app.title}
                className="h-24 w-24 sm:h-28 sm:w-28 object-contain"
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-bold break-words">
                  {app.title}
                </h1>
                <div className="text-sm">
                  Developed by{" "}
                  <span className="text-primary">{app.companyName}</span>
                </div>
              </div>
              <hr className="text-slate-300" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 max-w-xl">
                <div className=" p-3 text-center">
                  <div className="flex flex-col items-center sm:items-start justify-center gap-1 text-sm opacity-80">
                    <span className="font-bold text-2xl">
                      <FiDownload />
                    </span>
                    <span>Downloads</span>
                    <span className="text-2xl font-semibold">
                      {downloadsCompact}
                    </span>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <div className="flex flex-col items-center sm:items-start justify-center gap-1 text-sm opacity-80">
                    <span className="font-bold text-2xl">
                      <AiFillStar className="text-amber-500" />
                    </span>
                    <span>Average Ratings</span>
                    <span className="text-2xl font-semibold">
                      {app.ratingAvg}
                    </span>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <div className="flex flex-col items-center sm:items-start justify-center gap-1 text-sm opacity-80">
                    <span className="font-bold text-2xl">
                      <AiOutlineLike />
                    </span>
                    <span>Total Reviews</span>
                    <span className="text-2xl font-semibold">
                      {reviewsCompact}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="btn btn-success w-full sm:w-auto"
                  disabled={installed}
                  onClick={onInstall}
                >
                  {installed ? "Installed" : `Install Now (${app.size} MB)`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="text-slate-300" />
      <section className="card">
        <div className="card-body">
          <h3 className="card-title">Ratings Breakdown</h3>
          <div className="w-full h-64 sm:h-72">
            <ResponsiveContainer>
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ left: 8, right: 16, top: 8, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis
                  type="category"
                  dataKey="label"
                  width={40}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip formatter={(v) => Intl.NumberFormat().format(v)} />
                <Bar dataKey="count" fill="#F59E0B" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <hr className="text-slate-300" />
      <section className="space-y-2">
        <h3 className="text-xl font-semibold">Description</h3>
        <p className="leading-relaxed opacity-90 text-sm sm:text-base break-words">
          {app.description}
        </p>
      </section>
    </div>
  );
}
