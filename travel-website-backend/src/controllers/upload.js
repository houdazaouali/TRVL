// const multer = require('multer');
// const path = require('path');

// // Configure multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Directory to save the uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); // Create a unique name for the file
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // Limit the file size to 5MB
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png/; // Accept only jpeg, jpg, png files
//     const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = fileTypes.test(file.mimetype);

//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb(new Error('Only images are allowed'));
//     }
//   }
// });
