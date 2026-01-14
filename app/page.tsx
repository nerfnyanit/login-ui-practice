
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b to-black via-black from-green-500">

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
         className="text-sm text-gray-700"
        >
          welcome back! Select method to log in
        </p>
      </div>

       {/* フォーム欄 */}
        <form className="mt-10 flex flex-col gap-4 w-1/4">
          
            <input
              placeholder="✉ Enter Your Mailadress"
              className="border rounded-xl p-4"
            />

            <input
              placeholder="🗝 Enter Your Password"
              className="border rounded-xl p-4"
            />

            <button 
             type="submit"
             className="
             border mt-4 rounded-xl p-4 
             bg-lime-400 text-black font-semibold
             shadow-[0_0_15px_rgba(163,230,53,0.9)]
             hover:shadow-[0_0_25px_rgba(163,230,53,1)]
             transition
             "
             >
              Login
            </button>      
        </form>

        <div className="flex mt-16 items-center justify-center gap-4 w-1/4">
          <hr className="border border-gray-400 w-1/2" />

          <p className="text-gray-400 text-sm whitespace-nowrap">
            Or Continue With
          </p>

          <hr className="border border-gray-400 w-1/2" />
        </div>






    </div>
  );
}
