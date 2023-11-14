import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.SECRET })
  if (req.nextUrl.pathname === '/login'){
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/about/:path*',
    '/dashboard/:path*',
    '/private/:path*',
    '/api/private',
  ],
};