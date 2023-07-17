Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "name",
  streamUrl: "rtsp://localhost:8554/mystream",
  wsPort: 9999,
  ffmpegOptions: {
    "-stats": "",
    "-r": 30,
  },
});
