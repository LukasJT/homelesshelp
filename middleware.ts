import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const segment = request.nextUrl.pathname.split("/")[1];
  requestHeaders.set("x-page-language", segment === "fr" ? "fr" : segment === "es" ? "es" : "en");
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = { matcher: ["/((?!_next|api|.*\\..*).*)"] };
