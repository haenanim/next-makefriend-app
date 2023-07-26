import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1>Hello Friend</h1>
      <div>로그인</div>
      <div>회원가입</div>
    </>
  );
}
