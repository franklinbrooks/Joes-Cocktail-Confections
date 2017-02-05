const models = require('../db/models/index');

function getOrders(req, res, next) {
  models.sequelize.query('SELECT "Products"."product_name", "Products"."category", "Products"."price", "Products"."unit_size", "Products"."alcohol", "User"."name" FROM"Users" JOIN "Orders" ON "Users"."id" = "Orders"."user_id"JOIN "Products" ON "Products"."id" = "Orders"."product_id" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
  }).then((orders) => {
    res.locals.orders = orders; // setting res.locals object to access in the response
    return next(); // next function
  });
}


module.exports = getOrders;
