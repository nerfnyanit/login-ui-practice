"use client"

import Link from "next/link"
import ToggleCircle from "./ToggleCircle"
import { useState } from "react";



export default function FormClient() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch("/api/login",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await res.json();

        if(data.success) {
            alert("ログイン成功");
        } else {
            alert("ログイン失敗")
        }
    };

  return (
    <div>        
       {/* フォーム欄 */}
        <form
         onSubmit={handleSubmit} 
         className="mt-10 flex flex-col gap-4 w-1/4">

        {/* Eメール 入力 */}
        <div className="relative">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email"
            className="
              peer
              w-full
              pl-12
              p-4
              rounded-xl
              bg-zinc-900
              border border-zinc-700
              text-white
              placeholder:text-zinc-400
              transition duration-200
              focus:outline-none
              focus:border-lime-400
              focus:ring-2 focus:ring-lime-400/40
            "
          />

          <span
            className="
              pointer-events-none
              absolute left-4 top-1/2 -translate-y-1/2
              text-zinc-500
              transition
              peer-focus:text-white
            "
          >
            ✉
          </span>
        </div>

        {/* パスワード 入力 */}
        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your Password"
            className="
              peer
              w-full
              pl-12
              p-4
              rounded-xl
              bg-zinc-900
              border border-zinc-700
              text-white
              placeholder:text-zinc-400
              transition duration-200
              focus:outline-none
              focus:border-lime-400
              focus:ring-2 focus:ring-lime-400/40
            "
          />

          <span
            className="
              pointer-events-none
              absolute left-4 top-1/2 -translate-y-1/2
              text-zinc-500
              transition
              peer-focus:text-white
            "
          >
            🗝
          </span>
        </div>

        {/* ログイン情報保持  use clientを使用*/}
        <div className="flex justify-between items-center">

          {/* 右側 */}
            <ToggleCircle/>

        {/* 左側 */}
          <div>
            <Link
             href="/" 
             className="
              text-lime-400
              font-semibold
             "
            >
             Forgot Password? 
            </Link>
          </div>
        </div>

        {/* ログインボタン */}
        <button
         type="submit"
         className="
         border p-4 border-none
         rounded-xl
         bg-lime-400
         text-black
         font-bold
         transition
         duration-200

         shadow-[0_0_20px_rgba(163,230,53,0.8)]
         hover:shadow-[0_0_30px_rgba(163,230,53,1)]
         hover:brightness-110
         "
        >
          Log in
        </button>
        </form>

    </div>
  )
}
