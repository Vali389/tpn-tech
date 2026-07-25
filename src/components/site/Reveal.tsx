import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "zoom";
  as?: ElementType;
};

export function Reveal({ children, className, delay = 0, variant = "up", as }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const variantClass = variant === "left" ? "reveal-x" : variant === "zoom" ? "reveal-zoom" : "reveal";

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn(variantClass, className)}
    >
      {children}
    </Tag>
  );
}