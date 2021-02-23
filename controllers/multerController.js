let multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const uploadFile = (req, res, next) => {
  let storage = multer.diskStorage({
    destination: "./uploads/images",
    filename: function (req, file, cb) {
      cb(null, uuidv4() + "." + file.mimetype.split("/")[1]);
    },
  });

  //max file size should be 2MB

  let uploads = multer({
    storage: storage,
    limits: { fileSize: 1 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  }).array("file");

  uploads(req, res, (err) => {
    if (err && err.code === "LIMIT_FILE_SIZE") {
      res.send({ errorSource: "image upload", detail: "image is to big" });
    } else if (
      err &&
      err.message === "Only .png, .jpg and .jpeg format allowed!"
    ) {
      res.send({ errorSource: "image upload", detail: "wrong image format" });
    } else if (err) {
      res.send(err);
    } else {
      next();
    }
  });
};

module.exports = uploadFile;
