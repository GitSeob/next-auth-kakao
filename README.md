This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
개발 환경 프로젝트 시작하기:

먼저 `.env` 혹은 `.env.local` 파일을 생성하여 `AUTH_KAKAO_ID`와 `AUTH_KAKAO_SECRET` 해당하는 값을 작성해주세요.

이후 터미널 혹은 IDE를 통해 프로젝트 서비스를 올려줍니다.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- 브라우저 주소창에 [http://localhost:3000](http://localhost:3000)을 입력하여 접근하세요.
- [http://localhost:3000/signIn](http://localhost:3000/signIn) 페이지에서 카카오톡 계정을 통한 로그인이 가능합니다.
- [http://localhost:3000/profile](http://localhost:3000/profile) 페이지에서 카카오톡 계정에 등록된 이름과 프로필 사진을 확인할 수 있습니다.
