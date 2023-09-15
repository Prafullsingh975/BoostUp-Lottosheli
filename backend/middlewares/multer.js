const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const p = path.join(__dirname, "..", "uploads");
    cb(null, p); // file path  where you want to upload it
  },
  filename: function (req, file, cb) {
    const date = new Date();
    const fileName =
      Math.floor(Math.random() * 10000000) +
      date.getTime() +
      path.extname(file.originalname); //crating an unique file name with the help og time
    cb(null, fileName);
  },
});

function fileFilter(req, file, cb) {
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted

  //   cb(null, false);

  // To accept the file pass `true`, like so:
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/webp"
  )
    cb(null, true);
  // To reject this file pass `false`, like so:
  // You can always pass an error if something goes wrong:
  else cb(new Error("I don't have a clue!"), false);
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
