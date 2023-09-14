import data from "@/data/data.json";

const useMovie = (id: string) => {
    const movie = data.movies.find( (movie) => movie.id === id);
    return {
        data: movie || null,
        error: movie ? null : "not found",
        isLoading: false,
    };
};

export default useMovie;
