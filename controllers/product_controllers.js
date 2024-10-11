const Product = require("../model/product")

const getProducts=async(req,res)=>{
    try {
        let products = await Product.find()

        res.status(200).json(products)


    } catch (err) {
        res.status(500).json(err)
    }
}


const getProduct=async(req,res)=>{
    try {
        const { id } = req.params

        const products = await Product.findById(id)

        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
}

const createProduct=async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(err)
    }

}


const updateProduct=async(req,res)=>{
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if (!product) {
            return res.status(400).json({ message: "Product Not Found" });

        }
        const updatedProduct = await Product.findById(id)
        return res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err)
    }


}

const deleteProduct=async(req,res)=>{
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(400).json({ message: "Product Not Found" });

        }
        return res.status(200).json({ message: "Product Deleted Successfully" });

    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
