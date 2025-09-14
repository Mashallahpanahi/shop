// import { NextRequest, NextResponse } from "next/server"


// export function middleware(request: NextRequest) {
//     const token = request.cookies.get("token")?.value

//     //if token exist run the next 
//     if (token) {
//         return NextResponse.next()
//     }

//     //if token doesn't exist redirect login page
//     const url = new URL(request.url)
//     url.pathname = "/login"
//     return NextResponse.redirect(url.toString())

// }

// export const config = {
//     matcher: ['/components/dashboard/:path*']
// }












// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//     const token = request.cookies.get("token")?.value;
//     console.log(token)
//     // if token exists allow
//     if (token) {
//         return NextResponse.next();
//     }

//     // if not redirect to login
//     const url = new URL(request.url);
//     url.pathname = "/login";
//     return NextResponse.redirect(url.toString());
// }

// export const config = {
//     matcher: ["/dashboard/:path*"],
// };







import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    // allow only if token === "panahi"
    if (token === "panahi") {
        return NextResponse.next();
    }

    // redirect if no valid token
    const url = new URL(request.url);
    url.pathname = "/login";
    return NextResponse.redirect(url.toString());
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
