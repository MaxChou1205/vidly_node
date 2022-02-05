// 可以用套件 express-async-errors 取代，留著備查
module.exports = function (handler) {
  return async (res, req, next) => {
    try {
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  };
};

// usage

// const asyncMiddleware = require('./async');

// router.get("/", asyncMiddleware(async (req, res) => {
//   const genres = await Genre.find().sort("name");
//   res.send(genres);
// }));
