import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://bitterkofte.vercel.app" target="_blank">
        Hasan Çelik
      </Link>
    </footer>
  );
}

export default Footer;