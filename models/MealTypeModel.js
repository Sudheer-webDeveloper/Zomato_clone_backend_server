let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let MealType_list = new Schema({
    "name": {type:String},
    "content": {type:String},
    "image": {type:String},
    "meal_type": {type:Number}
  });

let MealType_Model = mongoose.model(
  "mealType",
  MealType_list,
  "meal_types"
);

console.log(MealType_Model)//output --->Model { mealType }

module.exports = MealType_Model
