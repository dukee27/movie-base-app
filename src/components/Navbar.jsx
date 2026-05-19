import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

function Navbar() {
    // const { user } = useContext(AuthContext);

    return (
        <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
                
                <Link to="/" className="font-extrabold text-2xl tracking-wide hover:text-blue-400 transition-colors">
                    MovieBase
                </Link>

                <nav className="flex items-center gap-6 font-medium">
                    <Link to="/" className="hover:text-blue-400 transition-colors hidden sm:block">Home</Link>
                    <Link to="/about" className="hover:text-blue-400 transition-colors hidden sm:block">About</Link>
                    
                    {/* Auth */}
                    {/* user?.isAuth ? (
                        <div className="flex items-center gap-4">
                            <Link to="/profile" className="hover:text-blue-400 transition-colors">Profile</Link>
                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors text-sm shadow-md">
                                Logout
                            </button>
                        </div>
                    ) : ( */}
                        <Link to="/login" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition-colors text-sm shadow-md">
                            Login
                        </Link>
                    {/* ) */}
                </nav>

            </div>
        </header>
    );
}

export default Navbar;