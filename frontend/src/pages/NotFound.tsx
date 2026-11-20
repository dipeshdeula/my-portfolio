import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 — Page Not Found | Dipesh Deula";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    return () => {
      document.head.removeChild(meta);
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center px-6">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
          404 Error
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Return to Portfolio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
