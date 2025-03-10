'use client'

import Image from 'next/image'
import { signIn } from 'next-auth/react'

const SignInPage = () => {
	const onClickKakaoSignIn = async () => {
		await signIn('kakao', {
			redirect: true,
			callbackUrl: '/',
		})
	}

	return (
		<div className="flex h-lvh w-lvh items-center justify-center">
			<button className="flex items-center gap-2 rounded-xl bg-[#fee500] px-3 py-3" onClick={onClickKakaoSignIn}>
				<Image src="/KakaoIcon.png" alt="KakaoIcon" width={18} height={17} />
				<p className="text-black">카카오톡으로 시작하기</p>
			</button>
		</div>
	)
}

export default SignInPage
