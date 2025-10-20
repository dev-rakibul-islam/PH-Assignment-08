import { useLoaderData } from "react-router-dom";
import { useMemo, useState } from "react";
import AppCard from "../components/AppCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { FaRegSadTear } from "react-icons/fa";
import Loader from "../components/Loader.jsx";

export default function AllAppsPage() {
  const apps = useLoaderData();
  const [term, setTerm] = useState("");
  const [searching, setSearching] = useState(false);

  const filtered = useMemo(() => {
    const t = term.trim().toLowerCase();
    return t
      ? apps.filter((a) => a.title.toLowerCase().includes(t))
      : apps.slice();
  }, [apps, term]);

  return (
    <div className="space-y-8 px-4 md:px-10 my-10">
      <header className="text-center space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">All Apps on AppDeck</h1>
        <p className="opacity-80">
          Browse the full catalog and quickly find the right tool for the job.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="text-sm opacity-80">Total Apps: {filtered.length}</div>
        <div className="flex gap-2 w-full md:w-auto">
          <SearchBar
            placeholder="Search by title…"
            onChange={(v) => setTerm(v)}
            onSearchingChange={setSearching}
          />
        </div>
      </div>

      {searching ? (
        <Loader />
      ) : filtered.length === 0 ? (
        <div className="text-center py-10 flex flex-col items-center">
          <FaRegSadTear className="text-5xl text-slate-400" />
          <p className="mt-2 font-medium">No App Found</p>
          <p className="opacity-70 text-sm">Try adjusting your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
