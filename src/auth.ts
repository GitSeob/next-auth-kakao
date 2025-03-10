import NextAuth, { DefaultSession } from 'next-auth'
import Kakao from '@auth/core/providers/kakao'

declare module 'next-auth' {
	/**
	 * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			image: string
		} & DefaultSession['user']
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Kakao({ clientId: process.env.KAKAO_CLIENT_ID, clientSecret: process.env.KAKAO_CLIENT_SECRET })],
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24, // 1 day
	},
	pages: {
		signIn: '/signIn',
	},
	callbacks: {
		session({ session, token, user }) {
			return {
				...session,
				user: {
					...session.user,
				},
			}
		},
	},
})
