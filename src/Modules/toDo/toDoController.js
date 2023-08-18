import { toDoModel } from "../../../models/ToDo.js";
import { catchError } from "../../utils/catchAsyncError.js";

export const createToDo = catchError(async (request, response, next) => {
  let toDo = new toDoModel(request.body);
  await toDo.save();
  response.status(201).json({
    message: "Add task successfully",
    toDo,
  });
});

export const getAllToDo = catchError(async (request, response, next) => {
  let toDos = await toDoModel.find();
  response.status(200).json({
    toDos,
  });
});

export const editToDo = catchError(async (request, response, next) => {
  const { id } = request.params;
  const { state } = request.body;
  const updatedTodo = await toDoModel.findByIdAndUpdate(
    id,
    { state },
    { new: true }
  );
  response.status(201).json({
    message: "updated successfully",
    updatedTodo,
  });
});
