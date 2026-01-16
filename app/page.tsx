import Image from "next/image";
import Link from "next/link";
import FormClient from "./components/FormClient";

export default function Home() {
  return (
<div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-green-500 via-black to-black px-4">
  {/* トップテキスト */}
  <div className="flex flex-col items-center text-center">
    <h1 className="text-4xl font-bold text-lime-400 drop-shadow-lg">
      Money Pay
    </h1>
    <h2 className="text-2xl text-white mt-2">
      Sign in to your account!
    </h2>
    <p className="text-sm text-gray-400 mt-1">
      Welcome back! Select a method to log in.
    </p>
  </div>

  <FormClient />

  {/* Or Continue With */}
  <div className="flex mt-12 items-center justify-center gap-4 max-w-md w-full">
    <hr className="border border-gray-600 flex-1" />
    <p className="text-gray-400 text-sm whitespace-nowrap">Or Continue With</p>
    <hr className="border border-gray-600 flex-1" />
  </div>

  {/* ログイン連携ボタン */}
  <div className="flex gap-4 mt-8 max-w-md w-full">
    {/* Google */}
    <button className="flex justify-center items-center gap-2 flex-1 h-14 rounded-xl bg-zinc-900 text-white font-semibold border border-zinc-700 shadow-lg transition duration-200 hover:bg-zinc-800 hover:scale-105">
      <Image height={24} width={24} alt="google" src="/google-original.svg" />
      <span>Google</span>
    </button>

    {/* Apple */}
    <button className="flex justify-center items-center gap-2 flex-1 h-14 rounded-xl bg-zinc-900 text-white font-semibold border border-zinc-700 shadow-lg transition duration-200 hover:bg-zinc-800 hover:scale-105">
      <Image height={24} width={24} alt="apple" src="/apple-logo-svgrepo-com.svg" />
      <span>Apple</span>
    </button>
  </div>

  {/* サインアップ */}
  <div className="flex gap-1 mt-4 text-sm text-gray-400">
    <p>Don’t have an account?</p>
    <Link href="/" className="text-lime-300 font-semibold hover:text-lime-200">
      Sign up
    </Link>
  </div>
</div>

  );
}
