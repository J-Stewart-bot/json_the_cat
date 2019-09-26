const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    try {
      const data = JSON.parse(body);
      const desc = data[0].description;
      return callback(null, desc);
    } catch (error) {
      return callback(error);
    }
  });
};

module.exports = fetchBreedDescription;