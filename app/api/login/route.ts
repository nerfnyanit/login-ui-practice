import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // 仮の認証（あとでDBに差し替える）
  if (email === "test@test.com" && password === "password") {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
