import { db } from "@/app/_lib/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { Adapter } from "next-auth/adapters";
import { ReactNode } from "react";

export const authOptions: AuthOptions ={
    adapter: PrismaAdapter(db) as Adapter,
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };