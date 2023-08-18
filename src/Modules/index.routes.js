import toDoRoute from "./toDo/toDoRoute.js";
import { ErrorMessage } from "../utils/ErrorMessage.js";

export function allRoutes(app) {
  app.use("/toDos", toDoRoute);

  //! Not Found Page
  app.use((request, response, next) => {
    next(ErrorMessage(404, `Not found - ${request.originalUrl}`));
  });

  //! to catch any error
  app.use((error, request, response, next) => {
    console.log(error);
    response.status(error.status || 500).json({
      error: error.message,
      statusError: error.status,
    });
  });
}
