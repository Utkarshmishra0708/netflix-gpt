import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-8 py-4">
      <h2 className="text-xl md:text-3xl font-bold text-white mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 hide-scrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
