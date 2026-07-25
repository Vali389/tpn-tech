import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-[#0c162c] shadow-[0_0_25px_rgba(212,175,55,0.6)] backdrop-blur-md transition-all duration-300 ease-[var(--ease-premium)] hover:scale-110 hover:bg-[var(--gradient-gold)] hover:border-white hover:shadow-[0_0_35px_rgba(212,175,55,0.8)] group active:scale-95"
    >
      <ChevronUp className="h-6 w-6 text-white stroke-[2.5] transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
}
