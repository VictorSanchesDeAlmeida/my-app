import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const isTokenValid = verifyToken(token);

  if (!isTokenValid) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Se tiver token, segue normalmente
  return NextResponse.next();
}

// Quais rotas o middleware deve proteger:
export const config = {
  matcher: ["/about"],
};

async function verifyToken(token: string): Promise<boolean> {
  try {
    const res = await fetch("http://localhost:8080/validate", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.ok;
  } catch (err) {
    return false;
  }
}
