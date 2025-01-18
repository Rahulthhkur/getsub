import express from 'express'
import {addProducts,listProducts,removeProducts,singleProducts} from '../controllers/productController.js'

const productRouter = express.Router();

productRouter.post('/add',addProducts);
productRouter.post('/remove',removeProducts);
productRouter.post('/single',singleProducts);
productRouter.get('/list',listProducts);

export default productRouter


