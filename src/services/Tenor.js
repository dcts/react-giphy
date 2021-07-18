/**
 * Tenor API Service
 * - search for keyword
 * - get relevant results (tiny preview URL and large target URL)
 * - EXAMPLE: "https://g.tenor.com/v1/search?q=puppy&key=XXXX&limit=20"
 */
const axios = require("axios");

class Tenor {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  search(keyword, nbrOfResults = 40) {
    const url = `https://g.tenor.com/v1/search?q=${keyword}&key=${this.apiKey}&limit=${nbrOfResults}`;
    return axios.get(url).then(response => {
      return response.data.results.map((o, indx) => {
        return {
          source: "tenor",
          rank: indx,
          tinygif: o.media[0].tinygif.url,
          gif: o.media[0].gif.url
        };
      });
    }).catch(error => {
      console.log(error);
    })
  }
}

export default Tenor;
