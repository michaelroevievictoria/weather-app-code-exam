// import GitHubProvider from 'next-auth/providers/github';
// import NextAuth from 'next-auth';
// import { NextApiRequest, NextApiResponse } from 'next';
// console.log('test', process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID)
// console.log('test2', process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET)

// const options = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '',
//       clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET || ''
//     })
//     // Add other providers if needed
//   ]
//   // Other configuration options
// };

// export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);




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

export default NextAuth(authOptions) as GET and POST;
