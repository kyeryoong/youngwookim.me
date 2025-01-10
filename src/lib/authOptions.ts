import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 1800,
  },
  callbacks: {
    async signIn({ user }) {
      if (user.email && user.email === process.env.MAIL_ID) {
        return true;
      } else {
        return false;
      }
    },
  },
};
