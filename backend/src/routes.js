import { Router } from "express";

import UserController from "./controllers/DevController";
import SearchController from "./controllers/SearchController";

const routes = new Router();

routes.get("/dev", UserController.store);
routes.post("/devinfo", UserController.show);
routes.get("/devs", UserController.index);

routes.get("/search", SearchController.index);

export default routes;
