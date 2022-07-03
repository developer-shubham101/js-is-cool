var fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');

// open input stream
var infs = new ffmpeg


//ffmpeg -i ElephantsDream.mp4 -b:v 1M -g 60 -hls_time 2 -hls_list_size 0 -hls_segment_size 200000 ./m3u8/output.m3u8
infs.addInput('1600885175-video (1).mp4').outputOptions([
  '-b:v 1M',
  '-g 60',
  '-hls_time 2',
  '-hls_list_size 0',
  '-hls_segment_filename', 'file/fileSequence%d.ts'
]).output('file/video.m3u8')
  .on('start', function (commandLine) {
    console.log('Spawned Ffmpeg with command: ' + commandLine);
  })
  .on('error', function (err, stdout, stderr) {
    console.log('An error occurred: ' + err.message, err, stderr);
  })
  .on('progress', function (progress) {
    console.log('Processing: ' + progress.percent + '% done')
  })
  .on('end', function (err, stdout, stderr) {
    console.log('Finished processing!' /*, err, stdout, stderr*/)
  })
  .run()