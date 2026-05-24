"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "../auth/AuthLayout";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <AuthLayout 
      title="Sign in" 
      subtitle="Let's get you all set up so you can verify your personal account and begin setting up your profile."
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
          <input 
            type="email" 
            placeholder="example@email.com"
            className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-pink/30 transition-all placeholder:text-zinc-700"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Password</label>
          <input 
            type="password" 
            placeholder="8+ strong character"
            className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-pink/30 transition-all placeholder:text-zinc-700"
          />
        </div>

        <button 
          onClick={handleLogin}
          type="button"
          className="btn-brand w-full py-4 text-xs font-bold uppercase tracking-widest mt-8"
        >
          Sign in
        </button>

        <button 
          onClick={handleLogin}
          type="button"
          className="w-full py-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
          Sign Up with Google Account
        </button>

        <p className="text-center text-xs text-zinc-500 mt-8">
          Don't Have an Account? <Link href="/register" className="text-white hover:text-brand-pink transition-colors font-bold">Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
