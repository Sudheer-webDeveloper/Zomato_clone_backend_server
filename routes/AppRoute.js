const express = require("express");
const cors = require('cors')
const router = express.Router();
const { home, get_location_list } = require("../controller/LocationController");
const { RestaurantController, getRestaurantById,} = require("../controller/RestaurantController");
const {MealTypeController} = require('../controller/MealTypeController');
const { MenuItemsController, MenuItemsById } = require("../controller/MenuItemsController");
const {registerUser ,loginUser , getProfile} = require("../controller/AuthController");


router.use(cors({
    credentials:true,
    origin:'http://localhost:5173' 
}))





router.get("/", home);
router.get("/get_location_list", get_location_list);

router.get("/get_restaurant_list_location_id/:loc_id", RestaurantController); // This route have a capability to give the multiple items becuase with location_id there can be multiple restaurants

router.get("/get_single_restaurant_details_by_id/:id", getRestaurantById); // This route will give only one restaurant based on its id

router.get("/get_meal_type_list",MealTypeController) // This route will give all the mealtypes items 

router.get("/get_menu_items",MenuItemsController)  // This route will give all the menuitems of the restaurant
router.get("/get_menu_items/:r_id",MenuItemsById)  // This route will give the menuItems based on restaurant_id 

router.post("/register",registerUser) //This route will handle the post request on registration form 


router.post("/login",loginUser) // This Route will handle the Login form // if the user already exsits 

router.get("/profile",getProfile) // if user exsist and token matches the useeffect will give this user to the frontend on every render 
module.exports = router;
