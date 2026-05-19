import { useEffect, useState, useRef } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import SliderNumber from "../components/Slider";
import MovieCard from "../components/MovieCard";
import DropDown from "../components/DropDown";
import { API_OPTIONS, BASE_URL } from "../api/tmdb";

function HomePage() {
    const timeoutRef = useRef(null);
    

    // const { user } = useContext(AuthContext);
    
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [category, setCategory] = useState("popular");
    const [sortOrder, setSortOrder] = useState("desc");

    useEffect(() => {
        const timer = setTimeout(() => {
            if (search.trim() !== "") {
                searchMovies();
            } else {
                setSearchResults([]);
                setLoading(false);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        getMovies();
    }, [page, category]);

    async function searchMovies() {
        if (!search.trim()) return;
        setLoading(true);
        fetch(
            `${BASE_URL}/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
            API_OPTIONS
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResults(res.results);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [search, loading]);

    function handleScroll() {
        if (timeoutRef.current || search.trim() !== "" || loading) return;
        
        timeoutRef.current = setTimeout(() => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
                setPage((prev) => prev + 1);
            }
            timeoutRef.current = null;
        }, 500);
    }

    async function getMovies() {
        setLoading(true);
        fetch(
            `${BASE_URL}/movie/${category}?language=en-US&page=${page}`,
            API_OPTIONS
        )
            .then((res) => res.json())
            .then((res) => {
                setPopularMovies((prev) => {

                    const newMovies = res.results.filter(
                        (newMovie) => !prev.some((existingMovie) => existingMovie.id === newMovie.id)
                    );
                    return [...prev, ...newMovies];
                });
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }

    const displayMovies = search.trim() === "" ? popularMovies : searchResults;
    const sortedMovies = [...displayMovies].sort((a, b) => {
        return sortOrder === "asc" 
            ? a.vote_average - b.vote_average 
            : b.vote_average - a.vote_average;
    });

    return (
        <div className="px-6 md:px-12 py-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                    Home
                </h1>
                {/* user?.isAuth && (
                    <p className="text-lg font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                        Welcome back, {user.name}!
                    </p>
                ) */}
            </div>

            {search.trim() === "" && popularMovies.length > 0 && (
                <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 text-gray-700">Top Trending</h2>
                    <SliderNumber slides={popularMovies.slice(0, 10)} />
                </div>
            )}

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 bg-white sticky top-0 z-10 border-b border-gray-100">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-2 border-gray-200 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 w-full md:max-w-md transition-colors shadow-sm"
                />
                
                <DropDown
                    onCategoryChange={(type) => {
                        setCategory(type);
                        setPopularMovies([]);
                        setPage(1);
                    }}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
                {sortedMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            {loading && (
                <div className="flex justify-center mt-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            )}
        </div>
    );
}

export default HomePage;