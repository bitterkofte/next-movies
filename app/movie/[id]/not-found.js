import Link from "next/link";
import styles from './notfound.module.css'

const Movie404 = () => {
  return (
    <div className={styles.cont} >
      <h1>We couldn&apos;t find the movie you are looking for!</h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
      >
        Go home
      </Link>
    </div>
  );
}

export default Movie404;