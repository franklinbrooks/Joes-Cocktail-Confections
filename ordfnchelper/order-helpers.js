const models = require('../db/models/index');

/* Getting orders */
function getOrders(req, res, next) {
  models.sequelize.query('SELECT "Products"."product_name", "Products"."category", "Products"."price", "Products"."unit_size", "Products"."alcohol", "User"."name" FROM"Users" JOIN "Orders" ON "Users"."id" = "Orders"."user_id"JOIN "Products" ON "Products"."id" = "Orders"."product_id" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
  }).then((orders) => {
    res.locals.orders = orders; // setting res.locals object to access in the response
    return next(); // next function
  });
}

/* Creating an order */
function createOrder(req, res) {
  return models.Order.create({
    quantity: req.body.quantity,
    productId: req.body.productId
  });
}
/* Exporting functions */
module.exports = {
  getOrders,
  createOrder
}
