import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../../libs/mongodb";
import UserModel from "../../../../models/User";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await connectToDatabase();
        const user = await UserModel.findOne({ email });
        if (!user) throw Error("Email/Password Incorrect");

        const isValid = await user.comparePassword(password);
        if (!isValid) throw Error("Email/Password Incorrect");

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    jwt(params: any) {
       if (params.user?.role) {
         params.token.role = params.user.role;
         params.token.id = params.user.id;
       }
         return params.token;
    },
    session({ session, token }) {
        if (session.user) {
            (session.user as { id: string}).id = token.id as string;
            (session.user as { role: string}).role = token.role as string;
        }
        return session;
    },
  },
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
