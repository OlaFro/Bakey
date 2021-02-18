let multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const uploadFile = (req, res, next) => {
  let storage = multer.diskStorage({
    destination: "../uploads/images",
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
  }).single("file");

  uploads(req, res, (err) => {
    if (err) {
      res.send({ errorSource: "image upload" });
    } else {
      next();
    }
  });
};

module.exports = uploadFile;
