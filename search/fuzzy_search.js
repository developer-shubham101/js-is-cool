const fs = require('fs');
const path = require('path');

let rawdata = fs.readFileSync(path.resolve(__dirname, './files/countries.json'));
let countries = JSON.parse(rawdata);


var searchKey = 'indai';


countries = countries.filter(country => {
  /* return {
    country: country.country,
    ratio: 12
  }; */


  var matchKeywords = country.country.toLowerCase().match(/[indai]/gi);
  var countryLength = country.country.length;


  // if (matchKeywords && (matchKeywords.length == countryLength)) {
  if (matchKeywords) {
    var charactersAvailabilityPercentage = (matchKeywords.length / countryLength) * 100;


    var matchCount = 0;


    matchKeywords.forEach((keywords, index) => {
      if (matchKeywords[index] == searchKey[index]) {
        matchCount++;
      }
    });

    var matchPercentage = (matchCount / countryLength) * 100;

    console.log({
      matchKeywords,
      countryLength,
      country: country.country,

      charactersAvailabilityPercentage,
      matchPercentage,
      matchCount
    });
  }

  return country.country.toLowerCase().includes(searchKey.toLowerCase());
});

// console.log(countries);