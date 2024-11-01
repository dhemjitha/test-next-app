import React from 'react'
import Link from 'next/link'
import styles from './contactus.module.css'

function Contact() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Contact Us Page</h1>

      <Link href="/" className={styles.link}>Home</Link>
    </div>
  )
}

export default Contact