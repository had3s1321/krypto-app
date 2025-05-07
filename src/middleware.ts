import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currency = request.cookies.get("currency");

  if (!currency) {
    const response = NextResponse.next();
    response.cookies.set("currency", "usd");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
