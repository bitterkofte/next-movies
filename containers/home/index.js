import { FeaturedMovie } from '@/Components/featured-movie';
import { Categories } from '@/Components/categories';

import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'
import { MoviesSection } from '@/Components/movies-section';

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie
        movie={Movies.results[0]}
      />
      <Categories categories={Genres.genres.slice(0,5)}/>
      <MoviesSection title="Popular Films" movies={Movies.results.slice(1, 7)}/>
      <MoviesSection title="Your Favorites" movies={Movies.results.slice(7, 12)}/>
      {/* <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />
      <Categories categories={categories.slice(1, 6)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection
        title="Your favorites"
        movies={topRatedMovies.slice(1, 7)}
      /> */}
    </div>
  );
}

export default HomeContainer;