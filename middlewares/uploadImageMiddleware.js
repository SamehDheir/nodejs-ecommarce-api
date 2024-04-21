const multer = require("multer");

const ApiError = require("../utils/apiError");

const multerOption = () => {
  // 1- Disk Storage
  // const multerStorage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "/uploads/categories");
  //   },
  //   filename: function (req, file, cb) {
  //     const ext = file.mimetype.split("/")[1];
  //     const filename = `category-${uuidv4()}-${Date.now()}.${ext}`;
  //     cb(null, filename);
  //   },
  // });

  // 2- Memory Storage
  const multerStorage = multer.memoryStorage();

  const multerFilter = function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb(new ApiError("file allowed only image", 400), false);
    }
  };
  const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
  return upload;
};

exports. singleImageUpload = (fieldName) => multerOption().single(fieldName);

exports.uploadMixOfImages = (arrayOfFields) =>
  multerOption().fields(arrayOfFields);
