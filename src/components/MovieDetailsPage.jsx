import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import { API_OPTIONS, BASE_URL } from "../api/tmdb";
export default function MovieDetailsPage() {
    const { id } = useParams();
    // const { user } = useContext(AuthContext);
    
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovieDetails();
    }, [id]);

    async function getMovieDetails() {
        setLoading(true);
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzcxZTkyY2ZhNWFmMWUxZTVjYWVmMDQ3M2RhNzAzMSIsIm5iZiI6MTc3ODY0MzU0OS4yNTcsInN1YiI6IjZhMDNmMjVkM2M1MTU5ZWExNTdiY2I5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q9grvhw4dXESGwCFEfcDX4w_EwMkG0X4gY4L0AlIIj8"
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then((res) => res.json())
            .then((res) => {
                setMovie(res);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
            </div>
        );
    }

    if (!movie) return <p className="text-center mt-20 text-xl">Movie not found.</p>;

    const imageUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image";

    const backdropUrl = movie.backdrop_path 
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : null;

    return (
        <div className="min-h-screen bg-gray-50 pb-10">
            {backdropUrl && (
                <div 
                    className="w-full h-64 md:h-96 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${backdropUrl})` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            )}

            <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
                <Link to="/" className="inline-block text-white mb-6 hover:text-blue-300 transition-colors">
                    &larr; Back to Home
                </Link>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 flex-shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            src={imageUrl}
                            alt={movie.title}
                        />
                    </div>

                    <div className="p-8 md:w-2/3 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                            {movie.title}
                        </h1>
                        <p className="text-gray-500 font-medium mb-6">
                            {movie.release_date?.split("-")[0]} • {movie.runtime} mins • {movie.genres?.map(g => g.name).join(", ")}
                        </p>
                        
                        <div className="mb-6 flex items-center gap-3">
                            <span className="bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded-lg text-lg">
                                ★ {movie.vote_average?.toFixed(1)}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mb-2">Overview</h3>
                        <p className="text-gray-700 leading-relaxed text-lg mb-8">
                            {movie.overview}
                        </p>

                        {/* Auth Example in Details Commented Out */}
                        {/* !user?.isAuth && (
                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-blue-800">
                                <Link to="/login" className="font-bold underline">Log in</Link> to add this to your favorites!
                            </div>
                        ) */}
                    </div>
                </div>
            </div>
        </div>
    );
}