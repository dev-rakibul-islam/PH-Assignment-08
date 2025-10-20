import { Link, useLoaderData, useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";
import AppCard from "../components/AppCard.jsx";
import Stats from "../components/Stats.jsx";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";

export default function HomePage() {
  const apps = useLoaderData();
  const navigate = useNavigate();

  const totals = {
    downloads: apps.reduce((a, b) => a + b.downloads, 0),
    reviews: apps.reduce((a, b) => a + b.reviews, 0),
    ratingAvg: apps.reduce((a, b) => a + b.ratingAvg, 0) / apps.length,
    activeApps: apps.length,
  };

  return (
    <div className="my-10">
      <section className="relative overflow-hidden px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Better
            <br />
            <span className="bg-gradient-to-r font-extrabold from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Apps
            </span>
            <span className="select-none"> </span>
            <span className="text-base-content">with AppDeck</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-base-content/70">
            AppDeck helps you find, compare, and install trusted apps. Explore
            curated picks, check real metrics, and manage your installations in
            one place.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-white text-base-content border border-base-300 shadow-sm px-4 py-2 hover:shadow md:px-5"
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGooglePlaystore size={18} />
              <span className="font-medium">Google Play</span>
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-white text-base-content border border-base-300 shadow-sm px-4 py-2 hover:shadow md:px-5"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <FaAppStore size={18} />
              <span className="font-medium">App Store</span>
            </a>
          </div>
        </div>
        <div className="relative mt-10">
          <img
            src={hero}
            alt="Hero"
            className="mx-auto max-w-xl w-full drop-shadow-2xl"
          />
        </div>
      </section>

      <Stats totals={totals} />

      <section className="space-y-6 px-4 md:px-10 my-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Trending on AppDeck
          </h2>
          <p className="text-sm md:text-base text-base-content/70 max-w-2xl mx-auto">
            Handpicked apps with strong downloads and ratings. Tap a card to see
            details.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {apps.slice(0, 8).map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="flex justify-center pb-6">
          <button
            className="btn btn-primary btn-sm md:btn-md"
            onClick={() => navigate("/apps")}
          >
            Show All
          </button>
        </div>
      </section>
    </div>
  );
}
