"use client";

import Image from "next/image";
import { UserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 sm:px-10 lg:px-14">
        <a href="#top" className="group flex shrink-0 items-center gap-3">
          <Image src="/site logo.webp" alt="AM Security" width={190} height={36} priority className="h-10 w-auto object-contain" />
        </a>

        <div className="flex items-center gap-2.5">
          <a
            href="/login"
            className="inline-flex h-[54px] items-center gap-2 rounded-xl bg-[#16a7e7] px-6 text-lg font-bold text-slate-950 shadow-[0_10px_25px_rgba(0,0,0,.12)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#38bdf8]"
          >
            Start training
          </a>

          <a
            href="/login"
            aria-label="Open profile"
            title="Profile"
            className="grid size-[54px] place-items-center rounded-xl bg-[#16a7e7] text-slate-950 shadow-[0_10px_25px_rgba(0,0,0,.12)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#38bdf8]"
          >
            <UserRound size={20} />
          </a>

        </div>
      </div>
    </header>
  );
}
