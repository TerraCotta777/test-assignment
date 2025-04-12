import Link from 'next/link'
import styles from './Footer.module.scss'

interface FooterProps {
  url: string
  linkText: string
  text: string
}

export default function Footer({ url, linkText, text }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div>
        <span className={styles.text}>{text} </span>
        <Link href={url} className={styles.link}>
          {linkText}
        </Link>
      </div>
    </footer>
  )
}
