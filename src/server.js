const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");
const { contactsRouter } = require("./contacts/contacts.router");

exports.CRUDServer = class CRUDServer {
  constructor() {
    this.app = null;
  }
  start() {
    this.initServer();
    this.initMiddlewares();
    // this.initDbConnection();
    this.initRoutes();
    this.initErrorHandling();
    this.startListening();
  }

  initServer() {
    this.app = express();
  }

  initMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors({origin: process.env.ALLOWED_ORIGIN}));
  }

  initRoutes() {
    this.app.use("/contacts", contactsRouter);
  }

  initErrorHandling() {
    this.app.use((err, req, res, next) => {
      const status = err.status || 500;

      return res.status(status).json({message: err.message});
    });
  }

  startListening() {
    this.app.listen(process.env.PORT, () => {
      console.log("Started listening on port", process.env.PORT);
    });
  }
};
