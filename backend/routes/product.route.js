// const express= require("express")
// const multer = require("multer");
// const path = require("path");


// const product_routes = express.Router()

// const {getproduct, postproduct, updateproduct, deleteproduct} =require("../controller/product.controller")


// const storage= multer.diskStorage({
//     destination:"./uploads",
//     filename: function(req, file, cb){
//         cb(null, `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`)
//     }

// })


// const upload = multer({storage:storage})

// product_routes.get("/getproduct", getproduct)
// product_routes.post("/postproduct", upload.single('upload_image'), postproduct)
// product_routes.put("/updateproduct/:id", upload.single('upload_image'), updateproduct)
// product_routes.delete("/deleteproduct/:id", deleteproduct) 

// module.exports= {product_routes}



const express = require("express");
const multer = require("multer");
const path = require("path");

const { getproduct, postproduct, updateproduct, deleteproduct } = require("../controller/product.controller");

const product_routes = express.Router();

// configure multer storage options
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  }
});

// configure multer upload options
const upload = multer({
  storage: storage,
  // filter uploaded files based on their mime type and file extension
  fileFilter: function(req, file, cb) {
    if (
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/png" &&
      path.extname(file.originalname) !== ".jpg" &&
      path.extname(file.originalname) !== ".png"
    ) {
      return cb(new Error("Only .jpg or .png files are allowed"));
    }
    cb(null, true);
  }
});

// define product API routes
product_routes.get("/getproduct", getproduct);
product_routes.post("/postproduct", upload.single("upload_image"), postproduct);
// product_routes.put("/updateproduct/:id", upload.single("upload_image"), updateproduct);
product_routes.put("/updateproduct/:id",upload.single("upload_image") ,updateproduct);
product_routes.delete("/deleteproduct/:id", deleteproduct);

module.exports = { product_routes };
