const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  needle.get(url, (error, response, body) => {
    if (error) {
      callback(error, null); // pass the error to callback if there's an error
      return;
    }
    
    const breed = body[0];
    if (breed) {
      callback(null, breed.description); // null for error and the description for success
    } else {
      callback("Breed not found", null); // error message if breed not found
    }
  });
};

// Export the function
module.exports = { fetchBreedDescription };

