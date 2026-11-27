import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ThemeSwitcher from "../shared/ThemeSwitcher";

export const metadata = {
  title: "Sign in | AM Security",
  description: "Secure access to your AM Security training dashboard.",
};

export default function LoginPage() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-[#e2e8f0] bg-[url('/assets/images/herobg.png')] bg-cover bg-center p-4 before:absolute before:inset-0 before:bg-transparent dark:bg-[#0a1019] dark:before:bg-slate-950/80">
      <section className="relative z-10 w-full max-w-md">
        <form className="rounded-[1.75rem] border border-[#e4e8f0] bg-white/95 px-5 pb-6 pt-3 text-[#172033] shadow-[0_26px_80px_rgba(36,32,27,.15)] backdrop-blur-xl dark:border-[#39465b] dark:bg-[#1d2a3a]/95 dark:text-[#f7f9fd]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#68738a] hover:text-brand-primary dark:text-[#b4bfd1]"><ArrowLeft size={14} /> Back to website</Link>
              <ThemeSwitcher />
            </div>
            <div className="px-0 sm:px-6">
              <Link className="mb-4 flex justify-center" href="/" aria-label="AM Security home">
                <Image className="h-auto w-38" src="/site logo.webp" alt="AM Security" width={190} height={36} priority />
              </Link>
              <h1 className="mb-6 text-center font-display text-lg font-bold">SIGN IN TO CONTINUE</h1>
              <button type="button" className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#d8e2ec] bg-[#f3f6fa] px-4 text-sm font-semibold hover:-translate-y-0.5 hover:bg-[#e2e8f0] dark:border-[#39465b] dark:bg-[#29384d] dark:hover:bg-[#33445e]">
                <svg className="size-4.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M21.35 12.27c0-.72-.06-1.42-.18-2.09H12v3.96h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.26Z" />
                  <path fill="#34A853" d="M12 21.7c2.63 0 4.84-.87 6.45-2.37l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.29v2.53A9.74 9.74 0 0 0 12 21.7Z" />
                  <path fill="#FBBC05" d="M6.53 13.77a5.85 5.85 0 0 1 0-3.54V7.7H3.29a9.73 9.73 0 0 0 0 8.6l3.24-2.53Z" />
                  <path fill="#EA4335" d="M12 6.2c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.28 14.63 2.3 12 2.3a9.74 9.74 0 0 0-8.71 5.4l3.24 2.53C7.3 7.92 9.46 6.2 12 6.2Z" />
                </svg>
                Continue with Google
              </button>
              <div className="my-4 flex items-center gap-3 text-[.65rem] uppercase text-slate-500"><span className="h-px flex-1 bg-[#d8e2ec] dark:bg-[#39465b]" />or<span className="h-px flex-1 bg-[#d8e2ec] dark:bg-[#39465b]" /></div>
              <label className="block text-xs font-bold" htmlFor="email">Email<input className="mt-2 block w-full rounded-xl border border-[#d8e2ec] bg-[#e2e8f0] px-4 py-3 text-sm outline-none focus:border-brand-secondary dark:border-[#39465b] dark:bg-[#29384d]" id="email" name="email" type="email" autoComplete="email" required /></label>
              <label className="mt-4 block text-xs font-bold" htmlFor="password">Password<input className="mt-2 block w-full rounded-xl border border-[#d8e2ec] bg-[#e2e8f0] px-4 py-3 text-sm outline-none focus:border-brand-secondary dark:border-[#39465b] dark:bg-[#29384d]" id="password" name="password" type="password" autoComplete="current-password" required /></label>
              <div className="mt-4 flex items-center justify-between gap-4 text-xs text-[#68738a] dark:text-[#b4bfd1]"><label className="flex items-center gap-2"><input className="accent-brand-primary" type="checkbox" name="remember" /> Keep this device trusted</label><Link href="/forgot-password" className="shrink-0 text-brand-primary hover:underline">Forgot password?</Link></div>
              <button className="mt-4 min-h-11 w-full rounded-xl bg-brand-primary px-4 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#007fc4]" type="submit">Sign in</button>
              <p className="mt-4 text-center text-xs"><Link className="font-semibold text-brand-primary hover:underline" href="/login">Create an account</Link></p>
            </div>
          </form>
      </section>

    </main>
  );
}
