let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let Restaurant_list = new Schema({
  name: { type: String },
  city: { type: String },
  location_id: { type: Number },
  city_id: { type: Number },
  locality: { type: String },
  thumb:{type:Array},
  aggregate_rating: {type:Number},
  rating_text: { type: String },
  min_price: {type:Number},
  contact_number: { type: String },
  cuisine_id: {type:Array},
  cuisine:{type:Array},
  image: { type: String },
  mealtype_id:{ type: Number },
});

let Restaurant_Model = mongoose.model(
  "restaurant",
  Restaurant_list,
  "restaurants"
);

// console.log(Restaurant_Model)//output --->Model { restaurant }
module.exports = Restaurant_Model