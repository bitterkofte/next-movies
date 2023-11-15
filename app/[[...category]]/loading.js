import CategoriesLoading from '@/Components/categories/loading'
import FeaturedMovieLoading from '@/Components/featured-movie/loading'
import MoviesSectionLoading from '@/Components/movies-section/loading'

const loading = () => {
  return (
    <div>
      <FeaturedMovieLoading/>
      <CategoriesLoading/>
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
    </div>
  );
}

export default loading;