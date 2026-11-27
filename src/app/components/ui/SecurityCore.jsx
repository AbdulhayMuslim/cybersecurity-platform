"use client";

import { useRef } from "react";
import Image from "next/image";
import { Fingerprint, LockKeyhole, Network, Radar, Wifi } from "lucide-react";

const nodes = [
  { position: "left-[-17%] top-[13%]", icon: Fingerprint, label: "Identity", value: "Verified" },
  { position: "right-[-18%] top-[18%]", icon: Network, label: "Network", value: "Encrypted" },
  { position: "bottom-[8%] left-[-20%]", icon: Radar, label: "Threat scan", value: "Clear" },
  { position: "bottom-[4%] right-[-15%]", icon: LockKeyhole, label: "Access", value: "Protected" },
];

export default function SecurityCore() {
  const stageRef = useRef(null);
  const move = (event) => {
    const stage = stageRef.current;
    if (!stage) return;
    const box = stage.getBoundingClientRect();
    stage.style.setProperty("--core-x", (((event.clientX - box.left) / box.width - .5) * 2).toFixed(3));
    stage.style.setProperty("--core-y", (((event.clientY - box.top) / box.height - .5) * 2).toFixed(3));
  };
  const reset = () => { stageRef.current?.style.setProperty("--core-x", "0"); stageRef.current?.style.setProperty("--core-y", "0"); };

  return <div ref={stageRef} className="relative mx-auto aspect-square w-full [--core-x:0] [--core-y:0]" onPointerMove={move} onPointerLeave={reset}><div className="absolute inset-[4%] rounded-full border-2 border-white/15 [transform:perspective(900px)_rotateX(calc(var(--core-y)*-3deg))_rotateY(calc(var(--core-x)*3deg))] transition-transform duration-300"><div className="absolute inset-[9%] rounded-full border border-white/15" /><i className="absolute left-[5%] top-[46%] size-3 rounded-full bg-[#81da0b]"/><i className="absolute right-[7%] top-[42%] size-3 rounded-full bg-[#15ace7]"/><i className="absolute bottom-[4%] left-1/2 size-3 rounded-full bg-[#81da0b]"/></div><div className="absolute left-1/2 top-1/2 size-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_36%_25%,#fff_0,#d9f7ff_5%,#20bff1_20%,#148ccc_38%,#343067_68%,#190f31_100%)] shadow-[0_0_40px_15px_rgba(47,197,255,.55),0_0_90px_22px_rgba(132,255,61,.2)] before:absolute before:inset-0 before:rounded-full before:bg-[linear-gradient(145deg,transparent_42%,rgba(214,168,255,.42)_67%,rgba(94,255,106,.28)_86%)] after:absolute after:inset-[5%] after:rounded-full after:border after:border-white/15 [transform:translate(-50%,-50%)_perspective(900px)_rotateX(calc(var(--core-y)*-4deg))_rotateY(calc(var(--core-x)*4deg))] transition-transform duration-300"><div className="absolute inset-[14%] rounded-full border border-white/15 rotate-[22deg]"/><div className="absolute inset-[24%] rounded-full border border-white/10 rotate-[-28deg]"/></div><div className="absolute left-1/2 top-1/2 z-10 grid size-[29%] -translate-x-1/2 -translate-y-1/2 rotate-45 place-items-center rounded-[24%] border border-white/35 bg-[#202640]/90 shadow-[0_18px_30px_rgba(15,5,30,.4)]"><Image src="/site icon.webp" alt="AM Security" width={800} height={318} priority className="h-auto w-[72%] -rotate-45 object-contain" /></div>{nodes.map(({ position, icon: Icon, label, value }) => <div className={`absolute z-20 hidden min-w-48 items-center gap-4 rounded-2xl border border-white/20 bg-[#54104f]/90 px-5 py-4 text-white shadow-[0_15px_30px_rgba(40,4,43,.35)] backdrop-blur-sm sm:flex ${position}`} key={label}><span className="grid size-11 place-items-center rounded-xl bg-white/10"><Icon size={23} className="text-[#80df0a]" /></span><div><small className="block font-mono text-[.62rem] uppercase tracking-[.18em] text-white/55">{label}</small><strong className="text-base">{value}</strong></div><i className="ml-auto size-2.5 rounded-full bg-[#80df0a] shadow-[0_0_10px_#80df0a]" /></div>)}<div className="absolute -bottom-[7%] left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-[#80df0a] px-7 py-4 font-mono text-xs font-bold uppercase tracking-[.14em] text-[#294600]"><Wifi size={17}/><span>Live defense</span></div></div>;
}
