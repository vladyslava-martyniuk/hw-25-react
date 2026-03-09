const CLIENT_ID = 'aa33c8a1e815f629f34e83453db90d473d24b0718f6b87f4e2e5a443df491968'; 
const BASE_URL = 'https://api.trakt.tv';

const headers = {
  'Content-Type': 'application/json',
  'trakt-api-version': '2',
  'trakt-api-key': CLIENT_ID,
};


export async function fetchTrending() {
  const response = await fetch(`${BASE_URL}/movies/trending`, { headers });
  return response.json();
}


export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, { headers });
  return response.json();
}

export async function getMovieDetails(movieId) {
  const response = await fetch(`${BASE_URL}/movies/${movieId}?extended=full`, { headers });
  return response.json();
}


export async function getMovieCredits(movieId) {
  const response = await fetch(`${BASE_URL}/movies/${movieId}/people`, { headers });
  return response.json();
}


export async function getMovieReviews(movieId) {
  const response = await fetch(`${BASE_URL}/movies/${movieId}/comments`, { headers });
  return response.json();
}