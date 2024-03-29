import Image from "next/image";
import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function Home({ params }) {
  await delay(1000);
  let selectedCategory;
  // console.log('params: ', params)
  // console.log('params.category.length: ', params.category.length)
  if (params.category?.length > 0) selectedCategory = true;

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}

export default Home;