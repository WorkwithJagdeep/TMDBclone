const API_KEY ="f846fc88790620faca2a01aa8693e353"

const requests = {
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    popularmovie:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US&sort_by=release_date`,
    TopRatedmovie: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    PopularTV:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    TopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests
