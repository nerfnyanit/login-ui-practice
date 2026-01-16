import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "Hello@gmail.com" && password === "HELLOWORLD") {
    console.log("LOGIN API HIT");
    const response = NextResponse.json({ success: true });

    response.cookies.set("isLoggedIn", "true", {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60, // 1時間
    });

    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
