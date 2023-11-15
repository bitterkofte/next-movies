import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

function MoviesSection({ title, movies, category }) {
  return (
    // <div className={styles.moviesSection}>
    <div className={`${styles.moviesSection}  ${category ? styles.category : ""}`}>
      <h3 className={category ? styles.catTitle : styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export { MoviesSectionLoading } from "./loading";
export { MoviesSection };