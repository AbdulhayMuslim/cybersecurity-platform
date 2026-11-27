import SecurityCore from "../ui/SecurityCore";
import { shell } from "./shared";

export default function HeroSection() {
  return <section id="top" className={`${shell} place-items-center bg-[#880487]`}><h1 className="pointer-events-none absolute inset-0 z-10 font-display text-[clamp(4rem,7.6vw,9rem)] font-extrabold uppercase leading-[1.02] tracking-[-.055em] text-white [text-shadow:0_5px_0_rgba(55,10,66,.55)]"><span className="absolute left-[2.2vw] top-[13.5%] max-w-[48vw] text-transparent [-webkit-text-stroke:2px_white] [background:linear-gradient(#f4e8f7,#9c67aa)] [background-clip:text]">Your<br />strongest</span><span className="absolute bottom-[9%] right-[2.2vw] text-right text-transparent [-webkit-text-stroke:2px_white] [background:linear-gradient(90deg,#bd9ec6,#e6ff9b,#a7d9ff)] [background-clip:text]">Firewall<br />is you.</span></h1><div className="relative z-20 mt-8 w-[min(58vw,43rem)]"><SecurityCore /></div></section>;
}
