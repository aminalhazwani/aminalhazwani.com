const fs = require("fs");
const glob = require("glob");
const path = require("path");
const sharp = require("sharp");

const jpg = [
  {
    src: "./src/images/*.jpg",
    dist: "./dist/images/2x",
    percent: 100,
  },
  {
    src: "./src/images/*.jpg",
    dist: "./dist/images/1x",
    percent: 50,
  },
];

const webp = [
  {
    src: "./src/images/*.jpg",
    dist: "./dist/images/2x",
    percent: 100,
    format: "webp",
  },
  {
    src: "./src/images/*.jpg",
    dist: "./dist/images/1x",
    percent: 50,
    format: "webp",
  },
];

jpg.forEach((resize) => {
  if (!fs.existsSync(resize.dist)) {
    fs.mkdirSync(resize.dist, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }

  let files = glob.sync(resize.src);

  files.forEach((file) => {
    let filename = path.basename(file);
    const image = sharp(file);
    image
      .metadata()
      .then((metadata) => {
        return image
          .resize(Math.round(metadata.width * (resize.percent / 100)))
          .jpeg()
          .toFile(`${resize.dist}/${filename}`)
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

webp.forEach((resize) => {
  if (!fs.existsSync(resize.dist)) {
    fs.mkdirSync(resize.dist, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }

  let files = glob.sync(resize.src);

  files.forEach((file) => {
    let filename = path.basename(file);
    const image = sharp(file);
    image
      .metadata()
      .then((metadata) => {
        return image
          .resize(Math.round(metadata.width * (resize.percent / 100)))
          .jpeg()
          .toFile(`${resize.dist}/${filename.replace("jpg", resize.format)}`)
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
