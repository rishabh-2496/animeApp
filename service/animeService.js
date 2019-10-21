export const getTopUpcomingAnimes = async () => {
  let response = await fetch('https://api.jikan.moe/v3/top/anime/1/upcoming');
  let data = await response.json();
  return data.top;
};

export const getTopAiringAnimes = async () => {
  let response = await fetch('https://api.jikan.moe/v3/top/anime/1/airing');
  let data = await response.json();
  return data.top;
};

export const getTopAnimeMovies = async () => {
  let response = await fetch('https://api.jikan.moe/v3/top/anime/1/movie');
  let data = await response.json();
  return data.top;
};

export const getTopSpecials = async () => {
  let response = await fetch('https://api.jikan.moe/v3/top/anime/1/special');
  let data = await response.json();
  return data.top;
};

export const getTopTv = async () => {
  let response = await fetch('https://api.jikan.moe/v3/top/anime/1/tv');
  let data = await response.json();
  return data.top;
};

export const getAnimeData = async animeId => {
  let endpoint = 'https://api.jikan.moe/v3/anime/' + animeId;
  console.log(endpoint);
  let response = await fetch(endpoint);
  let data = await response.json();
  return data;
};

export const getAnimeCharacters = async animeId => {
  let endpoint =
    'https://api.jikan.moe/v3/anime/' + animeId + '/characters_staff';
  let response = await fetch(endpoint);
  let data = await response.json();
  return data.characters;
};

export const getAnimeRecommendations = async animeId => {
  let endpoint =
    'https://api.jikan.moe/v3/anime/' + animeId + '/recommendations';
  let response = await fetch(endpoint);
  let data = await response.json();
  return data.recommendations;
};

export const getAnimeReviews = async animeId => {
  let endpoint = 'https://api.jikan.moe/v3/anime/' + animeId + '/reviews';
  let response = await fetch(endpoint);
  let data = await response.json();
  return data.reviews;
};
