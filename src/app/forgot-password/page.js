import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import ThemeSwitcher from "../shared/ThemeSwitcher";

export const metadata = { title: "Forgot password | AM Security" };

export default function ForgotPasswordPage() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-[#e2e8f0] bg-[url('/assets/images/herobg.png')] bg-cover bg-center p-4 before:absolute before:inset-0 before:bg-transparent dark:bg-[#0a1019] dark:before:bg-slate-950/80">
      <section className="relative z-10 w-full max-w-md rounded-[1.75rem] border border-[#e4e8f0] bg-white/95 pb-8 pt-3 text-center shadow-[0_26px_80px_rgba(36,32,27,.15)] backdrop-blur-xl dark:border-[#39465b] dark:bg-[#1d2a3a]/95">
        <div className="flex justify-end px-5"><ThemeSwitcher /></div>
        <div className="px-5 sm:px-8">
          <span className="mx-auto grid size-12 place-items-center rounded-xl border border-brand-primary/50 bg-brand-primary/10 text-brand-primary"><LockKeyhole size={22} /></span>
          <h1 className="mt-4 font-display text-2xl font-bold">Reset password</h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#68738a] dark:text-[#b4bfd1]">Enter your email and we’ll send you a secure password reset link.</p>
          <form className="mt-6 grid gap-4 text-left" action="/reset-password">
            <label className="text-xs font-bold" htmlFor="email">Email<input className="mt-2 block w-full rounded-xl border border-[#e4e8f0] bg-[#e2e8f0] px-4 py-3 text-sm outline-none focus:border-brand-secondary dark:border-[#39465b] dark:bg-[#29384d]" id="email" name="email" type="email" autoComplete="email" required /></label>
            <button className="min-h-11 w-full rounded-xl bg-brand-primary px-4 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#007fc4]" type="submit">Send reset link</button>
          </form>
          <Link className="mt-5 inline-flex items-center gap-1.5 text-xs text-brand-primary hover:underline" href="/login"><ArrowLeft size={14} /> Back to sign in</Link>
        </div>
      </section>
    </main>
  );
}
