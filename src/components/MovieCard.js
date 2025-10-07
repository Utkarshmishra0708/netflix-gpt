import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 flex-shrink-0 relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
      <img
        alt={title}
        className="w-full h-full object-cover"
        src={IMG_CDN_URL + posterPath}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
        <p className="text-white text-sm md:text-base font-semibold truncate">
          {title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
