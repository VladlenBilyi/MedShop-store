const transporter = require("../config/mail");
const cartModel = require("../model/cart.model");
const orderModel = require("../model/order.model");
const productModel = require("../model/product.model");

const getOrder = async()=>{
    try{
        let data = await  orderModel.find().populate(['userID','orderData.productID'])

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
        let data = await  orderModel.find({id}).populate(['userID','productID'])

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



const createOrder = async(userID,location , payment,paymentType)=>{
    try{
    let findData = await cartModel.find({userID:userID},{_id : 0 , __v : 0}).populate(['userID','productID'])
        if(findData.length > 0){
            let totalBill = 0;
            for(let i=0;i<findData.length;i++){
                totalBill += findData[i].quantity * findData[i].productID.mrp
                await productModel.updateOne({id:findData[i].productID.id},{$set :{quantity:findData[i].productID.quantity - findData[i].quantity}})
            }
          let orderDatalist = await orderModel.create({
               userID,
               payment,
               location,
               paymentType,
               orderData:findData
            })

            if(!orderDatalist){

                return {
                    status:false,
                    massage : 'something went wrong please try again later !'
                }
            }
            else{
                await cartModel.deleteMany({userID:userID})
                transporter.sendMail({
                    to:findData[0].userID.email,
                    from:'medshoppe5@gmail.com',
                    subject:'order submitted',
                    html : `<h4>Hello ${findData[0].userID.username}</h4><br /><br /><p>Your order from MedShoppe has been submited successfull</p><br /><br />
                            <p>Total bill : ${totalBill}</p> <br />
                            <p>OrderId : ${orderDatalist._id} </p><br /><br />
                            <p>Thanks for choosing us </p>
                             `
                })
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


const getOrderDataForUser = async(userID)=>{
    try{
        let data = await  orderModel.find({userID}).populate('productID')
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