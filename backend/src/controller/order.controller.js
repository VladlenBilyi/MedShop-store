const cartModel = require("../model/cart.model");
const orderModel = require("../model/order.model");

const getOrder = async()=>{
    try{
        let data = await  orderModel.find().populate(['userId','productId'])

        if(data.length == 0){
            return {
                status:false,
                massage : 'you dont have any order'
            }
        }
        else{
            return {
                status:true,
                massage : 'order data fetched successfully',
                data
            }
        }
    }
    catch(e){
        return {
            status:false,
            massage : e.message
        }
    }
}

const getSingleOrder = async(id)=>{
    try{
        let data = await  orderModel.find({id}).populate(['userId','productId'])

        if(!data){
            return {
                status:false,
                massage : 'you dont have any order'
            }
        }
        else{
            return {
                status:true,
                massage : 'single order data fetched successfully',
                data
            }
        }
    }
    catch(e){
        return {
            status:false,
            massage : e.message
        }
    }
}



const deleteOrder = async(id)=>{
    try{

        let deleted = await orderModel.deleteOne({id});

        if(deleted.acknowledged){
            return {
                status:true,
                massage : 'order daleted successfully',
            }
        }
        else{
            return {
                status:false,
                massage : 'something went wrong please try again later !'
            }
        }
    }
    catch(e){
        return {
            status:false,
            massage : e.message
        }   
     }


}

const packingSuccess = async(id)=>{
    try{

        let findData = await orderModel.findOne({id})
        if(findData){

            let updatedData = await orderModel.updateOne({id},{$set:{"packed":!findData.packing}});

            if(updatedData.acknowledged){
                return {
                    status:true,
                    massage : 'order packing successfully',
                }
            }
            else{
                return {
                    status:false,
                    massage : 'something went wrong please try again later !'
                }
            }
        }
        else{
            return {
                status:false,
                massage : 'something went wrong please try again later !'
            }
        }

    }
    catch(e){
        return {
            status:false,
            massage : e.message
        }   
     }
}

const shippingSuccess = async(id)=>{
    try{

        let findData = await orderModel.findOne({id})
        if(findData){

            let updatedData = await orderModel.updateOne({id},{$set:{"shipped":!findData.shipped}});

            if(updatedData.acknowledged){
                return {
                    status:true,
                    massage : 'order shipped successfully',
                }
            }
            else{
                return {
                    status:false,
                    massage : 'something went wrong please try again later !'
                }
            }
        }
        else{
            return {
                status:false,
                massage : 'something went wrong please try again later !'
            }
        }

    }
    catch(e){
        return {
            status:false,
            massage : e.message
        }   
     }
}


const deliverSuccess = async(id)=>{
    try{

        let findData = await orderModel.findOne({id})
        if(findData){

            let updatedData = await orderModel.updateOne({id},{$set:{"delivered":!findData.delivered}});

            if(updatedData.acknowledged){
                return {
                    status:true,
                    massage : 'order delivered successfully',
                }
            }
            else{
                return {
                    status:false,
                    massage : 'something went wrong please try again later !'
                }
            }
        }
        else{
            return {
                status:false,
                massage : 'something went wrong please try again later !'
            }
        }

    }
    catch(e){
        return {
            status:false,
            massage : e.message
        }   
     }
}



const createOrder = async({userId,location , payment,paymentType})=>{

    try{
    let findData = await cartModel.find({userId:userId},{_id : 0})
    console.log(findData)
        if(findData.length > 0){
          let orderData = await orderModel.create({
               data:findData,
               payment,
               location,
               paymentType
          })
            if(!orderData){
                return {
                    status:false,
                    massage : 'something went wrong please try again later !'
                }
            }
            else{
                return {
                    status:true,
                    massage : 'order submitted successfully',
                }
            }
        }
        else{
            return {
                status:false,
                massage : 'something went wrong please try again later !'
            }
        }

    }
    catch(e){
        return {
            status:false,
            massage : e.message
        }   
     }

}


const getOrderDataForUser = async(userId)=>{
    try{
        let data = await  orderModel.find({userId}).populate('productId')
        if(!data){
            return {
                status:false,
                massage : 'you dont have any order'
            }
        }
        else{
            return {
                status:true,
                massage : 'single order data fetched successfully',
                data
            }
        }
    }
    catch(e){
        return {
            status:false,
            massage : e.message
        }
    }
}

module.exports = {getOrder,deleteOrder,packingSuccess,shippingSuccess,deliverSuccess , createOrder , getSingleOrder , getOrderDataForUser}