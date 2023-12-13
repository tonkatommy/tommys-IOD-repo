const Shop = require("../libraries/Shop");
const myShop = new Shop();

// Get products controller call
// Using the Shop library a call to getProducts
module.exports.get_products = (req, res) => {
  myShop.getProducts().then((response) => {
    res.status(200);
    res.json(response.data);
  });
};

// Get categories controller call
// Using the Shop library a call to getCategories
module.exports.get_categories = (req, res) => {
  myShop.getCategories().then((response) => {
    res.status(200);
    res.json(response.data);
  });
};
