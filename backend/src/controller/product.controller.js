const productModel = require("../model/product.model");

const createProduct = async(newProduct)=>{
    try{
        let created = await productModel.create({...newProduct});
        if(created){
        return {
                status:true,
                massage:'Product added sucessfully'
            }
        }
        else{
         return {
             status:false,
             massage:'Something went wrong please try again later !'
         }
        }
      }
      catch(e){
        return {
            status:false,
            massage:e.message
        }
      }
}


const getProduct = async()=>{
    try{
        let findData = await productModel.find();
        if(findData.length > 0){
        return {
                status:true,
                massage:'Product data fetched sucessfully',
                data : findData
            }
        }
        else{
         return {
             status:false,
             massage:'Something went wrong please try again later !'
         }
        }
      }
      catch(e){
        return {
            status:false,
            massage:e.message
        }
    }
}
const getOneProduct = async(id)=>{
    try{
        let findData = await productModel.findOne({_id:id});
        if(findData){
        return {
                status:true,
                massage:'Product data fetched sucessfully',
                data : findData
            }
        }
        else{
         return {
             status:false,
             massage:'Something went wrong please try again later !'
         }
        }
      }
      catch(e){
        return {
            status:false,
            massage:e.message
        }
    }
}




const updateProduct = async(id,newData)=>{
    try{
        let updatedData = await productModel.replaceOne({_id:id},newData);
        if(updatedData.acknowledged){
        return {
                status:true,
                massage:'Product updated sucessfully',
            }
        }
        else{
         return {
             status:false,
             massage:'Something went wrong please try again later !'
         }
        }
      }
      catch(e){
        return {
            status:false,
            massage:e.message
        }
      }
}

const deleteProduct = async(id)=>{
    try{
        let deletedData = await productModel.deleteOne({_id:id});
        if(deletedData.acknowledged){
        return {
                status:true,
                massage:'Product deleted sucessfully',
            }
        }
        else{
         return {
             status:false,
             massage:'Something went wrong please try again later !'
         }
        }
      }
      catch(e){
        return {
            status:false,
            massage:e.message
        }
      }
}

const updateQuantity = async(id,val)=>{
    try{
        let isPresent = await productModel.find({_id:id});
        if(isPresent){
        let newValue = isPresent.quantity + val
        let updateQuantityData = await productModel.deleteOne({_id:id},{$set:{"quantity":newValue}});
        if(updateQuantityData.acknowledged){
        return {
                status:true,
                massage:'Product Quantity updated sucessfully'
             }
        }
        }
        else{
         return {
             status:false,
             massage:'Something went wrong please try again later !'
         }
        }
      }
      catch(e){
        return {
            status:false,
            massage:e.message
        }
      }
}


module.exports = {getProduct,updateProduct,deleteProduct,updateQuantity,createProduct , getOneProduct};