import GitHubProvider from 'next-auth/providers/github';
import NextAuth from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || ''
    })
    // Add other providers if needed
  ]
  // Other configuration options
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
