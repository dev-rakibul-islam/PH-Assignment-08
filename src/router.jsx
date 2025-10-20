import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AllAppsPage from "./pages/AllAppsPage.jsx";
import InstallationPage from "./pages/InstallationPage.jsx";
import AppDetailsPage from "./pages/AppDetailsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Loader from "./components/Loader.jsx";

const fetchAllApps = async () => {
  const res = await fetch("/allApps.json");
  if (!res.ok)
    throw new Response("Failed to load apps", { status: res.status });
  return res.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: fetchAllApps,
      },
      {
        path: "apps",
        element: <AllAppsPage />,
        loader: fetchAllApps,
      },
      {
        path: "installation",
        element: <InstallationPage />,
      },
      {
        path: "app/:id",
        element: <AppDetailsPage />,
        loader: async ({ params }) => {
          const data = await fetchAllApps();
          const id = Number(params.id);
          const app = data.find((a) => a.id === id);
          return { app };
        },
      },
    ],
  },
]);

export default router;
