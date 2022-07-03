
import { exec } from "child_process";

var cmd = './HelloPhotogrammetry "/Users/emizentech/Documents/max/NodeJS/express/videoProcessing/video/" "/Users/emizentech/Documents/max/NodeJS/express/videoProcessing/video/file.usdz"';

exec(cmd, function (error, stdout, stderr) {
    console.log({ error, stdout, stderr });
});