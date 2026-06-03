import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const STORAGE_KEY = "netcradus_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (storedValue === "accepted" || storedValue === "declined") {
      return;
    }

    setVisible(true);

    const timer = window.setTimeout(() => {
      setMounted(true);
    }, 20);

    return () => window.clearTimeout(timer);
  }, []);

  const handleChoice = (value) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setMounted(false);
    window.setTimeout(() => setVisible(false), 400);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] border-t-2 border-[#f97316] bg-[var(--color-surface)] px-6 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-[ease] sm:px-8"
      style={{ transform: mounted ? "translateY(0)" : "translateY(100%)", transitionDuration: "0.4s" }}
    >
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[#f97316]">
            <Shield size={16} />
          </span>
          <p className="text-[13px] leading-relaxed text-text-secondary">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to use our site, you consent to our use of cookies.{" "}
            <Link to="/policy" className="font-semibold text-accent transition hover:text-accent-bright">
              Learn more
            </Link>
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="inline-flex items-center justify-center rounded-full bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#fb923c]"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-semibold text-text-secondary transition hover:border-zinc-500 hover:text-text-primary"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
