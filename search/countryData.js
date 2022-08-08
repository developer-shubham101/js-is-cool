import fs from "fs";
import https from "https";
import convertSvgToPng from "convert-svg-to-png";

// read the file
let content = fs.readFileSync("./countryData/countryEmoji.json");
let content2 = fs.readFileSync("./countryData/countryISO.json");
// print it
// console.log(content.toString());

content = JSON.parse(content);
content2 = JSON.parse(content2);



let county = {};
content.forEach(element => {
  county[element.ISO] = element;
});

content2.forEach(element => {
  let tmpItem = county[element['ISO 3166-1 alpha2']];
  county[element['ISO 3166-1 alpha2']] = Object.assign({}, tmpItem, element);
});


console.log(county)



/* fs.writeFile('./countryData/country.json', JSON.stringify(county), err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
}) */







/* Object.keys(county).forEach(element => {
  const url = `https://countryflagsapi.com/svg/${element}`
  https.get(url, resp => resp.pipe(fs.createWriteStream(`./countryData/flags/${element}.svg`)));  
});
 */





const convertSvgToPngFun = async (inputFilePath) => {
  // const inputFilePath = './countryData/flags/AD.svg';
  const outputFilePath = await convertSvgToPng.convertFile(inputFilePath);

  console.log(outputFilePath);
  //=> "/path/to/my-image.png"
};



for (const element of Object.keys(county)) {
  console.log(element);
  try {
    await convertSvgToPngFun(`./countryData/flags/${element}.svg`);
  } catch (ex) {
    console.error(ex);
  }

}

//SK
//SE
//MO
//DK