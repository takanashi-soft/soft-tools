const { chatgpt, mylogic, takanashi, github, vault, yotools, fbdl, igdl, ttdl, ytmp3, ytmp4 } = require("./soft");

module.exports = {
  ai: {
    chatgpt,
    mylogic,
    takanashi
  },
  uploader: {
    github,
    vault,
    yotools
  },
  downloader: {
    fbdl,
    igdl,
    ttdl,
    ytmp3,
    ytmp4
  }
};
