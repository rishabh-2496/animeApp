export const getTopMangas = async () => {
  let response = await fetch('https://api.jikan.moe/v3/top/manga/1/manga');
  let data = await response.json();
  return data.top;
};

export const getTopNovels = async () => {
  let response = await fetch('https://api.jikan.moe/v3/top/manga/1/novels');
  let data = await response.json();
  return data.top;
};

export const getTopOneShots = async () => {
  let response = await fetch('https://api.jikan.moe/v3/top/manga/1/oneshots');
  let data = await response.json();
  return data.top;
};

export const getTopDoujin = async () => {
  let response = await fetch('https://api.jikan.moe/v3/top/manga/1/doujin');
  let data = await response.json();
  return data.top;
};

export const getTopManhwa = async () => {
  let response = await fetch('https://api.jikan.moe/v3/top/manga/1/manhwa');
  let data = await response.json();
  return data.top;
};

export const getMangaData = async id => {
  let endpoint = 'https://api.jikan.moe/v3/manga/' + id;
  let response = await fetch(endpoint);
  let data = await response.json();
  return data;
};

export const getMangaCharacters = async id => {
  let endpoint = 'https://api.jikan.moe/v3/manga/' + id + '/characters';
  let response = await fetch(endpoint);
  let data = await response.json();
  return data.characters;
};

export const getMangaRecommendations = async id => {
  let endpoint = 'https://api.jikan.moe/v3/manga/' + id + '/recommendations';
  let response = await fetch(endpoint);
  let data = await response.json();
  return data.recommendations;
};

export const getMangaReviews = async id => {
  let endpoint = 'https://api.jikan.moe/v3/manga/' + id + '/reviews';
  let response = await fetch(endpoint);
  let data = await response.json();
  return data.reviews;
};
