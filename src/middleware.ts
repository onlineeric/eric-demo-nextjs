import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Log requests for demonstration
  console.log(`[Middleware] ${request.method} ${pathname}`);
  
  // Add custom headers
  const response = NextResponse.next();
  response.headers.set('X-Custom-Header', 'Added by middleware');
  response.headers.set('X-Pathname', pathname);
  response.headers.set('X-Timestamp', new Date().toISOString());
  
  // Example: Redirect /old-path to /new-path
  if (pathname === '/old-path') {
    return NextResponse.redirect(new URL('/middleware-demo', request.url));
  }
  
  // Example: Block requests from specific user agents (for demo)
  const userAgent = request.headers.get('user-agent') || '';
  if (userAgent.includes('BadBot')) {
    return new NextResponse('Access denied', { status: 403 });
  }
  
  // Example: Add authentication check for protected routes
  if (pathname.startsWith('/protected')) {
    const token = request.cookies.get('auth-token');
    if (!token) {
      return NextResponse.redirect(new URL('/middleware-demo?error=no-auth', request.url));
    }
  }
  
  return response;
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};