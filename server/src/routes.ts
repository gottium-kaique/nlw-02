import { Router } from "express"
import ClassesController from "./controllers/ClassesController"
import ConnectionsController from "./controllers/ConnectionsController"

const routes = Router()

routes.get("/classes", ClassesController.index)
routes.post("/classes", ClassesController.create)

routes.get("/classes-list", ClassesController.list)

routes.post("/connections", ConnectionsController.create)
routes.get("/connections", ConnectionsController.index)

export default routes