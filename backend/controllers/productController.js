


// Function for add product
const addProducts = async (req, res)=>{
    try {
        const {name, features, description, price, category, colors, bestseller}= req.body;

        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]
        const image4 = req.files.image4[0]

        console.log(name, features, description, price, category, colors, bestseller);
        console.log(image1, image2, image3, image4);

        res.json({});

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}


// Function for list product
const listProducts = async (req, res)=>{
    
}

// Function for removing product
const removeProducts = async (req, res)=>{
    
}

// Function for single product info
const singleProducts = async (req, res)=>{
    
}

export {addProducts,listProducts,removeProducts,singleProducts} 