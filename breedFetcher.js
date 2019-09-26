const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    try {
      const data = JSON.parse(body);
      const info = data[0].description;
      const desc = info.substring(0, info.length - 1);
      return callback(null, desc);
    } catch (error) {
      return callback(error, null);
    }
  });
};

module.exports = fetchBreedDescription;