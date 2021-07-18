// /**
//  * GifFetcher API Service
//  * - search for keyword from all sources (Giphy and Tenor)
//  * - get array of result Objects:
//  *   {
//  *      "source": "giphy"
//  *      "tiny": url...
//  *      "gif": url...
//  *      "keyword": "cute puppy"
//  *      "ranking": 12
//  *   }
//  */

// const Giphy = require("./Giphy.js");
// const Tenor = require("./Tenor.js");

// class GifFetcher {
//   constructor(giphyApiKey, tenorApiKey) {
//     this.giphy = new Giphy(giphyApiKey);
//     this.tenor = new Tenor(tenorApiKey);
//   }

//   async search(keyword) {
//     const searchPromises = [
//       this.giphy.search(keyword),
//       this.tenor.search(keyword),
//     ];
//     const results = await Promise.all(searchPromises);
//     return results.flat().sort((a,b) => a.rank - b.rank)
//   }
// }

// // module.exports = GifFetcher;
// // export default GifFetcher;
