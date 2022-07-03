
ffmpeg -i input.mp4 -vcodec mpeg4 -vtag divx -vb 5000k -aspect 2.424 -r 23.976 -acodec ac3 -ac 6 -ab 384k Alice_In_Wonderland.avi



ffmpeg -i input.mp4
-preset veryfast -r 25 -g 75 -threads 4 -sc_threshold 0 
-map 0:v:0 -map 0:a:0? 
-filter:v:0 scale=h=240:w=-2  
-minrate:v:0 75k  
-maxrate:v:0 218k  
-bufsize:v:0 300k 
-b:v:0 150k  -c:a aac -b:a 128k -ac 2 
-var_stream_map "v:0,a:0" 
-master_pl_name master.m3u8 
-f hls -hls_time 3 -segment_time 6 
-hls_list_size 0 -segment_format mpegts 
-hls_segment_filename /res-%v/segment-%d.ts  ./OUTPUT.M3U8  1> log.txt 2>&1 






ffmpeg -i ./input.mp4 \
-filter_complex "[0]scale=-2:260[260];[0]scale=-2:480[480];[0]scale=-2:720[720];[0]scale=-2:1080[1080]" \
-map "[260]" \
-map 0:a \
-map "[480]" \
-map 0:a \
-map "[720]"  \
-f hls \
-hls_time 10 \
-var_stream_map "v:0,a:0,name:260 v:1,a:1,name:480 v:2,a:2,name:720 v:3,a:3,name:1080" \
-hls_segment_filename "%v_%03d.ts" \
-master_pl_name "master.m3u8" "output_%v.m3u8"


ffmpeg -i ./input.mp4 \
-filter_complex "[0]scale=-2:260[260];[0]scale=-2:480[480];[0]scale=-2:720[720];[0]scale=-2:1080[1080]" \
-map "[260]" \
-map 0:a \
-map "[480]" \
-map 0:a \
-map "[720]"  \
-f hls \
-hls_time 10 \
-var_stream_map "v:0,a:0,name:260 v:1,a:1,name:480 v:2,a:2,name:720 v:3,a:3,name:1080" \
-hls_segment_filename "%v_%03d.ts" \
-master_pl_name "master.m3u8" "output_%v.m3u8"



ffmpeg -i ElephantsDream.mp4 -b:v 1M -g 60 -hls_time 2 -hls_list_size 0 -hls_segment_size 200000 ./m3u8/output.m3u8







input_file="1600885175-video (1).mp4"
output_file="1600885175-video-no-audio.mp4"

ffmpeg -i $input_file -c copy -an $output_file




ffmpeg -y -r 24 -i 1600885175-video-no-audio.mp4 1600885175-video-no-audio2.mp4


ffmpeg -i ElephantsDream.mp4 -vcodec libx265 -crf 28 output.mp4



ffmpeg -i ElephantsDream.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus output.webm


time ffmpeg -i input.mp4 -filter:v fps=fps=1/60 ffmpeg_%0d.bmp


time for i in {0..39} ; do ffmpeg -accurate_seek -ss `echo $i*60.0 | bc` -i IMG_2027.MOV  -frames:v 1 period_down_$i.bmp ; done


time ffmpeg -i IMG_2027.MOV -filter:v fps=fps=1/60 ffmpeg_%0d.bmp

ffmpeg -i IMG_2084.MOV '%04d.png' 