import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './/NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* 스타일 클래스 네임이 여러개인 경우 아래와 같이 입력해도 동작하지 않는다. => 특정 문자열을 만들어서 삽입해야한다. */}
      {/* <Link href="/" className={styles.link, router.pathname === '/' ? styles.active : ''}> */}

      {/* 방법 1 */}
      <Link href="/" className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>
        Home
      </Link>

      {/* 방법 2 */}
      <Link
        href="/about"
        className={[styles.link, router.pathname === '/about' ? styles.active : ''].join(' ')}
      >
        About
      </Link>
    </nav>
  );
}
