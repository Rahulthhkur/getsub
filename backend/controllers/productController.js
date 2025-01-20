import { v2 as cloudinary } from "cloudinary";
import { json } from "express";
import productModel from '../models/productModel.js'


// Function for add product
const addProducts = async (req, res) => {

    try {
        const { name, features, description, price, category, colors, bestseller } = req.body;

        // Extract uploaded files
        const image1 = req.files.image1 ? req.files.image1[0] : null;
        const image2 = req.files.image2 ? req.files.image2[0] : null;
        const image3 = req.files.image3 ? req.files.image3[0] : null;
        const image4 = req.files.image4 ? req.files.image4[0] : null;

        const images = [image1, image2, image3, image4].filter((item) => item !== null)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )

        const productData = {
            name,
            features,
            category,
            description,
            price: Number(price),
            colors: JSON.parse(colors),
            bestseller: bestseller === "true" ? true : false,
            image: imagesUrl,
            date: Date.now()
        }


        console.log(productData);

        const product = new productModel(productData);
        await product.save()

        res.json({success:true, message:"Product Added"});


        // Validate input data
        if (!name || !description || !price || !category) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};



// Function for list product
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true ,products})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }

}

// Function for removing product
const removeProducts = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Product removed"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }

}

// Function for single product info
const singleProducts = async (req, res) => {

    try {
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true, product})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }

}

export { addProducts, listProducts, removeProducts, singleProducts } 