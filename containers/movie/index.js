import { FeaturedMovie } from "@/Components/featured-movie";
import React from "react";

function MovieContainer({ movie }) {
  return <FeaturedMovie movie={movie} isCompact={false} />;
}

export { MovieContainer };