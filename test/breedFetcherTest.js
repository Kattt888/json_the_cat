const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      assert.isString(desc);
      assert.isAbove(desc.length, 0);
      done();
    });
  });

  it('returns an error for an invalid/non-existent breed, via callback', (done) => {
    fetchBreedDescription('InvalidBreed', (err, desc) => {
      assert.isNotNull(err);
      assert.isNull(desc);
      done();
    });
  });

});
