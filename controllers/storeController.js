
import productModel from "../models/productModel.js";

const showProducts = async (req,res) => {
    try {
        const products = await productModel.find()
        console.log("Products found:", products.length);
        res.render("store/product",{products})
    } catch (error) {
        console.log("Error fetching products:", error.message);
        res.render("store/product",{products: []})
    }
}

export {showProducts}
