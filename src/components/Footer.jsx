import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100/60 backdrop-blur supports-[backdrop-filter]:bg-base-100/70">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} className="h-7 w-7" alt="AppDeck Logo" />
              <span className="font-semibold text-lg">AppDeck</span>
            </div>
            <p className="text-sm opacity-80">
              Discover, compare, and install apps with confidence. AppDeck
              curates quality software so you can focus on what matters.
            </p>
          </div>

          <nav>
            <h4 className="font-semibold mb-2">Explore</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">All Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installation">My Installation</NavLink>
              </li>
            </ul>
          </nav>

          <nav>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a href="https://daisyui.com" target="_blank" rel="noreferrer">
                  DaisyUI
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="font-semibold mb-2">Connect</h4>
            <p className="text-sm opacity-80">
              Contributions and feedback are welcome.
            </p>
            <a
              href="https://github.com/dev-rakibul-islam"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary mt-3"
            >
              <FaGithub className="h-4 w-4" />
              Visit GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-base-300 text-xs md:text-sm flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="opacity-70">
            © {new Date().getFullYear()} AppDeck. All rights reserved.
          </div>
          <div className="flex gap-3 opacity-80">
            <a href="#" onClick={(e) => e.preventDefault()}>
              Privacy
            </a>
            <span aria-hidden>•</span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms
            </a>
            <span aria-hidden>•</span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
