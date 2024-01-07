import NextAuth from "next-auth";
// import { Provider } from "next-auth/providers";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET || "",
    }) as any, // Cast the provider to the Provider type
    // ...add more providers here
  ],
};
const authHandler = NextAuth(authOptions)

export { authHandler as GET, authHandler as POST }


