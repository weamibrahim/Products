const Product = require("../Models/Product");

const ProductController = {};

ProductController.GetAllProduct = async (req, res, next) => {
  try {
    const Products = await Product.find();
    //console.log(Products)
    return res.status(200).json(Products);
  } catch (err) {
    next(err);
  }
};

ProductController.GetProduct = async (req, res, next) => {
  const ProductId = req.params.id;
  console.log(ProductId);
  try {
    const product = await Product.findById(ProductId); 
    console.log(product);
    return res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

ProductController.CreateProduct = async (req, res, next) => {
  try {
    const { name, category, price } = req.body;

    const newProduct = new Product({
      name,
      category,
      price,
    });

    await newProduct.save();
    return res
      .status(200)
      .json({ message: "Product created successfully", newProduct });
  } catch (err) {
    next(err);
  }
};

ProductController.UpdateProduct = async (req, res, next) => {
  try {
    const ProductId = req.params.id;
    console.log(ProductId);
    const productData = req.body;

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: ProductId },
      productData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res
      .status(200)
      .json({ message: "Product updated successfully", updatedProduct });
  } catch (err) {
    next(err);
  }
};

module.exports = ProductController;
