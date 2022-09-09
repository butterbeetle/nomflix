const API_KEY = "2cb8ab732c7872c736b4a3b8965da2f8";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMoive {
  id: number,
  backdrop_path: string,
  poster_path: string,
  title: string,
  overview: string,
}

export interface IGetMoviesResult {
  dates: {
    maximum: string,
    minimum: string,
  },
  page: number,
  results: IMoive[],
  total_pages: number,
  total_results: number,
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(response => response.json());
}