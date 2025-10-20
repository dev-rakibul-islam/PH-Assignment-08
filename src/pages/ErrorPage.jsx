import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/error-404.png";

export default function ErrorPage() {
  const err = useRouteError();
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center space-y-4">
        <img src={errorImg} alt="404" className="mx-auto h-40 object-contain" />
        <h1 className="text-3xl font-bold">Oops — something went wrong.</h1>
        <p className="opacity-70">
          {err?.status} {err?.statusText || "Unexpected error"}
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
