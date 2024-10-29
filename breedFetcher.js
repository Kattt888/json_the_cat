const needle = require('needle');
const breedName = process.argv[2];

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.error("Error fetching data:", error);
    return;
  }
  const breed = body[0];
  if (breed) {
    console.log("Description:", breed.description);
  } else {
    console.log(`Breed "${breedName}" not found.`);
  }
});
