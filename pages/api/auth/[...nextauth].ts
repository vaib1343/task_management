import NextAuth from 'next-auth';
import EmailProviders from 'next-auth/providers/email';
import GithubProviders from 'next-auth/providers/github';
import TwitterProviders from 'next-auth/providers/twitter';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
// import prisma from 'lib/prisma';

const prisma = new PrismaClient();


export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        // EmailProviders({
        //     server: {
        //         host: 'smtp-relay.sendinblue.com',
        //         port: 587,
        //         auth: {
        //             user: 'vaib1343@gmail.com',
        //             pass: '1tdqrLY0hnIgOAPU',
        //         },
        //     },
        //     from: 'vaib1343@gmail.com',
        // }),
        GithubProviders({
            clientId: '536ea8681e78860cba5b',
            clientSecret: 'f75714230ca6034c866ebeef68caff419707d658',
        }),
        TwitterProviders({
            clientId: 'h6BnBeSn0HV1SKutp6djW4JF0',
            clientSecret: 'OB6RKK7hMFAMJ6M38VANEdYXfg0RO6Cza1SFo56kyG6uUQ1u7b',
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: (params) => {
            return Promise.resolve(params);
        },
    },
});
