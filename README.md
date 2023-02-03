# NextJS Introduction

## 1.3 Routing

No HTML link for pages

페이지 간 클라이언트 측 경로 전환을 활성화하고 single-page app 경험을 제공하려면 Link컴포넌트가 필요합니다.
```
// 변경 전
<a href="/about">About Us</a>

// 변경 후
import Link from 'next/link'

<Link href="/about">About Us</Link>
```
https://nextjs.org/docs/messages/no-html-link-for-pages

useRouter()
앱의 함수 컴포넌트에서 router객체 내부에 접근하려면 userRouter()훅을 사용할 수 있습니다.
useRouter는 React Hook입니다. 즉, 클래스와 함께 사용할 수 없습니다. withRouter를 사용하거나 클래스를 함수 컴포넌트로 래핑할 수 있습니다.
```
const router = useRouter()
```
https://nextjs.org/docs/api-reference/next/router#userouter
