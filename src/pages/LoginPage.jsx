import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    login(name);
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex flex-col justify-center items-center px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
    
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-sm text-gray-500">Enter your name to unlock your personalized vault</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username or Name
            </label>
            <input
              type="text"
              placeholder="e.g., name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 transition-colors text-gray-800 placeholder-gray-400 shadow-sm"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span>Sign In</span>
            <span>&rarr;</span>
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-gray-400 border-t border-gray-100 pt-4">
          Secured with local authentication state
        </div>

      </div>
    </div>
  );
}

export default LoginPage;