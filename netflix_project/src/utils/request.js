
const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;


// {
//     "genres": [
//       {
//         "id": 28,
//         "name": "Action"
//       },
//       {
//         "id": 12,
//         "name": "Adventure"
//       },
//       {
//         "id": 16,
//         "name": "Animation"
//       },
//       {
//         "id": 35,
//         "name": "Comedy"
//       },
//       {
//         "id": 80,
//         "name": "Crime"
//       },
//       {
//         "id": 99,
//         "name": "Documentary"
//       },
//       {
//         "id": 18,
//         "name": "Drama"
//       },
//       {
//         "id": 10751,
//         "name": "Family"
//       },
//       {
//         "id": 14,
//         "name": "Fantasy"
//       },
//       {
//         "id": 36,
//         "name": "History"
//       },
//       {
//         "id": 27,
//         "name": "Horror"
//       },
//       {
//         "id": 10402,
//         "name": "Music"
//       },
//       {
//         "id": 9648,
//         "name": "Mystery"
//       },
//       {
//         "id": 10749,
//         "name": "Romance"
//       },
//       {
//         "id": 878,
//         "name": "Science Fiction"
//       },
//       {
//         "id": 10770,
//         "name": "TV Movie"
//       },
//       {
//         "id": 53,
//         "name": "Thriller"
//       },
//       {
//         "id": 10752,
//         "name": "War"
//       },
//       {
//         "id": 37,
//         "name": "Western"
//       }
//     ]
//   }




