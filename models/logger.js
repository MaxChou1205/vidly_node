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
    new winston.transports.File({ filename: "logfile.log" }),
    new winston.transports.MongoDB({
      db: process.env.DB_STRIGN,
      level: "error"
    })
  ],
  exceptionHandlers: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.prettyPrint()
      )
    }),
    new winston.transports.File({ filename: "exceptions.log" })
  ]
  // rejectionHandlers: [
  //   new winston.transports.File({ filename: "exceptions.log" })
  // ]
  // exitOnError: false
});

module.exports = logger;
