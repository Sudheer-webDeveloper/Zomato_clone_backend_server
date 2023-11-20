const MealType_Model = require('../models/MealTypeModel')

const MealTypeController = async(req,res)=>{
    const result_mealType_list = await MealType_Model.find()
    res.status(200).send({meal_type_data:true,result_mealType_list})
}

module.exports ={MealTypeController}