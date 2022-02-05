const mongoose = require("mongoose");
const logger = require("../models/logger");

module.exports = function () {
  mongoose
    .connect(process.env.DB_STRIGN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => logger.info("Connected to MongoDB..."));
};
