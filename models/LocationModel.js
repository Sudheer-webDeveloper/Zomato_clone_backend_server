const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let LocationSchema = new Schema({
  name: { type: String },
  city_id: { type: String },
  location_id: { type: String },
  city: { type: String },
  country_name: { type: String },
});


const LocationModel = mongoose.model("location",LocationSchema,"locations")

module.exports = LocationModel