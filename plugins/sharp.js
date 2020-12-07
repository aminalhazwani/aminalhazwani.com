const fs = require("fs");
const glob = require("glob");
const path = require("path");
const sharp = require("sharp");

const resizes = [
  {
    src: "./src/images/*.jpg",
    dist: "./dist/images/2x",
    percent: 100,
  },
  {
    src: "./src/images/*.jpg",
    dist: "./dist/images/1.5x",
    percent: 75,
  },
  {
    src: "./src/images/*.jpg",
    dist: "./dist/images/1x",
    percent: 50,
  },
];

const formats = [
  {
    src: "./src/images/*.jpg",
    dist: "./dist/images/webp",
    format: "webp",
  },
];

resizes.forEach((resize) => {
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

formats.forEach((format) => {
  if (!fs.existsSync(format.dist)) {
    fs.mkdirSync(format.dist, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }

  let files = glob.sync(format.src);

  files.forEach((file) => {
    let filename = path.basename(file);
    const image = sharp(file);
    image
      .toFile(`${format.dist}/${filename.replace("jpg", format.format)}`)
      .catch((err) => {
        console.log(err);
      });
  });
});
