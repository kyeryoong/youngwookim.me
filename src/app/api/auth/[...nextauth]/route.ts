import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
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
});

export { handler as GET, handler as POST };
