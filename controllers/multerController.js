let multer = require("multer");
const { v4: uuidv4 } = require("uuid");

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
}).single("file");

module.exports = uploads;
