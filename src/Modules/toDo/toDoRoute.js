import express from "express";
import * as toDoController from "./toDoController.js";

let router = express.Router();

router
  .route("/")
  .get(toDoController.getAllToDo)
  .post(toDoController.createToDo);

router.route("/:id").patch(toDoController.editToDo);

export default router;
