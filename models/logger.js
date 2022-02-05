const winston = require("winston"); // logger library
require("winston-mongodb");

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.MongoDB({
      db: process.env.DB_STRIGN,
      level: "error"
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "exceptions.log" })
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: "exceptions.log" })
  ]
  // exitOnError: false
});

// const uncaughtExceptionLogger = winston.createLogger({
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.File({
//       filename: "uncaughtException.log",
//       level: "error"
//     })
//   ]
// });

exports.logger = logger;
// exports.uncaughtExceptionLogger = uncaughtExceptionLogger;
