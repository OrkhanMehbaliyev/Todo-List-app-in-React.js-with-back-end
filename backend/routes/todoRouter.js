const { HTTP_METHODS } = require("../helpers/httpMethods");
const todoController = require("../controllers/todoController");

const handleTodoRoutes = (req, res) => {
  const { method } = req;
  switch (method) {
    case HTTP_METHODS.GET:
      todoController.getAllTodos(req, res);
      break;
    case HTTP_METHODS.POST:
      todoController.addTodo(req, res);
      break;
    case HTTP_METHODS.DELETE:
      todoController.deleteTodo(req, res);
      break;
    case HTTP_METHODS.PUT:
      todoController.updateToDo(req, res);
      break;
  }
};

module.exports = { handleTodoRoutes };
