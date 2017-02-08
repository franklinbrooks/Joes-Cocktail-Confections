const models = require('../db/models/index');
/*
 Function to get orders. Running a query to grab Orders based on the user's id.
*/
function getOrders(req, res, next) {
  models.sequelize.query(
    'SELECT "Products"."productName", "Orders"."id", "Products"."category", "Products"."price", "Products"."unitSize", "Products"."alcohol", "Orders"."quantity", "Users"."username" FROM "Users" JOIN "Orders" ON "Users"."id" = "Orders"."userId"JOIN "Products" ON "Products"."id" = "Orders"."productId" WHERE "Users"."id" = :id',
   {   //req.user.id
    replacements: { id: req.user.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
  }).then((orders) => {
    console.log('rendering orders');
    res.locals.orders = orders; // setting res.locals object to access in the response
    return next(); // next function
  });
}

/*
Creating an order
Pulling User Id from request object
*/
function createOrder(req, res) {
  return models.Order.create({
    quantity: req.body.quantity,
    productId: req.body.productId,
    userId: req.user.id
  });
}
/* Exporting functions */
module.exports = {
  getOrders,
  createOrder
}
