
import { promisify } from "util";
import fs from "fs";
import convert from "heic-convert";

(async () => {
    const files = fs.readdirSync('./images');
    // console.log(files);
    for (const file of files) {
        if (!file.endsWith('.HEIC')) {
            continue;
        }
        const filePath = `/Users/emizentech/Documents/max/NodeJS/express/search/images/${file}`;
        console.log(filePath);
        const inputBuffer = await promisify(fs.readFile)(filePath);
        const images = await convert.all({
            buffer: inputBuffer, // the HEIC file buffer
            format: 'JPEG'       // output format
        });

        for (let idx in images) {
            const image = images[idx];
            const outputBuffer = await image.convert();
            await promisify(fs.writeFile)(`./jpg/${file}.jpg`, outputBuffer);
        }
    }

})();