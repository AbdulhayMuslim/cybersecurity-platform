"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "top", title: "Security core" },
  { id: "phishing", title: "Phishing defense" },
  { id: "passwords", title: "Password security" },
  { id: "network", title: "Network awareness" },
  { id: "training", title: "Practical training" },
  { id: "contact", title: "Start your mission" },
];

export default function SectionDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers = sections.map(({ id }, index) => {
      const section = document.getElementById(id);
      if (!section) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(index);
      }, { threshold: 0.55 });
      observer.observe(section);
      return observer;
    });

    let wheelLocked = false;
    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 8 || wheelLocked) return;
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.min(sections.length - 1, Math.max(0, active + direction));
      if (nextIndex === active) return;
      wheelLocked = true;
      document.getElementById(sections[nextIndex].id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => { wheelLocked = false; }, 850);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      observers.forEach((observer) => observer?.disconnect());
      window.removeEventListener("wheel", handleWheel);
    };
  }, [active]);

  return (
    <nav className="fixed right-[2.8vw] top-1/2 z-[60] flex -translate-y-1/2 flex-col gap-5" aria-label="Section navigation">
      {sections.map(({ id, title }, index) => (
        <a
          key={id}
          href={`#${id}`}
          className="group relative grid size-5 place-items-center rounded-full"
          aria-label={`Go to ${title}`}
          aria-current={active === index ? "step" : undefined}
        >
          <span className={`rounded-full border border-white/85 transition-all duration-300 ${active === index ? "size-4 bg-white shadow-[0_0_14px_white]" : "size-2 group-hover:bg-white/80"}`} />
          <b className="invisible absolute right-7 top-1/2 w-max -translate-y-1/2 translate-x-1 rounded-lg border border-white/20 bg-slate-950/80 px-3 py-2 font-mono text-[.65rem] text-white opacity-0 backdrop-blur transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">{title}</b>
        </a>
      ))}
    </nav>
  );
}
