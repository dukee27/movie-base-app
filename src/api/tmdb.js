const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
    },
};

export const BASE_URL =
    "https://api.themoviedb.org/3";