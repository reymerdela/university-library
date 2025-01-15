import { auth } from "@/auth";
import { NextFetchEvent, NextResponse } from "next/server";
import ratelimit from "./lib/ratelimit";

export default auth(async (request, event) => {
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const { success, pending, limit, remaining } = await ratelimit.limit(ip);

  const fetchEvent = event as NextFetchEvent;

  fetchEvent.waitUntil(pending);

  const res = success
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/too-fast", request.url));

  res.headers.set("X-RateLimit-Success", success.toString());
  res.headers.set("X-RateLimit-Limit", limit.toString());
  res.headers.set("X-RateLimit-Remaining", remaining.toString());

  return res;
});

export const config = {
  matcher: ["/api/:function*"],
};
