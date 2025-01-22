const { verifyToken } = require("../Middleware/Authentication");
const ProductController = require("../Controller/ProductController");
const express = require("express");
const router = express.Router();


router.get("/all", verifyToken, ProductController.GetAllProduct);
router.get("/:id", verifyToken, ProductController.GetProduct);
router.post("/create", verifyToken, ProductController.CreateProduct);
router.put("/update/:id", verifyToken, ProductController.UpdateProduct);

module.exports = router;
