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
        //         host: 'smtp.netcorecloud.netm',
        //         port: 587,
        //         auth: {
        //             user: 'vaib1343@gmail.com',
        //             pass: 'Vaib#1343',
        //         },
        //     },
        //     from: 'vaib1343@gmail.com',
        // }),
        // GithubProviders({
        //     clientId: '536ea8681e78860cba5b',
        //     clientSecret: 'f75714230ca6034c866ebeef68caff419707d658',
        // }),
        GithubProviders({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // TwitterProviders({
        //     clientId: 'RGpUaXp3M0pFMGg4Qk11SE9XMUQ6MTpjaQ',
        //     clientSecret: 'mJRSheQH9VOfDyKtap_xE2-jzl6kAFhag2YCkZ_-s61nnzodOE',
        // }),
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
