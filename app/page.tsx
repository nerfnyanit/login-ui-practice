import Image from "next/image";
import Link from "next/link";
import ToggleCircle from "./components/ToggleCircle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b to-black via-black from-green-500">

      {/* トップテキスト */}
      <div className="flex flex-col items-center">
        <h1 className="
          text-4xl font-bold text-lime-400
          drop-shadow-[0_0_10px_rgba(163,230,53,0.8)]
        ">
          Money Pay
        </h1>

        <h2
        className="text-2xl "
        >
          Sign in to your account!
        </h2>
        <p
         className="text-sm text-gray-500"
        >
          Welcome back! Select a method to log in.
        </p>
      </div>


       {/* フォーム欄 */}
        <form className="mt-10 flex flex-col gap-4 w-1/4">

        {/* Eメール 入力 */}
        <div className="relative">
          <input
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


        {/* あるいは～ */}
        <div className="flex mt-16 items-center justify-center gap-4 w-1/4">
          <hr className="border border-gray-400 w-1/2" />

          <p className="text-gray-400 text-sm whitespace-nowrap">
            Or Continue With
          </p>

          <hr className="border border-gray-400 w-1/2" />
        </div>


        {/* ログイン連携 */}
        <div className="flex gap-4 mt-10 w-1/4 justify-between">

          {/* Google */}
          <button
           className="
            flex justify-center items-center gap-2
            w-1/2
            rounded-xl
            bg-zinc-900 text-white
            font-semibold
            border border-zinc-700
            shadow-xl
            transition duration-200
            hover:bg-zinc-800
            "
          >
          <Image
          height={24}
          width={24}
          alt="apple"
          src="/google-original.svg"
          />
          <span>Google</span>
          </button>


          {/* Apple */}
          <button
           className="
            flex justify-center items-center gap-2 h-16
            w-1/2
            rounded-xl
            bg-zinc-900 text-white
            font-semibold
            border border-zinc-700
            shadow-xl
            transition duration-200
            hover:bg-zinc-800
            "
          >
          <Image
          height={24}
          width={24}
          alt="apple"
          src="/apple-logo-svgrepo-com.svg"
          />
          <span>Apple</span>
          </button>
        </div>

        {/* サインアップ */}
        <div className="flex gap-1 mt-4">
        <p
        >
          Don`t have an account?
        </p>
        <Link
         href="/"
         className="
          text-lime-300
          font-semibold
          hover:text-lime-200
          "
         >
          Sign up
         </Link>
        </div>

    </div>
  );
}
