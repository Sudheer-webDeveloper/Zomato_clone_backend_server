const LocationModel = require('../models/LocationModel')

const home = (req,res)=>{
    res.status(200).send({api:"success",message:"working"})
}
const get_location_list = async(req,res)=>{
    let Location_result = await LocationModel.find(); 
    res.status(200).send({status:true,Location_result})
}

module.exports ={home,get_location_list}