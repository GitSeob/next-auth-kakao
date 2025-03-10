'use client'

import { useSession } from 'next-auth/react'

const ProfilePage = () => {
	const { data: session, status } = useSession()

	if (status !== 'authenticated' || !session.user) return
	return (
		<div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
			<main className="row-start-2 flex flex-col justify-items-center gap-8">
				<img
					className="h-[100px] rounded-full object-cover"
					src={session.user.image}
					alt="프로필 이미지"
					width={100}
					height={100}
				/>
				<h1 className="text-center">hello {session.user.name}</h1>
			</main>
		</div>
	)
}

export default ProfilePage
