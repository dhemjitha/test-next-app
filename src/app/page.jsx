import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <br />
      <ul>
        <li>
          <Link href="/" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/products/vegis">Vegis</Link>
        </li>
        <li>
          <Link href="https://nextjs.org/" target='_blank'>NextJS Site</Link>
        </li>
      </ul>
    </div>
  );
}
