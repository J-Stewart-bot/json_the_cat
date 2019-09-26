const request = require('request');

const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search/?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  try {
    const data = JSON.parse(body);
    const descrip = data[0].description;
    console.log(descrip);
  } catch (err) {
    console.log('Error: Breed not found');
  }
});