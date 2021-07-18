// /**
//  * Giphy API Service
//  * - search for keyword
//  * - get relevant results (tiny preview URL and large target URL)
//  * - EXAMPLE: "https://api.giphy.com/v1/gifs/search?api_key=XXXX&q=dog&limit=25&offset=0&rating=g&lang=en"
//  */
// const axios = require("axios");

// class Giphy {
//   constructor(apiKey) {
//     this.apiKey = apiKey;
//   }

//   async search(keyword, nbrOfResults = 40) {
//     const url = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${keyword}&limit=${nbrOfResults}&offset=0&rating=g&lang=en`;
//     const response = await axios.get(url);
//     return response.data.data.map((o, indx) => {
//       return {
//         source: "giphy",
//         rank: indx,
//         tinygif: `https://i.giphy.com/media/${o.id}/giphy-preview.webp`,
//         gif: `https://i.giphy.com/media/${o.id}/giphy.gif`,
//       };
//     });
//   }
// }

// // module.exports = Giphy;
