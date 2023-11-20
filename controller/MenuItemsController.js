const MenuItems_Model = require("../models/MenuItemsModel");

const MenuItemsController = async (req, res) => {
  const menuItems_result = await MenuItems_Model.find();
//   console.log(menuItems_result);
  res.status(200).send({ MenuItemsData: true, menuItems_result });
};
const MenuItemsById = async (req, res) => {
  const { r_id } = req.params;
  const menuItems_ById = await MenuItems_Model.find({
    restaurantId: r_id,
  });
//   console.log(menuItems_ById);
  res.status(200).send({ MenuItemsData: true, menuItems_ById });
};

module.exports = { MenuItemsController, MenuItemsById };
