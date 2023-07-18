Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "name",
  streamUrl: "http://localhost:8889/mystream",
  wsPort: 9999,
  ffmpegOptions: {
    "-stats": "",
    "-r": 30,
  },
});

// docker run --rm -it \
// -e MTX_PROTOCOLS=tcp \
// -p 8554:8554 \
// -p 1935:1935 \
// -p 8888:8888 \
// -p 8889:8889 \
// --network=host
// bluenviron/mediamtx
