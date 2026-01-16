"use client"

import Link from "next/link"
import ToggleCircle from "./ToggleCircle"
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function FormClient() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch("/api/login",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            credentials: "include",
            body: JSON.stringify({
                email,
                password
            }),
        });

        const data = await res.json();

        if(data.success) {
          router.push("/dashboard");
        } else {
          alert("ログイン失敗");
        }

    };

  return (
  <form
  onSubmit={handleSubmit}
  className="mt-10 flex flex-col gap-4 max-w-md w-full"
>
  {/* Email */}
  <div className="relative">
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your Email"
      className="peer w-full pl-12 p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/50 transition"
    />
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 peer-focus:text-white">
      ✉
    </span>
  </div>

  {/* Password */}
  <div className="relative">
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your Password"
      className="peer w-full pl-12 p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/50 transition"
    />
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 peer-focus:text-white">
      🗝
    </span>
  </div>

  {/* Toggle + Forgot */}
  <div className="flex justify-between items-center">
    <ToggleCircle />
    <Link href="/" className="text-lime-400 font-semibold text-sm hover:text-lime-200">
      Forgot Password?
    </Link>
  </div>

  {/* Login Button */}
  <button
    type="submit"
    className="mt-4 w-full rounded-xl bg-lime-400 text-black font-bold p-4 shadow-[0_0_20px_rgba(163,230,53,0.8)] hover:shadow-[0_0_30px_rgba(163,230,53,1)] hover:brightness-110 transition-all duration-200"
  >
    Log in
  </button>
</form>

  )
}
