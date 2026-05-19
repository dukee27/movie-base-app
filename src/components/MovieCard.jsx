import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    const imageUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image"; // Fallback image
    
    const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";

    return (
        <Link to={`/movie/${movie.id}`} className="block h-full group"> 
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                <div className="relative overflow-hidden aspect-[2/3]">
                    <img 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={imageUrl}
                        alt={movie.title}
                        loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm text-yellow-400 font-bold px-2 py-1 rounded-md text-sm flex items-center gap-1">
                        ★ {movie.vote_average?.toFixed(1)}
                    </div>
                </div>
                
                <div className="p-4 flex flex-col flex-grow">
                    <h2 className="font-bold text-lg mb-1 line-clamp-1 text-gray-800">{movie.title}</h2>
                    <span className="text-sm font-medium text-gray-500 mb-2">{year}</span>
                    <p className="text-gray-600 text-sm line-clamp-3 mt-auto">
                        {movie.overview || "No overview available."}
                    </p>
                </div>
            </div>
        </Link>
    );
}