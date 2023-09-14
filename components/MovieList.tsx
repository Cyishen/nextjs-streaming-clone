import React from 'react';
import { isEmpty } from "lodash";
import MovieCard from './MovieCard';
import data from "../data/data.json";

interface MovieListProps {
    title: string;
}

const MovieList: React.FC<MovieListProps> = ({ title }) => {
  if (isEmpty(data.movies)) {
    return null;
  }
  
  const movies = data.movies;
  
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        
        <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;