import multer from "multer"
import path from "path"
import fs from "fs"
// import uuid from "uuid/v4";

const uploadMultiple = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8000000 },
  fileFilter: function (req,file, cb) {
    console.log(file,1212)
    checkFileType(file, cb);
  }
}).array("image", 12);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8000000 },
  fileFilter: async function (req, file, cb) {
  checkFileType(file, cb);
  }
}).single("image");

// // Check file Type
function checkFileType(file, cb) {

  // Allowed ext
  const fileTypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: Images Only !!!");
  }
}

export { uploadMultiple, upload };