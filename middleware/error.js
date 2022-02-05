const { logger } = require("../models/logger");

module.exports = function (err, req, res, next) {
  logger.log("error", err.message, err);
  res.status(500).send(err.message);
};
