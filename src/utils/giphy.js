import 'whatwg-fetch';
const githubURL = "https://api.giphy.com/v1/gifs/";
const privateKey = "laDUQ8RYLnHN0oiuUVZ9ojMPRXVUqYQX";
const get = require('lodash/get');

const giphy = {
  getRandom: () => {
    return fetch(`${githubURL}random?api_key=${privateKey}&tag=acme&rating=G&lang=en`)
      .then(response => response.json())
      .then(json => json.data);
  },
  get: (searchText, page) => {
    return fetch(`${githubURL}search?api_key=${privateKey}&q=${searchText}&limit=${25 * page}&offset=0&rating=G&lang=en`)
      .then(response => response.json())
      .then(json => json.data);
  }
};

export default giphy;
