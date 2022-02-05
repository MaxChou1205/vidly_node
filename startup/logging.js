require("express-async-errors");
require("../models/logger");

module.exports = function () {
  // process.on("uncaughtException", ex => {
  //   uncaughtExceptionLogger.error(ex.message);
  // });
  // throw new Error("something error during startup.");

  process.on("unhandledRejection", ex => {
    throw ex;
  });
  // const p = Promise.reject(new Error("something failed miserably."));
  // p.then(() => console.log("Done"));
};
