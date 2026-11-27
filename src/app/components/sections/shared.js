export const shell = "relative isolate grid min-h-svh snap-start items-center overflow-hidden px-[3vw] pb-8 pt-24 sm:px-[4.3vw]";
export const split = "relative z-10 grid w-full items-center gap-10 md:grid-cols-2 md:gap-[5vw]";
export const heading = "font-display text-[clamp(3rem,6.2vw,7.4rem)] font-extrabold leading-[.86] tracking-[-.065em] text-white";
export const eyebrow = "mb-5 flex items-center gap-2 font-mono text-[.68rem] font-bold uppercase tracking-[.18em] text-white/70";
export const index = "absolute right-[4.3vw] top-[14.5%] z-20 font-mono text-sm font-bold uppercase tracking-[.24em] text-white/70";

export function Atmosphere({ diagonal = false }) {
  return diagonal ? <div className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:repeating-linear-gradient(135deg,transparent_0,transparent_96px,rgba(5,64,54,.35)_97px,rgba(5,64,54,.35)_99px)]" aria-hidden="true" /> : null;
}
