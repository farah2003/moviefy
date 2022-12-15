export const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
export const searchApi = (value) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US&query=${value}&page=1`;
};
export const detailsApi = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US`;
};

export const movieInformationApi = (movieId, type) => {
  return `https://api.themoviedb.org/3/movie/${movieId}/${type}?api_key=bf42acf712bba686cfff9820897f4edb&language=en-US`;
};

export const moviesTypeApi = (type) => {
  return `https://api.themoviedb.org/3/movie/${type}?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US&page=1`;
};
