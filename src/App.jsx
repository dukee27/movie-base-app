
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState({
    name: "",
    isAuth: false,
  });

  function login(name) {
    setUser({
      name,
      isAuth: true,
    });
  }

  function logout() {
    setUser({
      name: "",
      isAuth: false,
    });
  }

  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path = "/movie/:id"
            element = {<MovieDetailsPage />}
          />
          <Route
            path="*"
            element={
              <h1 style={{ padding: "0 1.5rem" }}>
                404 Not Found
              </h1>
            }
          />
        </Routes>

        <div>footer</div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;