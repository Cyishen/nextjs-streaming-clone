import data from "@/data/data.json";

const useBillboard = () => {
const movie = data.movies.find( (movie) => movie.id);
// const randomIndex = Math.floor(Math.random() * data.movies.length)
// const randomMovie = data.movies[randomIndex];

  return {
    data: movie ,
    error: null, 
    isLoading: false, 
  };
};

export default useBillboard;