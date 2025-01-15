import { auth, handlers } from "@/auth"; // Referring to the auth.ts we just created
import { NextResponse } from "next/server";
export const { POST, GET } = handlers;
