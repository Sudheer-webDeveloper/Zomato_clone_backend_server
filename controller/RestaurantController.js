const Restaurant_Model = require('../models/RestaurantModel')

const RestaurantController = async(req,res)=>{
    let {loc_id} = req.params
    console.log(typeof loc_id)
    const Restaurant_list = await Restaurant_Model.find({location_id:loc_id},{name:1,city:1,locality:1,image:1})
    res.status(200).send({Restaurant_data:true,Restaurant_list})
}
const getRestaurantById = async(req,res)=>{
    let {id} = req.params
    const Restaurant_list = await Restaurant_Model.findById(id)
    res.status(200).send({Restaurant_data:true,Restaurant_list})
}

module.exports = {RestaurantController,getRestaurantById}