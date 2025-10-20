import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <NavBar />
      <main className="container mx-auto bg-base-200">
        {isLoading ? <Loader /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
