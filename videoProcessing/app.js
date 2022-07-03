var ffmpeg = require('ffmpeg');
try {
  new ffmpeg('./ElephantsDream.mp4', function (err, video) {
    if (!err) {
      console.log(video.metadata);
      /* // Video metadata
      console.log(video.metadata);
      // FFmpeg configuration
      console.log(video.info_configuration); */

      /* video.fnExtractSoundToMP3('./your_audio_file.mp3', function (error, file) {
        console.log({ error });
        if (!error)
          console.log('Audio file: ' + file);
      }); */


      /* video.fnExtractFrameToJPG('./image', {
        frame_rate: 1,
        number: 4,
        file_name: 'my_frame_%t_%s',

      }, function (error, files) {
        console.log({ error, files });
        if (!error)
          console.log('Frames: ' + files);
      }); */


    } else {
      console.log('Error: ' + err);
    }
  });
} catch (e) {
  console.log(e.code);
  console.log(e.msg);
}