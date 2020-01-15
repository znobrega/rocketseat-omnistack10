import express from "express";
import routes from "./routes";
import mongoose from "mongoose";

class App {
  constructor() {
    this.server = express();
    this.middleswares();
    this.routes();

    mongoose.connect(
      "mongodb+srv://carlos:nobrega@cluster0-xjyhm.mongodb.net/devRocketseat?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }

  middleswares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
