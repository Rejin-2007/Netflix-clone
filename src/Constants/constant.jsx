export const apiBaseUrl='https://api.themoviedb.org/3';
export const API_KEY="c69c61462d2e170dca073899943036aa";
export const imageUrl = 'https://image.tmdb.org/t/p/original';
export const originals =`${apiBaseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`
export const ActionMovies=`${apiBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`
export const RomanceMovies=` ${apiBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const HorrorMovies=` ${apiBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`
export const ComedyMovies=`${apiBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`
export const trending =`${apiBaseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`
export const Documentaries= `${apiBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`
