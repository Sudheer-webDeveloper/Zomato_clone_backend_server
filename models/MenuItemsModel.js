let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let MenuItems_list = new Schema(
    {
        "name":{type:String},
        "description":{type:String},
        "ingridients":{type:Number},
        "restaurantId": {
         type:Schema.Types.ObjectId   // it is a special datatype in objectId
        },
        "image": {type:String},
        "qty": {type:Number},
        "price": {type:String}
      }
);

let MenuItems_Model = mongoose.model(
  "menu_item",
  MenuItems_list,
  "menu_items"
);

console.log(MenuItems_Model)//output --->Model { menu_item }

module.exports = MenuItems_Model
