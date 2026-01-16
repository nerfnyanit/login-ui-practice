import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Cookie の値を必ず .value で取得
  const isLoggedIn = req.cookies.get("isLoggedIn")?.value;

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"], // dashboard のみガード
};
